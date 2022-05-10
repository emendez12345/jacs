import { Component, OnInit } from '@angular/core';
import{UsersService} from 'src/app/services/users.service';
import{User} from 'src/app/models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios:any;
  usuario = new User();

  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.getUsuariosData();
  }

  getUsuariosData(){
    this.userservice.getUsu().subscribe(res=>{
      this.usuarios=res;
    console.log(res);
    });
    //console.log('HOla mundo');
  }

}
