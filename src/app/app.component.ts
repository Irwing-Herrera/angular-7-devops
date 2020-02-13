import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVar: string = 'Hola Mundo';
  saludo: string = 'sasas sas sasas Irwing sasas asa sa';

  par(numero: number): boolean {
    return  numero%2 === 0 ? true : false;
  }

}
