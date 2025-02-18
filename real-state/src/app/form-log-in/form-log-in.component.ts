import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import routeConfig from '../routes';

@Component({
  selector: 'app-form-log-in',
  imports: [CommonModule, RouterModule, RouterLink],
  styleUrls: ['./form-log-in.component.css'],
  template: `
  <main>
  <h2 class="section-heading">Log In</h2>
        <form (submit)="submitApplication()">
          <label for="user-name">User Name</label>
          <input id="user-name" type="text" formControlName="userName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="age">Age</label>
          <input id="age" type="number" formControlName="age">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">

          <label for="check">Aceptar Condiciones</label>
          <input id="check" type="checkbox" class="primary" formControlName="conditions">
          
          <button  type="submit" class="primary">Apply now</button>

          
        </form>
    </main>`,
})
export class FormLogInComponent {



    submitApplication() {
      let userName = (document.getElementById("user-name") as HTMLInputElement).value;
      let lastName = (document.getElementById("last-name") as HTMLInputElement).value;
      let age = (document.getElementById("age") as HTMLInputElement).valueAsNumber;
      let email = (document.getElementById("email") as HTMLInputElement).value;
      let check = (document.getElementById("check") as HTMLInputElement);

      if(userName.trim() == "") {
        window.alert("Introduzca el nombre de usuario.")
      } else if (lastName.trim() == ""){
        window.alert("Introduzca los apellido.")
      } else if (age < 17){
        window.alert("No puede tener menos de 17 años.")
      } else if (email.trim() == ""){
        window.alert("Introduzca el email.")
      } else if (!check){
        window.alert("Acepte las condiciones.")
      } else {
        window.alert("Bienvenido " + userName);
      }
    }
}
