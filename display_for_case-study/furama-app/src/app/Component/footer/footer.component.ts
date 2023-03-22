import { Component, OnInit, AfterViewInit } from '@angular/core';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  videoUrl = 'assets/videos/video2.mp4';
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  /* Create animation by using Aos library*/
  ngAfterViewInit(): void {
    AOS.init({
      duration: 2000
    });
  }

}
