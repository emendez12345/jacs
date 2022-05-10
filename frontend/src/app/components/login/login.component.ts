import { Component, OnInit } from '@angular/core';
import{UsersService} from 'src/app/services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{User} from 'src/app/models/User';
import Swal from 'sweetalert2'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required)

  })

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

  createUser(){
   
    this.userservice.insertUsu(this.usuario).subscribe(res=>{

      Swal.fire({
        title: 'Muy Bien!',
        text: 'User Registrado',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

 

    })
}
/*
updateProfile() {

  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}*/

}
