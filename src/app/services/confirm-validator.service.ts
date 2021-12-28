import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfirmValidatorService {

  constructor() { }

  ConfirmedValidator(password: string, matchingPassword: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[password];
        const matchingControl = formGroup.controls[matchingPassword];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
