import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Imports

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome()
  {
    this.router.navigate(['/home']); // back to home button
  }

}
