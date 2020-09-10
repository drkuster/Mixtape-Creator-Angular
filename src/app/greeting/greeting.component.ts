import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Greeting } from '../models/greeting.model';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Output() nameInfo = new EventEmitter<Greeting>();
  greetingHidden = false;
  firstName = '';

  onNameSubmit(): void {
    this.greetingHidden = true;
    this.nameInfo.emit(new Greeting(this.firstName));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
