import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome LeashedIn';

  dogs = [
    { name: "Fido200", age: 2, human: "Max", imgurl: "../assets/Fido200", rows: 1},
    { name: "Fluffy300", age: 4, human: "Mark", imgurl: "../assets/Fluffy300", rows: 1},
    { name: "Frisky400", age: 6, human: "Matt", imgurl: "../assets/Frisky400", rows: 2}
  ]
}
