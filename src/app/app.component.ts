import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'Liz Vanessa ';
  arreglo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  hero = {
    name: 'Logan',
    pass: 'Wolverine',
    age: 500,
    address: {
      street: 'fake',
      house: '123'
    }
  };
  promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Data is here'), 3500);
});
  date = new Date();
  nombre2 = 'liz vaNESsa camacho caSTañeda';
  video = 'tppjpwjcd0E';
  activate = true;
}
