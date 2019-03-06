# Developer Guide

> <img align="bottom" alt="code" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/code.svg">
> This guide is for those who want to contribute code to **enum-factory**.
> This guide describes how to set up your development environment so that you
> can build and test **enum-factory**.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->

- [1. Recommended skills](#1-recommended-skills)
- [2. Development software](#2-development-software)
- [3. Getting the source code](#3-getting-the-source-code)
- [4. Installing dependencies](#4-installing-dependencies)
- [5. Running in a Terminal](#5-running-in-a-terminal)
- [6. Testing](#6-testing)
- [7. Source code style guidelines](#7-source-code-style-guidelines)
- [8. DevSecOps](#8-devsecops)
- [9. Design](#9-design)
- [10. Roadmap](#10-roadmap)

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Recommended skills

In order to work with **enum-factory** as a developer, we recommend you feel
comfortable with:

| Skill                                                     | Reason                                                                                                     |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![code][octicon-code]&nbsp;JavaScript                     | **enum-factory** is written in JavaScript (CommonJS)                                                       |
| ![markdown][octicon-markdown]&nbsp;Documentation          | Docs build community and enable asyncronous collaboration                                                  |
| ![package][octicon-package]&nbsp;NPM                      | We use the npm dependency manager and publish to the npm public registry                                   |
| ![platform][octicon-server]&nbsp;Node.js                  | **enum-factory** runs on Node.js                                                                           |
| ![terminal][octicon-terminal]&nbsp;Command-line-interface | We use the CLI to build, test, and publish **enum-factory**                                                |
| ![tests][octicon-beaker]&nbsp;Unit testing                | Unit tests are a form of executable documentation that make collaboration, fixes, and refactoring possible |

If that sounds like you, then continue reading to get started.

## 2. Development software

Before you can build and test **enum-factory**, you must install and configure
the following products on your development machine:

1.  [Git ![link-external][octicon-link-external]](http://git-scm.com)

    _Why:_

    > **enum-factory** is hosted on github and uses Git for source control. In
    > order to obtain the source code, you must first install Git on your
    > system. Instructions for installing and setting up Git can be found at
    > <https://help.github.com/articles/set-up-git>.

2.  [Node.js ![link-external][octicon-link-external]](http://nodejs.org),
    (version specified in the engines field of
    [`package.json`](../package.json)).

    _Why:_

    > **enum-factory** uses Node.js modules to generate tables of contents,
    > version, and publish documentation.

3.  **NPM** (which installs with Node.js) or
    [Yarn ![link-external][octicon-link-external]](https://yarnpkg.com)

    _Why:_

    > NPM and Yarn install and update `enum-factory's` third-party dependencies.

## 3. Getting the source code

Fork and clone the **enum-factory** repository:

1.  [**Sign in**](https://github.com/login) to github.
2.  [**Fork**](https://docs.github.com/ee/github-basics/fork-project.html#how-to-fork-a-project)
    the
    [main **enum-factory** repository](https://github.com/gregswindle/enum-factory/forks/new)
    (aka, "`origin`").
3.  **Clone _your_ fork** of the **enum-factory** repository and define an
    `upstream` remote pointing back to the **enum-factory** repository that you
    forked in the first place.

    > ```shell
    > # Clone your github repository:
    > git clone git@github.com:<your-account>/enum-factory.git
    >
    > # Go to the repo root directory:
    > cd enum-factory
    >
    > # Add the main github repository as an upstream remote
    > # to your repository:
    > git remote add upstream https://github.com/gregswindle/enum-factory.git
    > ```

---

<details>

<summary><strong><img alt="directory structure" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-directory.svg" height="30" width="30" valign="middle"> Toggle project directory structure view...</strong></summary>

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=../../) -->

```
enum-factory/
├─┬ .git/**
├─┬ .github/
│ ├─┬ issue_templates/
│ │ ├── Defect.md
│ │ ├── Feature.md
│ │ ├── Metric.md
│ │ └── Refactoring.md
│ ├─┬ merge_request_templates/
│ │ └── merge_request.md
│ └─┬ rc/
│   ├─┬ bash/
│   │ └── .envvarsrc
│   ├─┬ jsdoc/
│   │ └── conf.json
│   ├─┬ md/
│   │ ├── .remarkignore
│   │ ├── .remarkrc.yml
│   │ └── markdown.config.js
│   └─┬ sonar/
│     └── scan.js
├─┬ .vscode/
│ └── settings.json
├─┬ docs/
│ ├─┬ .ci/
│ │ └── eslint-rules
│ ├─┬ developer-guide/
│ │ ├── codacy-ebook-metrics.pdf
│ │ ├── collaborator-guide.md
│ │ └── README.md
│ ├─┬ includes/
│ │ └── octicons.md
│ ├─┬ maintainer-guide/
│ │ ├─┬ governance-models/
│ │ │ ├── benevolent-dictator-governance-model.md
│ │ │ ├── governance-role-terminology-comparision.md
│ │ │ ├── loosely-coupling-work-from-orgs.md
│ │ │ ├── meritocratic-governance-model.md
│ │ │ └── README.md
│ │ ├── codacy-ebook-code-reviews.pdf
│ │ ├── displaying-product-maturity.md
│ │ ├── governance.md
│ │ ├── issues.md
│ │ ├── pull-requests.md
│ │ ├── README.md
│ │ └── releases.md
│ ├── README.md
│ └── STYLE_GUIDES.md
├─┬ lib/
│ ├─┬ __tests__/
│ │ ├─┬ __fixtures__/
│ │ │ ├── gl-got-resp-failure.json
│ │ │ ├── gl-got-resp-success.js
│ │ │ ├── options.json
│ │ │ ├── regexes.json
│ │ │ └── signatures.json
│ │ ├─┬ __mocks__/
│ │ │ └── is-main.js
│ │ ├── cli.test.js
│ │ ├── enum-factory.test.js
│ │ └── env-config.test.js
│ ├─┬ cli/
│ │ ├─┬ __tests__/
│ │ │ ├── cli-client.test.js
│ │ │ └── run.test.js
│ │ ├─┬ signature-ctrl/
│ │ │ ├─┬ __tests__/
│ │ │ │ ├─┬ __fixtures__/
│ │ │ │ │ ├── gl-got-resp-success.js
│ │ │ │ │ └── signatures.json
│ │ │ │ └── signature-ctrl.test.js
│ │ │ └── index.js
│ │ ├── cli-client.js
│ │ ├── options.js
│ │ └── run.js
│ ├─┬ github/
│ │ ├─┬ __tests__/
│ │ │ ├─┬ __fixtures__/
│ │ │ │ ├── git-lab-error.json
│ │ │ │ ├── github-response-mock.json
│ │ │ │ └── got-resp.json
│ │ │ ├── assign-content-string.test.js
│ │ │ ├── github.test.js
│ │ │ ├── resolve-by.test.js
│ │ │ ├── sanitize.test.js
│ │ │ └── to-resource-path.test.js
│ │ ├── api-defaults.js
│ │ ├── assign-content-string.js
│ │ ├── index.js
│ │ ├── is-git-lab-error.js
│ │ ├── resolve-by.js
│ │ ├── sanitize.js
│ │ └── to-resource-path.js
│ ├─┬ signature/
│ │ ├─┬ __tests__/
│ │ │ ├── signature-class.test.js
│ │ │ └── signature.test.js
│ │ ├── index.js
│ │ ├── null-signature.js
│ │ ├── signature.js
│ │ ├── valid-signature-parts.js
│ │ └── valid-signature-types.js
│ ├── cli.js
│ ├── env-config.js
│ └── index.js
├── .editorconfig
├── .env.defaults
├── .env.schema
├── .eslintignore
├── .eslintrc.yml
├── .fossa.yml
├── .gitattributes
├── .gitignore
├── .github-ci.yml
├── .npmignore
├── .npmrc
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── npm-shrinkwrap.json
├── package.json
├── README.md
├── ROADMAP.md
├── signatures.json
└── sonar-project.properties
```

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

---

## 4. Installing dependencies

Next, install the JavaScript modules needed to build and test **enum-factory**:

```shell
# Install all project dependencies (package.json)
npm install
```

---

<details><summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/package.svg" height="30" width="30" valign="bottom"> <strong>Toggle **enum-factory**  view...</strong></summary>

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE) -->

| **Dependency**                                                                                                                                         | **Description**                                                                                                             | **Version** | **License**         | **Type**   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------- | ---------- |
| [atob@^2.1.2](https://git.coolaj86.com/coolaj86/atob.js.git)                                                                                           | atob for Node.JS and Linux / Mac / Windows CLI (it's a one-liner)                                                           | 2.1.2       | (MIT OR Apache-2.0) | production |
| [dotenv-extended@^2.3.0](https://github.com/keithmorris/node-dotenv-extended#readme)                                                                   | A module for loading .env files and optionally loading defaults and a schema for validating all values are present.         | 2.3.0       | MIT                 | production |
| [git-repo-info@^2.1.0](https://github.com/rwjblue/git-repo-info)                                                                                       | Retrieve current sha and branch name from a git repo.                                                                       | 2.1.0       | MIT                 | production |
| [gl-got@^9.0.3](https://github.com/singapore/gl-got#readme)                                                                                            | Convenience wrapper for `got` to interact with the github API                                                               | 9.0.3       | MIT                 | production |
| [json-stringify-safe@5.0.1](https://github.com/isaacs/json-stringify-safe)                                                                             | Like JSON.stringify, but doesn't blow up on circular refs.                                                                  | 5.0.1       | ISC                 | production |
| [lodash.set@^4.3.2](https://lodash.com/)                                                                                                               | The lodash method `_.set` exported as a module.                                                                             | 4.3.2       | MIT                 | production |
| [lodash.topairs@^4.3.0](https://lodash.com/)                                                                                                           | The lodash method `_.toPairs` exported as a module.                                                                         | 4.3.0       | MIT                 | production |
| [meow@^5.0.0](https://github.com/sindresorhus/meow#readme)                                                                                             | CLI app helper                                                                                                              | 5.0.0       | MIT                 | production |
| [jsdoc@^3.5.5](https://github.com/jsdoc3/jsdoc#readme)                                                                                                 | An API documentation generator for JavaScript.                                                                              | 3.5.5       | Apache-2.0          | optional   |
| [markdown-magic@^0.1.25](https://github.com/DavidWells/markdown-magic#readme)                                                                          | Automatically update markdown files with content from external sources                                                      | 0.1.25      | MIT                 | optional   |
| [markdown-magic-dependency-table@^1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme)                                            | Generate table of information about dependencies automatically in markdown                                                  | 1.3.2       | MIT                 | optional   |
| [markdown-magic-directory-tree@^1.2.3](https://github.com/camacho/markdown-magic-directory-tree#readme)                                                | Print an archy tree for markdown file                                                                                       | 1.2.3       | MIT                 | optional   |
| [markdown-magic-package-scripts@^1.2.1](https://github.com/camacho/markdown-magic-package-scripts#readme)                                              | Print list of scripts in package.json with descriptions                                                                     | 1.2.1       | MIT                 | optional   |
| [remark@^10.0.1](https://remark.js.org)                                                                                                                | Markdown processor powered by plugins                                                                                       | 10.0.1      | MIT                 | optional   |
| [remark-cli@^6.0.1](https://remark.js.org)                                                                                                             | CLI to process markdown with remark using plugins                                                                           | 6.0.1       | MIT                 | optional   |
| [remark-preset-lint-markdown-style-guide@^2.1.2](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-markdown-style-guide) | remark preset to configure remark-lint with rules that enforce the markdown style guide                                     | 2.1.2       | MIT                 | optional   |
| [@semantic-release/changelog@^3.0.2](https://github.com/semantic-release/changelog#readme)                                                             | semantic-release plugin to create or update a changelog file                                                                | 3.0.2       | MIT                 | dev        |
| [@semantic-release/commit-analyzer@^6.1.0](https://github.com/semantic-release/commit-analyzer#readme)                                                 | semantic-release plugin to analyze commits with conventional-changelog                                                      | 6.1.0       | MIT                 | dev        |
| [@semantic-release/git@^7.0.8](https://github.com/semantic-release/git#readme)                                                                         | semantic-release plugin to commit release assets to the project's git repository                                            | 7.0.8       | MIT                 | dev        |
| [@semantic-release/github@^3.1.2](https://github.com/semantic-release/github#readme)                                                                   | semantic-release plugin to publish a github release                                                                         | 3.1.2       | MIT                 | dev        |
| [@semantic-release/npm@^5.1.4](https://github.com/semantic-release/npm#readme)                                                                         | semantic-release plugin to publish a npm package                                                                            | 5.1.4       | MIT                 | dev        |
| [@semantic-release/release-notes-generator@^7.1.4](https://github.com/semantic-release/release-notes-generator#readme)                                 | semantic-release plugin to generate changelog content with conventional-changelog                                           | 7.1.4       | MIT                 | dev        |
| [commitplease@^3.2.0](https://github.com/jzaefferer/commitplease#readme)                                                                               | Validates strings as commit messages                                                                                        | 3.2.0       | MIT                 | dev        |
| [eslint@^5.12.1](https://eslint.org)                                                                                                                   | An AST-based pattern checker for JavaScript.                                                                                | 5.12.1      | MIT                 | dev        |
| [eslint-config-prettier@4.0.0](https://github.com/prettier/eslint-config-prettier#readme)                                                              | Turns off all rules that are unnecessary or might conflict with Prettier.                                                   | 4.0.0       | MIT                 | dev        |
| [eslint-config-standard@^12.0.0](https://github.com/standard/eslint-config-standard)                                                                   | JavaScript Standard Style - ESLint Shareable Config                                                                         | 12.0.0      | MIT                 | dev        |
| [eslint-config-xo@^0.26.0](https://github.com/xojs/eslint-config-xo#readme)                                                                            | ESLint shareable config for XO                                                                                              | 0.26.0      | MIT                 | dev        |
| [eslint-find-rules@3.3.1](https://github.com/sarbbottam/eslint-find-rules#readme)                                                                      | Find built-in ESLint rules you don't have in your custom config.                                                            | 3.3.1       | MIT                 | dev        |
| [eslint-plugin-import@^2.15.0](https://github.com/benmosher/eslint-plugin-import)                                                                      | Import with sanity.                                                                                                         | 2.15.0      | MIT                 | dev        |
| [eslint-plugin-json@^1.3.2](https://github.com/azeemba/eslint-plugin-json#readme)                                                                      | Lint JSON files                                                                                                             | 1.3.2       | ISC                 | dev        |
| [eslint-plugin-no-unsafe-innerhtml@^1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/)                                          | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML                                          | 1.0.16      | MPL-2.0             | dev        |
| [eslint-plugin-no-unsanitized@^3.0.2](https://github.com/mozilla/eslint-plugin-no-unsanitized/)                                                        | ESLint rule to disallow unsanitized code                                                                                    | 3.0.2       | MPL-2.0             | dev        |
| [eslint-plugin-node@^8.0.1](https://github.com/mysticatea/eslint-plugin-node#readme)                                                                   | Additional ESLint's rules for Node.js                                                                                       | 8.0.1       | MIT                 | dev        |
| [eslint-plugin-prettier@^3.0.1](https://github.com/prettier/eslint-plugin-prettier#readme)                                                             | Runs prettier as an eslint rule                                                                                             | 3.0.1       | MIT                 | dev        |
| [eslint-plugin-promise@^4.0.1](https://github.com/xjamundx/eslint-plugin-promise#readme)                                                               | Enforce best practices for JavaScript promises                                                                              | 4.0.1       | ISC                 | dev        |
| [eslint-plugin-scanjs-rules@^0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/)                                                         | ESLint plugin that contains ScanJS rules                                                                                    | 0.2.1       | MPL-2.0             | dev        |
| [eslint-plugin-security@^1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme)                                                         | Security rules for eslint                                                                                                   | 1.4.0       | Apache-2.0          | dev        |
| [eslint-plugin-sonarjs@^0.2.0](https://github.com/SonarSource/eslint-plugin-sonarjs)                                                                   | SonarJS rules for ESLint                                                                                                    | 0.2.0       | LGPL-3.0            | dev        |
| [eslint-plugin-standard@^4.0.0](https://github.com/standard/eslint-plugin-standard#readme)                                                             | ESlint Plugin for the Standard Linter                                                                                       | 4.0.0       | MIT                 | dev        |
| [eslint-plugin-unicorn@^7.1.0](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)                                                           | Various awesome ESLint rules                                                                                                | 7.1.0       | MIT                 | dev        |
| [eslint-plugin-xss@^0.1.9](https://github.com/Rantanen/eslint-plugin-xss#readme)                                                                       | Validates XSS related issues of mixing HTML and non-HTML content in variables.                                              | 0.1.9       | ISC                 | dev        |
| [execa@^1.0.0](https://github.com/sindresorhus/execa#readme)                                                                                           | A better `child_process`                                                                                                    | 1.0.0       | MIT                 | dev        |
| [generator-jest@1.6.0](https://github.com/SBoudrias/generator-jest#readme)                                                                             | Add jest support to any projects                                                                                            | 1.6.0       | MIT                 | dev        |
| [get-stream@^4.1.0](https://github.com/sindresorhus/get-stream#readme)                                                                                 | Get a stream as a string, buffer, or array                                                                                  | 4.1.0       | MIT                 | dev        |
| [husky@^1.3.1](https://github.com/typicode/husky#readme)                                                                                               | Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...) | 1.3.1       | MIT                 | dev        |
| [jest@24.0.0](https://jestjs.io/)                                                                                                                      | Delightful JavaScript Testing.                                                                                              | 24.0.0      | MIT                 | dev        |
| [jest-junit@6.2.0](https://github.com/jest-community/jest-junit#readme)                                                                                | A jest reporter that generates junit xml files                                                                              | 6.2.0       | Apache-2.0          | dev        |
| [jest-sonar-reporter@2.0.0](https://github.com/3dmind/jest-sonar-reporter#readme)                                                                      | A Sonar test reporter for Jest.                                                                                             | 2.0.0       | MIT                 | dev        |
| [lec@^1.0.1](https://github.com/iShafayet/lec)                                                                                                         | Command Line Wrapper for Line Ending Corrector (An utility that makes sure your files have consistent line endings)         | 1.0.1       | MIT                 | dev        |
| [lint-staged@8.1.1](https://github.com/okonet/lint-staged#readme)                                                                                      | Lint files staged by git                                                                                                    | 8.1.1       | MIT                 | dev        |
| [lodash.noop@^3.0.1](https://lodash.com/)                                                                                                              | The lodash method `_.noop` exported as a module.                                                                            | 3.0.1       | MIT                 | dev        |
| [prettier@^1.16.1](https://prettier.io)                                                                                                                | Prettier is an opinionated code formatter                                                                                   | 1.16.1      | MIT                 | dev        |
| [semantic-release@^15.13....](https://github.com/semantic-release/semantic-release#readme)                                                             | Automated semver compliant package publishing                                                                               | 15.13.3     | MIT                 | dev        |
| [sonarqube-scanner@2.1.2](https://github.com/bellingard/sonar-scanner-npm)                                                                             | SonarQube/SonarCloud Scanner for the JavaScript world                                                                       | 2.1.2       | LGPL-3.0            | dev        |
| [yo@2.0.5](http://yeoman.io)                                                                                                                           | CLI tool for running Yeoman generators                                                                                      | 2.0.5       | BSD-2-Clause        | dev        |

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

---

## 5. Running in a Terminal

Run
[npm-link ![npm-link documentation][octicon-link-external]](https://docs.npmjs.com/cli/link.html)
to user <samp>enum-factory's</samp> CLI (Command-Line Interface).

1. Open a Terminal and change directories to your local repository/project
   folder:

   ```shell
   cd /path/to/local/enum-factory
   ```

1. Create a global symbolic link to **enum-factory**:

   ```shell
   npm link
   ```

1. Now you can test and use **enum-factory** with two (2) CLI commands:

   ```shell
   enum-factory --help

   # ...or

   get-signatures --help
   ```

1. If successful, you should see output like this:

   ```shell
   NAME
     enum-factory - GET signatures.json, a single collection of
                           data-leakage definitions.
                           (alias: get-signatures)

   Usage
     $ enum-factory [options]
     $ get-signatures [options]

   Options
     --base-url    The common base URL to the github v4 API.
                   Defined in the ENV variable github_ENDPOINT.
                   [Default: https://github.com/api/v4]
     --file-path   The resource path to signatures.json.
                   [Default: signatures.json]
     --project-id  The namespace or unique identifier for the repo
                   with the master signatures.json file.
                   [Default: 10416318]
     --ref         The name of branch, tag or commit.
                   [Default: master]
     --token       github personal access token.
                   Defined in the ENV variable github_TOKEN.
     --verbose     Display the entire response.
                   [Default: true]

     --help        Show this message and exit.
     --version     Show your installed version and exit.

   Examples
     $ enum-factory

     # => [<Signature>,<Signature>,...,<Signature>]
     $ **enum-factory** --base-url="https://github.example.com/api/v4"
     # => [<Signature>,<Signature>,...,<Signature>]
     $ get-signatures --token="<your-access-token>"
     # => [<Signature>,<Signature>,...,<Signature>]

   ```

## 6. Testing

> [![Jest BDD][jest-logo] **enum-factory** uses Jest for Behavior-Driven
> Development (BDD) and unit tests
> ![link-external][octicon-link-external]][jest-url].
>
> Your test suites must pass within coverage thresholds before your Merge
> Request will be reviewed on github.

To run tests:

```shell
$ npm test
# => Run all **enum-factory** tests on node
```

## 7. Source code style guidelines

![verified][octicon-verified] **enum-factory** uses

1.  [ESLint ![link-external][octicon-link-external]](http://clang.llvm.org/docs/ClangFormat.html)
    to evaluate and format source code;
2.  [Prettier ![link-external][octicon-link-external]](https://www.npmjs.com/package/eslint-plugin-prettier)
    to format JSON, Markdown, and YAML.
3.  [Standard JS code style
    ![link-external][octicon-link-external]][standardjs-url] for code clarity
    and community conventions.

You can both evaluate and format your all sources by running:

```shell
$ npm run lint
# => Formats and lints all JavaScript, JSON, Markdown, and
#    package.json.
```

You can also format sources by type:

```shell
# Evaluate and format JavaScript:
npm run lint:js

# Format JSON:
npm run lint:json

# Format all markdown files:
npm run lint:md
```

---

<details><summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/terminal.svg" height="30" width="30" valign="bottom"> <strong>View all available npm-scripts...</strong></summary>

_To execute any of the following scripts, open a Terminal and run:_

```bash
npm run <Script>
```

_Examples:_

```bash
# Auto-generate TOCs, dependency tables, etc.
npm run docs:md

# Lint all *.js source code files
npm run lint:js
```

<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->

| Script                       | Description                                                                                                                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ci:lint:js`                 | `eslint . --fix -f json -o eslint-report.json`                                                                                                                                                                 |
| `preci:test`                 | `npm run pretest && source ./.github/rc/bash/.envvarsrc`                                                                                                                                                       |
| `ci:test`                    | `dotenv-extended --path=.env --defaults=.env.defaults --errorOnMissing=false jest --coverage --verbose true`                                                                                                   |
| `postci:test`                | `npm run posttest && source ./.github/rc/bash/.envvarsrc && npm run qa:review:sonar`                                                                                                                           |
| `cli:lec`                    | `lec lib/cli.js -c LF`                                                                                                                                                                                         |
| `docs:api`                   | `rm -rf ./docs/api/ && ./node_modules/.bin/jsdoc ./lib/**/*.js -d ./docs/api/ -c ./.github/rc/jsdoc/conf.json -d ./docs/api/`                                                                                  |
| `docs:lint:js:rules`         | `eslint-find-rules`                                                                                                                                                                                            |
| `docs:lint:js:rules:current` | `eslint-find-rules --current --no-error .eslintrc.yml --verbose > ./docs/.ci/eslint-rules.txt`                                                                                                                 |
| `docs:lint:js:rules:unused`  | `eslint-find-rules --unused --no-error .eslintrc.yml --verbose >> ./docs/.ci/eslint-rules.txt`                                                                                                                 |
| `predocs:md`                 | `npm run docs:lint:js:rules`                                                                                                                                                                                   |
| `docs:md`                    | `node .github/rc/md/markdown.config.js`                                                                                                                                                                        |
| `lint`                       | `npm run lint:js && npm run lint:json && npm run lint:md`                                                                                                                                                      |
| `lint:js`                    | `eslint . --fix -f json -o eslint-report.json`                                                                                                                                                                 |
| `lint:json`                  | `prettier --write **/*.json`                                                                                                                                                                                   |
| `lint:manifest`              | `npm prune && npm dedupe && npm shrinkwrap`                                                                                                                                                                    |
| `lint:md`                    | `remark --rc-path "./.github/rc/md/.remarkrc.yml" --ignore-path "./.github/rc/md/.remarkignore" .`                                                                                                             |
| `ls`                         | `npm ls --depth=0`                                                                                                                                                                                             |
| `postinstall`                | `npm run security:audit`                                                                                                                                                                                       |
| `prepare`                    | `npm run cli:lec && npm run deps:dedupe`                                                                                                                                                                       |
| `preqa:review:sonar`         | `npm start`                                                                                                                                                                                                    |
| `qa:review:sonar`            | `sonar-scanner -Dproject.settings=./sonar-project.properties -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.organization=$SONAR_ORGANIZATION -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=$SONAR_TOKEN` |
| `security:audit`             | `npm audit --json`                                                                                                                                                                                             |
| `security:fix`               | `npm audit fix --depth=100 --json`                                                                                                                                                                             |
| `semantic-release`           | `semantic-release`                                                                                                                                                                                             |
| `start`                      | `node -r dotenv-extended ./lib/env-config.js`                                                                                                                                                                  |
| `pretest`                    | `npm run lint:js`                                                                                                                                                                                              |
| `test`                       | `jest --coverage --verbose true`                                                                                                                                                                               |
| `posttest`                   | `npm run security:audit`                                                                                                                                                                                       |
| `test:create`                | `yo jest:test --`                                                                                                                                                                                              |
| `vars:git:branch:name`       | `git branch                                                                                                                                                                                                    |
| `vars:package:description`   | `node -pe "require('./package.json').description"`                                                                                                                                                             |
| `vars:package:keywords`      | `node -pe "require('./package.json').keywords.join(', ')"`                                                                                                                                                     |
| `vars:package:name`          | `node -pe "require('./package.json').name"`                                                                                                                                                                    |
| `vars:package:version`       | `node -pe "require('./package.json').version"`                                                                                                                                                                 |

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

---

## 8. DevSecOps

> [![github CI/CD logo][github-cicd-logo]][github-cicd-url]
>
> **enum-factory** uses [github CI/CD
> ![github documentation][octicon-link-external]][github-cicd-url] for
> continuous integration and delivery.

All tests are executed with Continuous Integration services.

1.  Pull Requests will only be approved and merged once all tests pass.
2.  github CI/CD will fail if any of the test suites fails, or a linting rule is
    violated.

---

<img valign="bottom" alt="alert" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/alert.svg">
CI will fail and the Pull Requests cannot be
merged unless changes pass:<br>
<br>

- Linting,
- Unit tests, and
- Code coverage thresholds

---

## 9. Design

**enum-factory** is a Node.js module. **enum-factory** is published to npm,
which is a public registry of Node.js packages. The community usually installs
Node.js packages with a dependency manager. The two most popular Node.js
dependency managers are

1. npm
2. Yarn

- Standalone software (with np)

1.  Single source-of-truth—-`signatures.json`—-for defining and detecting
    data-leakage.
2.  REST API module and Terminal client for retrieving all signatures.

All data-leakage definitions (e.g., regular expressions) MUST be defined in the
`signatures.json` file. All other applications, components, modules, etc., that
require data-loss detection SHOULD use **enum-factory** instead of defining
their own.

![**enum-factory** component diagram](../img/dldp-components.png)

## 10. Roadmap

> ![Telesope][octicon-telescope] View the
> [ROADMAP for **enum-factory**](../../ROADMAP.md).

<!-- ⛔️ Do not remove this comment or anything below it ⛔️ -->

[standardjs-img]:
  https://img.shields.io/badge/code_style-standard-F1DA40.svg?style=flat-sqaure
[standardjs-url]: https://standardjs.com

<!-- 🔗 Help link references 🔗  -->

[ghh-closing-issues-keywords-url]:
  https://help.github.com/articles/closing-issues-using-keywords/

<!-- 🔗 Logo img references 🔗 -->

[standardjs-logo]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standardjs-url]: https://github.com/standard/standard#readme
[github-cicd-logo]: ../img/logos/logo-github-ci-cd.png
[github-cicd-url]: https://about.github.com/product/continuous-integration/
[eslint-logo]:
  https://github.com/gregswindle/enum-factory/raw/master/docs/img/logos/logo-eslint.png
[eslint-url]: https://eslint.org/docs/user-guide/getting-started
[jest-logo]:
  https://github.com/gregswindle/enum-factory/raw/master/docs/img/logos/logo-jest.png
[jest-url]: https://facebook.github.io/jest/docs/en/getting-started.html

<!-- 🔗  Body link references 🔗   -->

[issue-workflow-img]:
  https://github.com/gregswindle/enum-factory/raw/master/docs/icons8/contribution-lifecycle-create-issue.png
[label-status-triage-img]:
  https://fakeimg.pl/200x24/d4c5f9/000/?text=status:+triage&font_size=20&font=museo
[pr-workflow-img]:
  https://github.com/gregswindle/enum-factory/raw/master/docs/icons8/contribution-lifecycle-pr.png

<!-- 🔗  Octicon img references 🔗   -->

[octicon-alert]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/alert.svg
[octicon-arrow-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-down.svg
[octicon-arrow-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-left.svg
[octicon-arrow-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-right.svg
[octicon-arrow-small-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-small-down.svg
[octicon-arrow-small-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-small-left.svg
[octicon-arrow-small-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-small-right.svg
[octicon-arrow-small-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-small-up.svg
[octicon-arrow-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/arrow-up.svg
[octicon-beaker]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/beaker.svg
[octicon-bell]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/bell.svg
[octicon-bold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/bold.svg
[octicon-book]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/book.svg
[octicon-bookmark]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/bookmark.svg
[octicon-briefcase]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/briefcase.svg
[octicon-broadcast]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/broadcast.svg
[octicon-browser]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/bug.svg
[octicon-calendar]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/calendar.svg
[octicon-check]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/check.svg
[octicon-checklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/checklist.svg
[octicon-chevron-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/chevron-down.svg
[octicon-chevron-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/chevron-left.svg
[octicon-chevron-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/chevron-right.svg
[octicon-chevron-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/chevron-up.svg
[octicon-circle-slash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/circle-slash.svg
[octicon-circuit-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/circuit-board.svg
[octicon-clippy]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/clippy.svg
[octicon-clock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/clock.svg
[octicon-cloud-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/cloud-download.svg
[octicon-cloud-upload]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/cloud-upload.svg
[octicon-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/code.svg
[octicon-comment-discussion]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/comment-discussion.svg
[octicon-comment]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/comment.svg
[octicon-credit-card]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/credit-card.svg
[octicon-dash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/dash.svg
[octicon-dashboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/dashboard.svg
[octicon-database]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/database.svg
[octicon-desktop-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/desktop-download.svg
[octicon-device-camera-video]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/device-camera-video.svg
[octicon-device-camera]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/device-camera.svg
[octicon-device-desktop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/device-desktop.svg
[octicon-device-mobile]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/device-mobile.svg
[octicon-diff-added]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff-added.svg
[octicon-diff-ignored]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff-ignored.svg
[octicon-diff-modified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff-modified.svg
[octicon-diff-removed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff-removed.svg
[octicon-diff-renamed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff-renamed.svg
[octicon-diff]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/diff.svg
[octicon-ellipses]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/ellipses.svg
[octicon-ellipsis]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/eye.svg
[octicon-file-binary]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-binary.svg
[octicon-file-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-code.svg
[octicon-file-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-directory.svg
[octicon-file-media]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-media.svg
[octicon-file-pdf]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-pdf.svg
[octicon-file-submodule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-submodule.svg
[octicon-file-symlink-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-symlink-directory.svg
[octicon-file-symlink-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-symlink-file.svg
[octicon-file-text]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-text.svg
[octicon-file-zip]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file-zip.svg
[octicon-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/file.svg
[octicon-flame]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/flame.svg
[octicon-fold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/fold.svg
[octicon-gear]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/gear.svg
[octicon-gift]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/gift.svg
[octicon-gist-secret]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/gist-secret.svg
[octicon-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/gist.svg
[octicon-git-branch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/git-branch.svg
[octicon-git-commit]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/git-commit.svg
[octicon-git-compare]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/git-compare.svg
[octicon-git-merge]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/git-merge.svg
[octicon-git-pull-request]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/git-pull-request.svg
[octicon-globe]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/globe.svg
[octicon-grabber]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/grabber.svg
[octicon-graph]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/graph.svg
[octicon-heart]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/heart.svg
[octicon-history]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/history.svg
[octicon-home]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/home.svg
[octicon-horizontal-rule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/horizontal-rule.svg
[octicon-hubot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/hubot.svg
[octicon-inbox]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/inbox.svg
[octicon-info]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/info.svg
[octicon-issue-closed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/issue-closed.svg
[octicon-issue-opened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/issue-opened.svg
[octicon-issue-reopened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/issue-reopened.svg
[octicon-italic]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/italic.svg
[octicon-jersey]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/key.svg
[octicon-keyboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/law.svg
[octicon-light-bulb]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/light-bulb.svg
[octicon-link-external]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/link-external.svg
[octicon-link]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/link.svg
[octicon-list-ordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/list-ordered.svg
[octicon-list-unordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/list-unordered.svg
[octicon-location]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/location.svg
[octicon-lock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/lock.svg
[octicon-logo-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/logo-gist.svg
[octicon-logo-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/logo-github.svg
[octicon-mail-read]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mail-read.svg
[octicon-mail-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mail-reply.svg
[octicon-mail]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mail.svg
[octicon-mark-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mark-github.svg
[octicon-markdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/markdown.svg
[octicon-megaphone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/megaphone.svg
[octicon-mention]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mention.svg
[octicon-milestone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/milestone.svg
[octicon-mirror]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mirror.svg
[octicon-mortar-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mortar-board.svg
[octicon-mute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/mute.svg
[octicon-no-newline]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/no-newline.svg
[octicon-octoface]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/octoface.svg
[octicon-organization]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/organization.svg
[octicon-package]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/package.svg
[octicon-paintcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/paintcan.svg
[octicon-pencil]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/pencil.svg
[octicon-person]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/pin.svg
[octicon-plug]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/plug.svg
[octicon-plus-small]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/plus-small.svg
[octicon-plus]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/plus.svg
[octicon-primitive-dot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/primitive-dot.svg
[octicon-primitive-square]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/primitive-square.svg
[octicon-pulse]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/pulse.svg
[octicon-question]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/question.svg
[octicon-quote]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/quote.svg
[octicon-radio-tower]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/radio-tower.svg
[octicon-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/reply.svg
[octicon-repo-clone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo-clone.svg
[octicon-repo-force-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo-force-push.svg
[octicon-repo-forked]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo-forked.svg
[octicon-repo-pull]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo-pull.svg
[octicon-repo-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo-push.svg
[octicon-repo]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/repo.svg
[octicon-rocket]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/rss.svg
[octicon-ruby]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/ruby.svg
[octicon-search]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/search.svg
[octicon-server]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/server.svg
[octicon-settings]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/settings.svg
[octicon-shield]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/shield.svg
[octicon-sign-in]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/sign-in.svg
[octicon-sign-out]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/sign-out.svg
[octicon-smiley]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/smiley.svg
[octicon-squirrel]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/squirrel.svg
[octicon-star]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/star.svg
[octicon-stop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/stop.svg
[octicon-sync]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/tag.svg
[octicon-tasklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/tasklist.svg
[octicon-telescope]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/telescope.svg
[octicon-terminal]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/terminal.svg
[octicon-text-size]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/text-size.svg
[octicon-three-bars]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/three-bars.svg
[octicon-thumbsdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/thumbsdown.svg
[octicon-thumbsup]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/thumbsup.svg
[octicon-tools]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/tools.svg
[octicon-trashcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/trashcan.svg
[octicon-triangle-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/triangle-down.svg
[octicon-triangle-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/triangle-left.svg
[octicon-triangle-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/triangle-right.svg
[octicon-triangle-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/triangle-up.svg
[octicon-unfold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/unfold.svg
[octicon-unmute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/unmute.svg
[octicon-unverified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/unverified.svg
[octicon-verified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/verified.svg
[octicon-versions]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/versions.svg
[octicon-watch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/x.svg
