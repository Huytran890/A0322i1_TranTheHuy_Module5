import AOS from 'aos';
import 'aos/dist/aos.css';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoUrl = 'assets/videos/video.mp4';
  constructor() { }

  ngOnInit(): void {
   
  }

  /* Create animation by using Aos library*/
  ngAfterViewInit(): void {
    AOS.init({
      duration: 2000
    });
  }

}
