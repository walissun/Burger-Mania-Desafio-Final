import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() required: boolean = false;
  @Input() value: string | number | undefined;

}
