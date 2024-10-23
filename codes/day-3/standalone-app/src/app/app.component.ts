import { Component } from '@angular/core';
import { AnotherModule } from './another/another.module';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AnotherModule, SampleComponent]
})
export class AppComponent {
}
