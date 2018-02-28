import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://www.gaming.tn/apis';
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  register(data) {
    // console.log(data);
    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('email', data.email);
    // formData.append('password', data.password);
    // formData.append('phone', data.phone);
    // let header = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    // return new Promise((resolve, reject) => {
    //   this.http.post(this.apiUrl+'/reg.php', formData)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
  }
  login(data) {
    console.log(data);
    // const formData = new FormData();
    // formData.append('email', data.email);
    // formData.append('password', data.password);
    // let header = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    // return new Promise((resolve, reject) => {
    //   this.http.post(this.apiUrl+'/login.php', formData)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
  }
  sendMail(message,email,phone,name){
    
    // const formData = new FormData();
    // formData.append('message', message);
    // formData.append('email', email);
    // formData.append('phone', phone);
    // formData.append('name', name);
    // let header = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    // return new Promise((resolve, reject) => {
    //   this.http.post(this.apiUrl+'/mail.php', formData)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
  }
  
}