import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myservice: MyServiceService, private router: Router) { }

  cusData: any;
  id = 0;
  upId = 0;

  ngOnInit(): void {
    this.myservice.getCusService().subscribe(response => {
      this.cusData = response;
      console.log(this.cusData)
    });
  }

  view(index: any) {
    this.id = index;
  }

  addCus(cus: any) {
    this.myservice.addCusService(cus).subscribe();
    window.location.reload();
  }

  delCus(uId: any) {
    this.myservice.delCusService(uId).subscribe();
    window.location.reload();
  }

  updateId(index: any) {
    this.upId = index;
  }

  updateCus(cus: any) {
    cus.uId = this.cusData[this.upId].uId;
    if (cus.fname == '')
      cus.fname = this.cusData[this.upId].fname;
    if (cus.lname == '')
      cus.lname = this.cusData[this.upId].lname;
    if (cus.country == '')
      cus.country = this.cusData[this.upId].country;
    if (cus.city == '')
      cus.city = this.cusData[this.upId].city;
    if (cus.street == '')
      cus.street = this.cusData[this.upId].street;
    if (cus.phone == '')
      cus.phone = this.cusData[this.upId].phone;
    this.myservice.updateCusService(cus).subscribe();
    window.location.reload();
  }

}
