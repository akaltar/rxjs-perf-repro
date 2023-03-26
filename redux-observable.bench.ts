import { Observable, mergeMap } from "npm:rxjs@7.8.0";
import {
  createEpicMiddleware,
  combineEpics,
  ofType,
  StateObservable,
  Epic,
} from "npm:redux-observable@2.0.0";
import { createStore, applyMiddleware, Action, Reducer } from "npm:redux@4.2.1";

type RootState = {
  num: number;
};

type RootAction = AddAction | BigAction;

interface AddAction extends Action<string> {
  type: "add";
  payload: number;
}

interface BigAction extends Action<string> {
  type: "big";
  payload: { repeat: number; add: number };
}

const createReducer =
  (): Reducer<RootState, RootAction> =>
  (state: RootState = INITIAL_STATE, action: RootAction): RootState => {
    if (action.type === "add")
      return {
        num: state.num + action.payload,
      };
    else return state;
  };

const INITIAL_STATE = {
  num: 0,
};

const bigActionEpic: Epic = (
  action$: Observable<RootAction>,
  store$: StateObservable<RootState>
) => {
  return action$.pipe(
    ofType<RootAction, "big" | "add", BigAction>("big"),
    mergeMap((val, _index) => {
      const arr = [];
      for (let i = 0; i < val.payload.repeat; i += 1) {
        arr.push({ type: "add", payload: 1 });
      }
      return arr;
    })
  );
};

let falseEpicId = 1;
const createFalseEpic = (): Epic<RootAction, RootAction, RootState> => {
  const fakeType = `${falseEpicId}` as "big"; // we don't care that this never matches, it's just there to force creation of more AsyncActions
  falseEpicId = falseEpicId + 1;
  return (action$: Observable<RootAction>) => {
    return action$.pipe(ofType(fakeType));
  };
};

const makeRootEpic = (numFalseEpics: number) => {
  const falseEpics = [];
  for (let i = 0; i < numFalseEpics; ++i) {
    falseEpics.push(createFalseEpic());
  }
  return combineEpics<RootAction, RootAction, RootState>(
    bigActionEpic,
    ...falseEpics
  );
};

const makeStore = (numFalseEpics: number) => {
  const rootReducer = createReducer();

  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >();

  const MIDDLEWARE = [epicMiddleware];

  const composedEnhancers = applyMiddleware(...MIDDLEWARE);

  const store = createStore(rootReducer, INITIAL_STATE, composedEnhancers);

  epicMiddleware.run(makeRootEpic(numFalseEpics));

  return store;
};

const epicCounts = [1, 5, 10, 50, 100, 500];
const actionCounts = [1, 5, 10, 50, 100, 500];

epicCounts.forEach((numEpics) => {
  const store = makeStore(numEpics);

  actionCounts.forEach((numActions) => {
    const targetNum = numActions;
    const group = `${numEpics}-${numActions}`;
    Deno.bench(
      `${numEpics} fake epic, ${numActions} batched actions`,
      { group },
      () => {
        return new Promise((resolve) => {
          store.subscribe(() => {
            if (store.getState().num >= targetNum) {
              resolve();
            }
          });

          store.dispatch({
            type: "big",
            payload: { repeat: numActions, add: 1 },
          });
        });
      }
    );

    Deno.bench(
      `${numEpics} fake epics, ${numActions} sequential actions`,
      { baseline: true, group },
      () => {
        return new Promise((resolve) => {
          store.subscribe(() => {
            if (store.getState().num >= targetNum) {
              resolve();
            }
          });

          for (let i = 0; i < numActions; i += 1) {
            store.dispatch({ type: "add", payload: 1 });
          }
        });
      }
    );
  });
});
