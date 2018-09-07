import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd:boolean= true;
  constructor() { }

  ngOnInit() {
      this.users= [
        {
          firstName:'Sanjay',
          lastName:'Tarani',
          age:24,
            address: {
            street:'145 Wentworth Ave',
            suburb:'Wentworthville',
            city: 'Sydney'
            },
            //image: 'http://loremflickr.com/600/600?random=3'
          }
      ,
      {
        firstName:'Sam',
        lastName:'Will',
        age:23,
          address: {
          street:'145 Wentworth Ave',
          suburb:'Wentworthville',
          city: 'Sydney'
          },
          //image: 'http://loremflickr.com/600/600?random=2'
    },
    {
      firstName:'Sanj',
      lastName:'Kev',
      age:22,
        address: {
        street:'145 Wentworth Ave',
        suburb:'Wentworthville',
        city: 'Sydney'
        },
        //image: 'http://loremflickr.com/600/600?random=1'
      }
  
  ];
  this.loaded=true;
    
// this.addUsers({
//   firstName:'David',
//   lastName:'Lass',
//   age:22,
//     address: {
//     street:'222 Wentworth Ave',
//     suburb:'Wentworthville',
//     city: 'Sydney'
//     }
//   }
// );

  }
addUsers(user:User){

  this.users.push(user);
  
}
fireEvent(e){
  //console.log("Button Clicked");
  console.log
}

}