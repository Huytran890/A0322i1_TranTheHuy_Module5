import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { destination } from 'src/app/models/destination';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: Array<destination> = [];;
  constructor() { 
    this.data = [
      {
        id: 1,
        imgSrc: 'assets/videos/bora-bora.jpg',
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: 600,
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. '+
        'This place is known for its luxurious stays and adventurous activities. '
      },

      {
        id: 2,
        imgSrc: 'assets/videos/bora-bora.jpg',
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: 679,
        description: 'Huaya Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. '+
        'This place is popular among tourist as the sunrise from the Sun Gate is simply spectacular. '
      },

      {
        id: 3,
        imgSrc: 'assets/videos/bora-bora.jpg',
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: 739,
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. '+
        'The hallmark of this place is "lavish" and "beauty". Always interesting to be in this place. '
      },

      {
        id: 4,
        imgSrc: 'assets/videos/bora-bora.jpg',
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: 800,
        description: 'According to the world Tourism Ranking, 45 million people visit Turkey each year,'+
        'and from that about 2 million come to visit Cappodocia. This place is known for its luxurious stays and adventurous activities. '
      },

      {
        id: 5,
        imgSrc: 'assets/videos/bora-bora.jpg',
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: 849,
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. '+
        'Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. '+
        'Happy exploring great food! '
      }
    ]
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
