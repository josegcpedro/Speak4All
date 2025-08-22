import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../app/services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../app/models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = ""; // juste le prénom de l'utilisateur

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    if (!this.name) {
      alert("Écrivez votre nom");
      return;
    }

    // créer un user à partir du prénom
    const newUser: User = {
      nom: this.name,
      messages: []
    };

    this.userService.addUser(newUser).subscribe(() => {
      // après avoir ajouté, naviguer vers /chat
      this.router.navigate(['chat'], {
        queryParams: { name: this.name } // pour afficher "Salut <nom>"
      });
      this.name = "";
    });
  }
}
