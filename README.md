# Essential Typescript Utils!

Essential Typescript utils is a collection of useful common used Javascript utilities written in Typescript.

You have a nice utility?
Great! Contribute by sending a Pull Request!

## 📄 The current list

| Utils         | Description                                    |
| ------------- |------------------------------------------------|
| average       | calculate the average of a number array        |
| emojiKiller   | remove all emojis from a string                |
| groupBy       | group an array by a property                   |
| pad           | add padding zero's to a number: 7 > 07         |
| parseJson     | parse json string safely with a try catch      |
| sum           | sum values: 1 + 1 = 2                          |
| ucfirst       | uppercase the first character of a string      |

## 🎉 How to use

```typescript
import { sum, pad } from 'essential-ts-utils'

const total = sum(5, 4)
const padded = pad(7, 2)

console.log('The total of 5 + 4 equals ', total)
console.log('The zero padded value equals ', padded)

```

## Contribution information about the tech stack

### 🚩 Linting

#### Prettier
Nicer code with [prettier](https://prettier.io/)!


#### Commitlint
You might want to remove or customize [Commitlint](https://github.com/conventional-changelog/commitlint).
Commitlint checks if your commit messages meet the conventional commit format. But in case you are using JIRA you might want to have a different commit message structure, [example](https://github.com/Gherciu/commitlint-jira) and [another](https://www.npmjs.com/package/commitlint-config-jira)

To launch the commit helper:
```
yarn commit
```


### 🚀 Typescript
This project is written to typescript. If you aren't that familiar with typescript this [cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) is a great resource to get familiar.


### 🌲 Tree Shakeable
Tree shaking is a method of optimising our code bundles by eliminating any code from the final file that isn’t actually being used.
When using these utils you are garanteed that you will only import the functions you actually use in your code. Resulting in a smaller bundle size!

This is especially important for people like me who have [BundlePhobia](https://bundlephobia.com/result?p=essential-ts-utils).