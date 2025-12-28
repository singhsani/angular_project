# Demo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.



This will compile your project and store the build artifacts in the `dist/` directory. By 


Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Interpolation
When a user wants to display a TypeScript property or variable value on the UI, they write the property or variable name inside {{ }}. This is called interpolation.
                                    or
To display a TypeScript property or variable value in the UI, use {{ }}. This is known as interpolation.

## interpolation Limitation
   1. {{increment/decrement}} not allowed
   2. {{loop}} not allowed
   3. One-way data binding only
   4. Works only with string output
   5. Cannot perform complex logic

# Angular CLI (command line interface)
    Anular CLI is a tools that's help developer to create,build,test and deploy Anular application
## important command
   1. ng generate component component-name(ng g c component_name)
   2. ng -version
   3. ng generate --help
   4. ng test (for unit test)
   5. ng build
   6. ng e2e (for end to end test)

## Components 
    A component is the basic building block of an Angular application.
    It controls a part of the UI called a view and contains the logic, data, and template needed to display that view.

    how to create component ?
    Ans: create components two type on using command second custom component
      1. hit command "ng generate component component_name" or "ng g c component_name"
      2.  ```
            import {Component} from "@angular/core"
            @Component({
                selector :"app-component_name" //important
                import :[] //optional
                templateUrl: './app.html', //important
                styleUrl: './app.css'
            })

            export class ProfileComponent{

            }

## router-outlet in Angular
    <router-outlet> is a directive provided by Angular Router.
    It acts as a placeholder in the template where routed components are displayed.