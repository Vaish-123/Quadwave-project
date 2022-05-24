import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  url = "http://localhost:3001"


  constructor(private httpclient: HttpClient) { }

  getCusService() {
    return this.httpclient.get(this.url + '/viewcustomer');
  }

  addCusService(cus: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
    };
    return this.httpclient.post(this.url + '/addcustomer', cus, { headers });
  }

  delCusService(uId: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
    };
    return this.httpclient.post(this.url + "/deletecustomer", { uId: uId })
  }

  updateCusService(cus: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
    };
    return this.httpclient.post(this.url + '/editcustomer', cus, { headers })
  }
}
