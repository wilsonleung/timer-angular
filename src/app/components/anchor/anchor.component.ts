import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css'],
})
export class AnchorComponent implements OnInit {
  @Input('selected') selected = false;

  constructor() {}

  ngOnInit(): void {}
}
