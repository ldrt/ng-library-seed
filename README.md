# NgLibrarySeed

- Description : A seed for an Angular library with a demo app
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12
- Uses :
    - ESLint

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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
