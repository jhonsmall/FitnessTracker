import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 10;
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 10;
      if (this.progress >= 100){
        clearInterval(this.timer);
      }     
    },200);
  }

  onStop(){
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent);
  }

}
