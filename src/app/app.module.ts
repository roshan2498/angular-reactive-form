import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { Routes } from '@angular/router';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'exercise', component: PasswordChangeComponent },
  { path: '', component: SignUpFormComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    SignUpFormComponent,
    NewCourseFormComponent,
    PasswordChangeComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
