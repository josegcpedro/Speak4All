import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = "";

  constructor(private router: Router) { }

  onSubmit() {
    if (!this.name) {
      alert("Écrivez votre nom");
      return;
    }

    this.goTo('chat');
    this.name = "";
  }

  goTo(page: string) {
    this.router.navigate([page]);
  }

}
