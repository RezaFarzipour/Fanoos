import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  filteredUsers: Users[];
  
  constructor() {
    this.filteredUsers = [];
  }
  onFilteredUsers(filteredUsers: Users[]) {
    this.filteredUsers = filteredUsers;
  }
  
  


  
}




//json-server --watch db.json