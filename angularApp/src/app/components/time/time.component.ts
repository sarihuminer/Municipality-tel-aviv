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
  describtion: string;
  listLocation: MyLocation[] = [
  ]

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {


    this.id = setInterval(() => {
      this.getLocatin();
    }, 2000);

  }
  //when adding new row to list
  saveDialogData() {
    debugger;
    this.listLocation = [...this.listLocation, this.newLocation]
    this.closeDialog();
  }

  getLocatin() {
    this.timeService.getLocation().subscribe(res => {
      this.location = res;
    }, err => { console.log("err") })
  }

  showDialog() {
    this.flagmodal = true;
    this.newLocation = {
      latitude: this.location['iss_position'].latitude,
      longitude: this.location['iss_position'].longitude,
      timestamp: this.location['timestamp'],
      note: ""
    }
  }
  closeDialog() {
    this.flagmodal = false;

  }
  saveLocations() {
    this.timeService.saveLocation(this.listLocation).subscribe(res => {
      console.log("succses!")
    }, err => { console.log("err") })
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




