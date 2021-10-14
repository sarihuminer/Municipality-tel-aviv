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
  newLocation: MyLocation
  location: any;
  id: any;
  flagmodal = false;
  listLocation: MyLocation[] = [
    new MyLocation("123.123", "456.258", "123121"),
    new MyLocation("456.15", "8989.565", "5645"),
    new MyLocation("546.12", "5466.213", "87977"),
  ]

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {


    this.id = setInterval(() => {
      this.getLocatin();
    }, 2000);

  }
  //when adding new row to list
  addnewLocation() {
    this.newLocation = { latitude: "123.5464", longitude: "123.1213", timestamp: "1231" };
    this.listLocation = [...this.listLocation, this.newLocation]
  }

  getLocatin() {
    this.timeService.getLocation().subscribe(res => {
      this.location = res;
    }, err => { console.log("err") })
  }

  showDialog() {
    this.flagmodal = true;
    // let modal_t = document.getElementById('modal_1')
    // modal_t.classList.remove('hhidden')
    // modal_t.classList.add('sshow');
  }
  closeDialog() {
    this.flagmodal = false;
    // let modal_t = document.getElementById('modal_1')
    // modal_t.classList.remove('sshow')
    // modal_t.classList.add('hhidden');
  }
  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
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




