1. Create a [new file][1] and name it like `user.component.ts`
2. Add a new class to this [file][1] and export it (like `export class UserComponent { }`) in order to use it outside of the file. Name the class in UpperCamelCase starting with the name and then the description.
3. Add the `@Component()` decorator above the class.
4. Import Component from the core package by adding `import { Component } from '@angular/core';` at the top of the component file.
5. Pass an JS object to the decorator to configure the component.
6. First define the selector property  (e.g. `selector: 'app-user'`) which is not known to HTML so that you do not accidently overwrite an existing selector.
7. Second add a reference to an [external template file][2], e.g. `templateUrl: './user.component.html`, create it and add some HTML code to it.
8. Register the user component in  the `app.module.ts` [file][3], by adding it's name to the declarations and importing it from the place where it has been created like `import { UserComponent } from './example/user.component';`
9. Now use the component by adding the selector to the `app.component.html` [file][4].


[1]: https://stackblitz.com/edit/create-a-basic-angular-component?file=src%2Fapp%2Fexample%2Fuser.component.ts
[2]: https://stackblitz.com/edit/create-a-basic-angular-component?file=src%2Fapp%2Fexample%2Fuser.component.html
[3]: https://stackblitz.com/edit/create-a-basic-angular-component?file=src%2Fapp%2Fapp.module.ts
[4]: https://stackblitz.com/edit/create-a-basic-angular-component?file=src%2Fapp%2Fapp.component.ts