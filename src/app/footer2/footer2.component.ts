import { Component, OnInit } from '@angular/core';
import {Global} from "../Global.service";

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  constructor(public global:Global) { }

  ngOnInit() {
  }

}
