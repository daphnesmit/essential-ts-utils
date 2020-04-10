# Essential Typescript Utils!

Essential Typescript utils is a collection of useful common used Javascript utilities written in Typescript.

## 🎉 How to use

```typescript
import { sum } from 'essential-ts-utils'

const total = sum(5, 4)
console.log('The total of 5 + 4 equals ', total)

```

## 🚩 Linting

### Prettier
Nicer code with [prettier](https://prettier.io/)!


### Commitlint
You might want to remove or customize [Commitlint](https://github.com/conventional-changelog/commitlint).
Commitlint checks if your commit messages meet the conventional commit format. But in case you are using JIRA you might want to have a different commit message structure, example [here](https://github.com/Gherciu/commitlint-jira] or [here](https://www.npmjs.com/package/commitlint-config-jira]


## 🚀 Typescript
This project is written to typescript. If you aren't that familiar with typescript this [cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) is a great resource to get familiar.

## 🌲 Tree Shakeable
Tree shaking is a method of optimising our code bundles by eliminating any code from the final file that isn’t actually being used.
When using these utils you are garanteed that you will only import the functions you actually use in your code. Resulting in a smaller bundle size!

This is especially important for people like me who have [BundlePhobia](https://bundlephobia.com/).