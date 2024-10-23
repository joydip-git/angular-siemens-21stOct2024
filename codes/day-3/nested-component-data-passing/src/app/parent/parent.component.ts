import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  nameValue = 'no name'
  updateName(newName: string) {
    this.nameValue = newName
  }
}
