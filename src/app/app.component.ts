import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public enlace="Home";

  //title = 'app works!';
  private setHeader() {
    let claseHeader = this.enlace==="Home"?"alt":"";
    return claseHeader;
  }

}
