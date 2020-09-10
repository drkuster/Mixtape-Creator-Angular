import { Input, Component, OnInit } from '@angular/core';
import { Greeting } from '../models/greeting.model';

@Component({
  selector: 'app-mixtape',
  templateUrl: './mixtape.component.html',
  styleUrls: ['./mixtape.component.css']
})
export class MixtapeComponent implements OnInit {
  @Input() tracks: {name: string, artist: string}[] = [];
  @Input() name: string;
  @Input() display: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
