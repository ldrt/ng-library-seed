# NgLibrarySeed

- Description : A seed for an Angular library with a demo app
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12
- Uses :
  - ESLint
  - Prettier
  - Commitlint
  - Husky

## Commands

### Creation

- ng new ng-library-seed --no-create-application
- cd ng-library-seed
- ng add @angular-eslint/schematics
- ng generate @angular-eslint/schematics:lib library --p=ldrt
- ng generate application demo --p=ldrt --style=scss

### Development

- ng build library --watch
  - The build artifacts will be stored in the `dist/` directory
- ng build library --watch
- ng serve demo
  - Navigate to `http://localhost:4200/`

## ESLint and Prettier

- ng add @angular-eslint/schematics
- npm install prettier --save-dev
- Create and set rules .prettierrc.json
- Set npm command "format" to fix all files (lib and demo) except those in .gitignore
- To turn off rules that conflict or are unnecessary with Prettier : npm install eslint-config-prettier --save-dev
- To run and report Prettier issues as ESLint issues : npm install eslint-plugin-prettier --save-dev
- Edit eslint.config.js file to add eslint-plugin-prettier/recommended as the last element of the extends array. It wills ship both eslint-config-prettier and eslint-plugin-prettier
- VSCode plugins to install : ESLint and Prettier
- Create a settings.json file in .vscode and set rules
- Cmd + Shift + P > Format > Format Document With > Configure Default Formatter > Prettier — Code formatter
- Cmd + Shift + P > eslint > ESLint: Restart ESLint Server

## Husky hook and commitlint

- npm install --save-dev @commitlint/config-conventional @commitlint/cli
- echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
- npm install --save-dev husky
- npx husky init
- echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
