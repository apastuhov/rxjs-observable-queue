# rxjs-observable-queue

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/rxjs-observable-queue)

# ObservableQueue

Class allows to push observables into queue dynamically and execute them in order of addition.

## What is the problem?

You have a function which generates observables. Every observable runs some async task and completes with some delay after user action.

Every next generated observable should start only if previous one was completed.

But data and subscribers of these observables are independent, we do not need to merge them into one subscribtion.

**Note:** Use-case can become more clear if you will imagine that there are several functions which generate observables which displays popup-windows and waits for user actions.

**P.S.** it is clear that use-case with modal has invalid design(architecture), but it is just for example ;)

## Without ObservableQueue

Actual output: (order is always random)
```
9
7
5
3
10
1
8
6
2
11
4
```

## With ObservableQueue

Actual output: (order is always the same)
```
1
2
3
4
5
6
7
8
9
10
11
```