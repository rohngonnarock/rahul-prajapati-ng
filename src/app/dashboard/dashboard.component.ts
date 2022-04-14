import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  focus: any;
  focus1: any;
  isPlaying: Boolean = false as Boolean;
  audioPlayer!: HTMLMediaElement;

  @ViewChild('audioPlayer')
  set mainAudioEl(el: ElementRef) {
    this.audioPlayer = el.nativeElement;
  }

  togglePlay() {
    this.isPlaying ? this.audioPlayer.pause() : this.audioPlayer.play();
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.audioPlayer.onplaying = () => {
      this.isPlaying = true;
    };

    this.audioPlayer.onpause = () => {
      this.isPlaying = false;
      this.audioPlayer.load();
    };
  }
}
