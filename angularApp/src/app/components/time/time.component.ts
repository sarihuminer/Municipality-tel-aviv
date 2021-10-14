import { Component, OnInit } from '@angular/core';
import { MyLocation } from 'src/app/models/MyLocation.model';
import { TimeService } from 'src/app/servises/time.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  location: any;
  id: any;
  constructor(private timeService: TimeService) { }

  ngOnInit(): void {

    this.id = setInterval(() => {
      this.getLocatin();
    }, 5000);

  }

  getLocatin() {
    debugger;
    this.timeService.getLocation().subscribe(res => {
      this.location = res;
    }, err => { console.log("err") })
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  // this.timeService.getLocation().pipe(
  //   map(res => {
  //     return res.map(item => ({ latitude: res['iss_position'].latitude, longitude: res['iss_position'].longitude, timestamp: res['timestamp'] }))
  //   })

  // ).subscribe(res => {
  //   console.log(res);
  // })


  // this.timeService.getLocation().subscribe(res => {

  //   res.map(result => {
  //     debugger;
  //     this.location = Object.assign(new MyLocation(), result)
  //   })



  //this.location = res;
  // debugger;
  // this.location.latitude = res['iss_position'].latitude;
  // this.location.longitude = res['iss_position'].longitude;
  // this.location.timestamp = res['timestamp'];
  // { err => console.log("err") }




}
