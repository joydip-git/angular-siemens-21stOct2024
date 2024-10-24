import { Component, computed, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-second-nested',
  templateUrl: './second-nested.component.html',
  styleUrl: './second-nested.component.css'
})
export class SecondNestedComponent implements OnChanges, OnInit, OnDestroy {
  @Input('nameData') nameText = ''
  welcomeMessage = ''

  constructor() {

    //computed(() => 'Welcome ' + this.nameText)
    console.log('created....');
  }
  ngOnDestroy(): void {
    console.log('destroy...');
  }
  async ngOnInit(): Promise<void> {
    console.log('init happened....');
    //this.welcomeMessage = 'Welcome to Init' + this.nameText
  }
  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    console.log('changes happened...');
    this.welcomeMessage = 'Welcome ' + this.nameText
  }
}
