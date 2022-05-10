import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }

  getUsu(){
    return this.httpclient.get('https://apiusuarios.jacs3dpruebas.shop/api/usuarios');
  }
  /*
  getUsu(){
    return this.httpclient.get('http://127.0.0.1:8000/api/usuarios');
  }*/

  getUsuById(id:any){
    return this.httpclient.get('https://apiusuarios.jacs3dpruebas.shop/api/usuarios/' + id);
  }

  insertUsu(data : any){
    return this.httpclient.post('https://apiusuarios.jacs3dpruebas.shop/api/usuarios', data);
  }

  updateDate(id:any,data:any){
    return this.httpclient.put('https://apiusuarios.jacs3dpruebas.shop/api/usuarios/' + id, data);
 
  }

}
