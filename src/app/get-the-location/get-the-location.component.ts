import { Component, OnInit } from '@angular/core';
import { ServlocationService } from '../servlocation.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { getLocaleTimeFormat } from '@angular/common';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-get-the-location',
  templateUrl: './get-the-location.component.html',
  styleUrls: ['./get-the-location.component.css']
})
export class GetTheLocationComponent implements OnInit {
  locat;
  lng;
  lat;
  city
  constructor(private servlocat: ServlocationService) { }

  async getlocation(value) {
    const result:any = await this.servlocat.postLocation(value)
  }
  userlocation() {
    //  if("geolocation" in navigator){
    //    navigator.geolocation.watchPosition((success)=>{
    //          this.lng = success.coords.longitude;
    //          this.lat = success.coords.latitude;
    //          this.servlocat.getlocation(this.lng,this.lat).subscribe(result=>{
    //           this.locat = result;
    //           console.log(this.locat)
    //  })
    //    })
    //  }
    // this.servlocat.getlocation(this.lng, this.lat).subscribe(result => {
    //   this.locat = result;
    //   console.log(this.locat)
    // })

  }
  // getCityl(addres) {
  //   this.servlocat.getthelocation(addres).subscribe(data => {
  //     this.city = data;
  //     console.log(this.city)
  //   })
  // }
  ngOnInit() {
    this.userlocation();
  }
 
}
