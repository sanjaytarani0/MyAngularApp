import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'my-app',
  //template: '<h3> Sanjay Tarani </h3>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})

export class UserComponent implements OnInit{
//properties
user;
 

//method
constructor() {
  
    }

  ngOnInit(){
    this.user = {
      firstName:'Sanjay',
      lastName:'Tarani',
      age:24,
        address: {
        street:'145 Wentworth Ave',
        suburb:'Wentworthville',
        city: 'Sydney'
        }
  
  }
}
}

