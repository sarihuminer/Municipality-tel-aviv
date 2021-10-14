import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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

  constructor(private timeService: TimeService, private renderer: Renderer2) { }
  @ViewChild('message') message: ElementRef


  ngOnInit(): void {


    this.id = setInterval(() => {
      this.getLocatin();
    }, 2000);

  }
  //when adding new row to list
  saveDialogData() {
    this.listLocation = [...this.listLocation, this.newLocation]
    this.closeDialog();
    debugger
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
      debugger
      if (res == true) {
        this.renderer.setProperty(this.message.nativeElement, 'innerHTML', '<p id="m">Data saved successfully!<p>');
        console.log("succses!");
      }
      else {
        this.renderer.setProperty(this.message.nativeElement, 'innerHTML', '<p id="m2">No data send!<p>');
        console.log("no data saved!");
      }

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










