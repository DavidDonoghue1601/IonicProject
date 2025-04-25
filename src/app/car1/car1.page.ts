import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; // Imports

@Component({
  selector: 'app-car1',
  templateUrl: './car1.page.html',
  styleUrls: ['./car1.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class Car1Page implements OnInit {

  cars: any[] = []; // loading JSON

  constructor(private router: Router, private http: HttpClient) {} //Importing HTTP CLient for JSON

  ngOnInit() {
    this.loadCars(); //loading car info
  }

  loadCars() {
    this.http.get<any[]>('assets/cars.json').subscribe(data => {
      const car1 = data.find(car => car.id === 1);
      this.cars = car1 ? [car1] : []; //loading car info
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']); // back to home
  }
}
