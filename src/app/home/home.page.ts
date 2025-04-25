import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // imports

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
})
export class HomePage implements OnInit {

  cars: any[] = [];
  username: string = '';
  newUsername: string = ''; // getting and setting username
  isLoginFormVisible: boolean = false;

  constructor(private http: HttpClient) {} // HTTP Client for JSON Data

  ngOnInit() {
    this.http.get<any[]>('assets/cars.json').subscribe(
      data => {
        this.cars = data; // getting JSON data from cars.json
      },
      error => {
        console.error('Error fetching cars data:', error); // I had issues with JSON , was error checking
      }
    );

    this.username = localStorage.getItem('username') || '';
    if (!this.username) {
      this.isLoginFormVisible = true;
    }
  }

  onLogin() {
    if (this.newUsername.trim()) {
      localStorage.setItem('username', this.newUsername);
      this.username = this.newUsername;
      this.isLoginFormVisible = false; // setting username on login
    }
  }

  switchAccount() {
    localStorage.removeItem('username');
    this.username = '';
    this.isLoginFormVisible = true; // switch account method, (changing username)
  }
}
