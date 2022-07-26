import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snipper',
  templateUrl: './snipper.component.html',
  styleUrls: ['./snipper.component.scss']
})
export class SnipperComponent implements OnInit {

   public items= Array(4);
  constructor() { }

  ngOnInit(): void {
  }

}
