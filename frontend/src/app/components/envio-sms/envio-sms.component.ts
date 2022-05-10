import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from 'src/app/models/User';

@Component({
  selector: 'app-envio-sms',
  templateUrl: './envio-sms.component.html',
  styleUrls: ['./envio-sms.component.css']
})
export class EnvioSMSComponent implements OnInit {

  Number: any;
  SMS:any;
  user= new User();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const headers = { 
      "account": "10019287", 
      "apiKey": "H9E2OALGWyWmw0goee21ZTI0q1g5Hk",
      "token": "87bf572d7c8f4ab0b7a13737d1bff32e" 
    };
    this.http.post<Mensaje>('https://api103.hablame.co/api/sms/v3/send/priority', { toNumber: "3147514973", sms: "MENSAJE 1001" },{headers}).subscribe(data => {
      this.Number = data.toNumber;
      this.SMS=data.sms;
  });

  }

}

interface Mensaje {
  
  toNumber: number;
  sms: string;

}
