import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-instructions-and-input',
  templateUrl: './instructions-and-input.component.html',
  styleUrls: ['./instructions-and-input.component.css']
})
export class InstructionsAndInputComponent implements OnInit {

  @Input() display = false;
  @Input() username = '';
  @Output() tracksOutput = new EventEmitter<Track[]>();

  numSongsAdded = 0;
  allSongsAdded = false;
  songName = '';
  artistName = '';
  happy = '';

  tracks: Track[] = [];

  checkButton(): boolean {
    if (!this.allSongsAdded) {
      if (!(this.songName && this.artistName)) { return true; }
      return false;
    }
    return true;
  }

  onAddSong(): void {
    if (this.tracks.length < 2) {
      this.tracks.push({name: this.songName, artist: this.artistName});
      this.numSongsAdded++;
      this.songName = this.artistName = '';
      if (this.tracks.length === 2) {
        this.allSongsAdded = true;
        this.happy = '!';
        this.tracksOutput.emit(this.tracks);
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
