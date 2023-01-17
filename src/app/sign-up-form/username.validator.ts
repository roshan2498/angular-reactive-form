import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }

  static shoudBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    //mimicing API call to get unique username

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'roshan') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
