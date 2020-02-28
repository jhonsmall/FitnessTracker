import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 10;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.progress < 100) {
        this.progress = this.progress + 10;
      }
    },200);
  }

}
