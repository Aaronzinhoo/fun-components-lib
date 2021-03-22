import {Component, OnInit} from '@angular/core';
import {FunLibInterface} from 'fun-lib';

@Component({
  selector: 'hide-suprise',
  templateUrl: './hide-suprise.component.html',
  styleUrls: ['./hide-suprise.component.css'],
})
export class HideSupriseComponent implements OnInit, FunLibInterface {
  constructor() {}

  ngOnInit(): void {}

  data: string = 'Ucla rocks!';
}
