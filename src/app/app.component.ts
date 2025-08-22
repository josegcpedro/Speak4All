import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Speak4All';

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
