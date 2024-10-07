import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get formControls() {
    return this.userForm.controls;
  }
}
