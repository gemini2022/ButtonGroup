import { Component, input } from '@angular/core';

@Component({
  selector: 'button-group',
  standalone: true,
  imports: [],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {
  public width = input<string>();
  public margin = input<string>();
}