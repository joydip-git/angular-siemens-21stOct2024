import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-nested',
  templateUrl: './first-nested.component.html',
  styleUrl: './first-nested.component.css'
})
export class FirstNestedComponent {
  personName = ''
  @Output('nameChanged') personNameChanged = new EventEmitter<string>()

  nameUpdated(name: string) {
    this.personName = name
    this.personNameChanged.emit(this.personName)
  }
}
