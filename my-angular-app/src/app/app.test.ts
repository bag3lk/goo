import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  styleUrl: './app.component.css',
  template: `templatka dla {{ userName }}`
})
export class AppComponent {
  title = 'user profile test';
  userName = 'meow!11!!1!';
}
