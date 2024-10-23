import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-nested',
  templateUrl: './second-nested.component.html',
  styleUrl: './second-nested.component.css'
})
export class SecondNestedComponent {
  @Input('nameData') nameText = ''
}
