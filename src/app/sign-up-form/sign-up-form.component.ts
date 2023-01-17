import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shoudBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  get username() {
    return this.form.get('account.username');
  }
  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    console.log(this.form.controls.username.value);
  }

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
}
