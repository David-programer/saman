import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.html',
})
export class ErrorComponent implements OnInit {

  constructor() {}

  @Input() error:{message:string, status:boolean}

  ngOnInit(): void {}
}