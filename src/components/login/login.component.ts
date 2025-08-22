import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = "";

  onSubmit() {
    if (!this.name) {
      alert("Écrivez votre nom");
      return;
    }
    alert("Salut" + this.name);
    this.name = "";
  }
}
