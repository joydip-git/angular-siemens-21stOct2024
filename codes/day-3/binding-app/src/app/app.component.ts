import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to Angular Data Binding'
  width = 300
  people: Person[] = [{
    name: 'Sunil',
    salary: 2000
  }, {
    name: 'Anil',
    salary: 1000
  }, {
    name: 'Joydip',
    salary: 3000
  }]
  selectedChoice = ''

  updateChoice(newChoice: string) {
    this.selectedChoice = newChoice
  }

  updateTitle(newTitle: string) {
    this.title = newTitle
    // for (let name of this.names) {
    //   console.log(name);
    // }
  }
}
