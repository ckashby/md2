import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'settings-dialog',
  template: `
  <label>Would you like dog pics every minute?</label>
  <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We R LeashedIn';

  dogs = [
    { name: "Fido200", age: 2, human: "Max", imgurl: "../assets/Fido200", rows: 1},
    { name: "Fluffy300", age: 4, human: "Mark", imgurl: "../assets/Fluffy300", rows: 1},
    { name: "Frisky400", age: 6, human: "Matt", imgurl: "../assets/Frisky400", rows: 2},
    { name: "Fido200", age: 2, human: "Max", imgurl: "../assets/Fido200", rows: 1},
    { name: "Fluffy300", age: 4, human: "Mark", imgurl: "../assets/Fluffy300", rows: 1},
    { name: "Frisky400", age: 6, human: "Matt", imgurl: "../assets/Frisky400", rows: 2}
  ]

  currentDog = [];

  @ViewChild('sidenav') sidenav: MdSidenav;

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}


}
