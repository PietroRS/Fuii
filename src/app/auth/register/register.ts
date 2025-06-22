import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxRoleComponent } from '../checkbox-role/checkbox-role';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, CheckboxRoleComponent],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      ruolo: ['', Validators.required],
      fiscalCode: [''],
      birthDate: [''],
      iban: [''],
      address: [''],
      vatCode: [''],
      shopAddress: ['']
    });

    this.setupRoleValidation();
  }

  get ruoloControl(): FormControl {
    return this.registerForm.get('ruolo') as FormControl;
  }

  private setupRoleValidation(): void {
    this.ruoloControl.valueChanges.subscribe((role) => {
      const fc = this.registerForm;


      ['fiscalCode', 'birthDate', 'iban', 'address', 'vatCode', 'shopAddress'].forEach(field => {
        fc.get(field)?.clearValidators();
        fc.get(field)?.updateValueAndValidity();
      });


      if (role === 'PAYER') {
        fc.get('fiscalCode')?.setValidators([Validators.required]);
        fc.get('birthDate')?.setValidators([Validators.required]);
        fc.get('iban')?.setValidators([Validators.required]);
        fc.get('address')?.setValidators([Validators.required]);
      } else if (role === 'SHOP' || role === 'PAYMENT_PROVIDER') {
        fc.get('vatCode')?.setValidators([Validators.required]);
        fc.get('shopAddress')?.setValidators([Validators.required]);
      }


      Object.values(fc.controls).forEach(control => control.updateValueAndValidity());
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Dati registrazione:', this.registerForm.value);

    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
