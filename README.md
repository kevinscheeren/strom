# @kevinscheeren/strom

## Introduction

A CLI distributed through npm to automatically execute GitFlow workflows.

## GitFlow

<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=202">

### What is GitFlow?

Giflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model/). Compared to trunk-based development, Giflow has numerous, longer-lived branches and larger commits. Under this model, developers create a feature branch and delay merging it to the main trunk branch until the feature is complete. These long-lived feature branches require more collaboration to merge and have a higher risk of deviating from the trunk branch. They can also introduce conflicting updates.

Gitflow can be used for projects that have a scheduled release cycle and for the [DevOps best practice](https://www.atlassian.com/devops/what-is-devops/devops-best-practices) of [continuous delivery](https://www.atlassian.com/continuous-delivery). This workflow doesn’t add any new concepts or commands beyond what’s required for the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Instead, it assigns very specific roles to different branches and defines how and when they should interact. In addition to feature branches, it uses individual branches for preparing, maintaining, and recording releases. Of course, you also get to leverage all the benefits of the Feature Branch Workflow: pull requests, isolated experiments, and more efficient collaboration. [(Source / read more)](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### How to use this CLI?

(No **Windows** Support - GitBash & WSL should work, but are not officially supported)
`strom` can also be replaced with `stm`.

```bash
# init a project
strom init

# features
strom feature start [feature-name]
strom feature finish [feature-name]

# hotfixes
strom hotfix start [hotfix-name]
strom hotfix finish [hotfix-name]

# releases (prefix version code with v manually)
strom release start v[release-number]
strom release finish v[release-number]
```

## Installation

### Requirements

- [Git](https://git-scm.com/) is installed
- [NodeJS](https://nodejs.org/en/) is installed
- [npm](https://www.npmjs.com/) is installed

### Set Up

**Official Releases:**

You can use it locally for specific NodeJS Projects

```bash
npm install --save-dev @kevinscheeren/strom
```

or install it globally

```bash
npm install -g @kevinscheeren/strom
```

**Beta Versions / Pre-Release Versions:**

For beta versions clone the `develop` branch, cd into it and execute the following command.

```bash
npm install && npm run build && npm link
```
