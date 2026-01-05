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

### Ways to Set and Get Value in Input field 
    Make input field pass and function
    Get Value with event

### Style Option
    component style
    Global style
    make new file for global style
    internal style
    style in component.ts file
    load multiple css file in component  

### signal 

### two way binding
     using ngModul in (banana in [()])

### Dynamic style
    declare style in .ts file ex-: bgColor="red"
    and import on html page ex-: [style.bgColor]


### What Directives Are in Angular

    A directive in Angular is a class marked with the @Directive decorator that adds behavior to elements in your application — think of it as a way to extend HTML with Angular’s power. 
    Angular

    Angular doesn’t treat directives separately from components — in fact:

    A Component is a type of directive with an associated template.

    Other directives add behavior without their own template. 
    Angular

### Three Types of Directives
#### 1️⃣ Component Directives

            These are Angular’s main building blocks — every Angular component (@Component) is technically a directive with a template:

            @Component({
            selector: 'app-hello',
            template: `<h1>Hello World</h1>`
            })
            export class HelloComponent {}


            So components are specialized directives with UI. 
            Angular

#### 2️⃣ Attribute Directives

            Attribute directives change the appearance or behavior of host elements. They don’t add/remove DOM nodes — but update how elements look or act.

            👉 Common built-in ones:

            NgClass — add/remove CSS classes dynamically

            NgStyle — add/remove inline styles

            NgModel — two-way binding for form controls 
            Angular

            Example: using NgStyle to change background color:

            <div [ngStyle]="{ backgroundColor: isActive ? 'lightgreen' : 'lightgray' }">
            Styled box
            </div>

#### 3️⃣ Structural Directives

            Structural directives change the DOM layout by adding or removing elements.

            They are typically prefixed with *:

            *ngIf — include/exclude content based on a condition

            *ngFor — repeat a template for each item in a list

            *ngSwitch, *ngSwitchCase, *ngSwitchDefault — switch between views 
            Angular

            Example:

            <ul>
            <li *ngFor="let item of items">
                {{ item }}
            </li>
            </ul>

            <div *ngIf="isLoggedIn">
            Welcome back!
            </div>


            These directives control whether templates exist in the DOM. 
            SparkCodehub

#### 🛠 Creating a Custom Directive

Here’s how you define an attribute directive:

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // use as attribute
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}


Then in a template:

<p appHighlight> Hover me to highlight! </p>

### 🧠 Behind the Scenes: The @Directive API

        At its core, a directive class is:

        @Directive({
        selector: string,
        inputs?: string[],
        outputs?: string[],
        providers?: Provider[],
        exportAs?: string,
        host?: { [key:string]: string },
        standalone?: boolean,
        hostDirectives?: any[],
        })
        export class MyDirective {}


        selector determines where the directive applies

        standalone: true lets you use it without declaring it in a module 
        Angular



### 🧩 Summary
    Directive Type	Purpose
    Component	UI + behavior (template)
    Attribute	Change appearance/behavior of elements
    Structural	Add/remove or shape DOM layout

