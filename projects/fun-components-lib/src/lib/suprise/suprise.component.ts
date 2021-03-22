import {Component, OnInit} from '@angular/core';
import {FunLibInterface} from 'fun-lib';

@Component({
  selector: 'app-suprise',
  templateUrl: './suprise.component.html',
  styleUrls: ['./suprise.component.css'],
})
export class SupriseComponent implements OnInit, FunLibInterface {
  constructor() {}

  ngOnInit(): void {}

  data: string = 'This is the surprise component!';
}
