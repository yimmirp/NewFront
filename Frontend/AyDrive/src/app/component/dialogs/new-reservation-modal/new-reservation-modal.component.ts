import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-new-reservation-modal',
  templateUrl: './new-reservation-modal.component.html',
  styleUrls: ['./new-reservation-modal.component.css']
})
export class NewReservationModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewReservationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message:any,private Guest:GuestService){

  }

  
  ngOnInit(): void {
  }


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  Reservar(){
    console.log(this.message.idLodging)
    console.log(this.message.userId)

    console.log(this.range.value.start)
    console.log(this.range.value.end)

    
    this.Guest.NewResetvation(this.range.value.start, this.range.value.end, this.message.idLodging,this.message.idLodging)
    .subscribe((res) => {
      console.log(res)
    })
  }
}
