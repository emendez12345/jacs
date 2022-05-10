import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ActivatedRoute,Router} from '@angular/router';
import{User}from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  Number: any;
  SMS:any;
  id:any;
  data:any;
  users=new User();

  constructor(private router:Router, private route:ActivatedRoute,private userservice:UsersService,private http: HttpClient) { }

  ngOnInit(): void {
 //   console.log(this.route.snapshot.params['id']);
   this.id=this.route.snapshot.params['id_usuario'];
    this.getData();
    }

  getData(){
    this.userservice.getUsuById(this.id).subscribe(res=>{
  //    console.log(res);

     this.data=res;
     this.users=this.data;
    })
}


updateUsers(){

  this.userservice.updateDate(this.id,this.users).subscribe(res=>{

    Swal.fire({
      title: 'Muy Bien!',
      text: 'User Aprobado',
      icon: 'success',
      confirmButtonText: 'Excelente'
    });
    this.getData();

    const headers = { 
      "account": "10019287", 
      "apiKey": "H9E2OALGWyWmw0goee21ZTI0q1g5Hk",
      "token": "87bf572d7c8f4ab0b7a13737d1bff32e" 
    };
    this.http.post<Mensaje>('https://api103.hablame.co/api/sms/v3/send/priority', { toNumber: this.users.telefono, sms: "aprobado" },{headers}).subscribe(data => {
      this.Number = data.toNumber;
      this.SMS=data.sms;

      this.router.navigate(['users']);
  });
    
  });
}
}
interface Mensaje {
  
  toNumber: number;
  sms: string;

}

