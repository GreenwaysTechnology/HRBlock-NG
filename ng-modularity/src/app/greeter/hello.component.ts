import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  message:string;
  constructor() { }

  ngOnInit(): void {
  }

}
