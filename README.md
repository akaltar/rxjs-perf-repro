This repo reproduces a performance issue with redux-observable and rxjs

The issue shows up when you have lots of epics, and you dispatch batched actions

To run the benchmarks, run the command `deno bench`. You can also save a json with `deno bench --json > file.json`
