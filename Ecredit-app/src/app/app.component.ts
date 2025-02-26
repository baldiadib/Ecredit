import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecredit';
  constructor(private router: Router) {}
  redirectToDemandeRoute(): void {
    this.router.navigate(['/DemandeCredit']);
  }
  redirectToConsultationRoute(): void {
    this.router.navigate(['/ConsultationCredit']);
  }
}
