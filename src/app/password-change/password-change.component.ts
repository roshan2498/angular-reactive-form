import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PasswordValidators } from './passwordValidator';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css'],
})
export class PasswordChangeComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.validOldPassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: PasswordValidators.passwordsShouldMatch,
      }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
