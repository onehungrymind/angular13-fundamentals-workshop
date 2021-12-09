import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  currentKey = 'currentkey';

  constructor() { }

  ngOnInit(): void {
  }

}
