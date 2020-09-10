import { Component } from '@angular/core';
import { Track } from './models/track.model';
import { Greeting } from './models/greeting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  appTracks: Track[] = [];

  onDisplayInstructions(greeting: Greeting): void {
    this.username = greeting.name;
  }

  onTracksReceived(tracks: Track[]): void {
    this.appTracks = tracks;
  }

}
