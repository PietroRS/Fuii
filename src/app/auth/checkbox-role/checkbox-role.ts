import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-role',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox-role.html',
  styleUrls: ['./checkbox-role.css']
})
export class CheckboxRoleComponent {
  @Input() control!: FormControl;

  roles = [
    { id: 'ruoloPrivato', value: 'PAYER', label: 'Privato' },
    { id: 'ruoloNegozio', value: 'SHOP', label: 'Negozio' },
    { id: 'ruoloProvider', value: 'PAYMENT_PROVIDER', label: 'Provider' }
  ];
}
