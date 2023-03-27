import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { facility } from 'src/app/models/facility/facility';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: Array<facility> = [];;
  constructor() { 
    this.data = [
      {
        id: 1,
        imgSrc: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-M.jpg',
        title: 'Presidential Suite',
        operation: 'Room Size:',
        options: '130 m2',
        grade: 'CULTURAL RELAX',
        fees: 399,
        description: 'Decorated in muted cool colors and they feature local Cham artifacts and decorative handicrafts, '+
        'and so make for an elegant, lavishly appointed yet homely atmosphere.'
      },

      {
        id: 2,
        imgSrc: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas.jpg',
        title: 'Pool Villas',
        operation: 'Room Size:',
        options: '320 m2',
        grade: 'CULTURAL RELAX',
        fees: 529,
        description: 'This is living with natural sunlight and the sophistication of traditional and contemporary design. '+
        'The kitchen, modern and beautiful, is open to the deck and cobalt tiled pool, with sleek and modern appliances and a marble counter surface, and a rich mahogany dining area.'
      },

      {
        id: 3,
        imgSrc: 'https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg',
        title: 'Ocean Suite',
        operation: 'Room Size:',
        options: '85.8 m2',
        grade: 'CULTURAL RELAX',
        fees: 739,
        description: 'French colonial style blends charmingly with traditional Vietnamese interior design. '+
        'Listen to the sound of the waves and watch the fishermen in their basket boats, while you are relaxing on one of the two outside sofas on the balcony.'
      },

      {
        id: 4,
        imgSrc: 'https://furamavietnam.com/wp-content/uploads/2018/08/Cafe-Indochine-02.jpg',
        title: 'Culinary',
        operation: 'Operation:',
        options: 'from 19:30pm to 20:00pm',
        grade: 'TRADITIONAL CUISINE',
        fees: 159,
        description: 'Unique signature items, a wide range of paired sauces, and exceptional service make it the first and only kind of sumptuous, '+
        'and creative seafood and steak experience in a show kitchen for memorable dining at one of the top restaurants in Danang.'
      },

      {
        id: 5,
        imgSrc: 'https://ik.imagekit.io/riw0p0n6wg/uploads/tour/water-sports-adventure-water-blow-visit-2120.png?tr=w-641,h-337',
        title: 'Water Sports',
        operation: 'Operation:',
        options: 'from 6:00am to 11:00pm daily',
        grade: 'THRILLING SPORT',
        fees: 199,
        description: 'A full range of water sports will keep you busy. '+
        'We offer catamaran sailing, windsurfing, ocean kayaking, body boarding, aqua cycling, water skiing, jet skiing, wakeboarding, banana, parasailing, and other towable items all available for rent.'
      },
      {
        id: 6,
        imgSrc: 'https://danangprivatecar.com/wp-content/uploads/2022/09/lan-ngam-san-ho-ban-dao-son-tra-hava-travel-1.jpg',
        title: 'Coral Diving',
        operation: 'Operation:',
        options: 'from February to October daily',
        grade: 'EXPLORATORY SPORT',
        fees: 519,
        description: 'The coast surrounding the Furama Resort offers a new and exciting destination for divers in Asia during the Danang diving season. '+
        'Furama Resort Dive Center is operated by highly qualified PADI instructors, offering diving or snorkeling tours to Son Tra Peninsula and Cham Island, and classes at the resort’s pools.'
      },
      {
        id: 7,
        imgSrc: 'https://www.vietgreentravel.com/uploads/plugin/product_items/974/1621908698-1094812383-helicopter-tour-amp-explore-phong-nha-cave-quang-binh.jpg',
        title: 'Helicopter Tours',
        operation: 'Operation:',
        options: 'from 8:00am to 14:00pm daily',
        grade: 'SIGHTSEEING TOURS',
        fees: 469,
        description: 'Enjoy the breathtaking view of Danang City features all the famous landmarks including the iconic Dragon Bridge and the extremely impressive 67-meter Lady Buddha statue at Linh Ung pagoda. '+
        'Take a deep breath and admire the beautiful scenery along both banks of the poetic Han River; The many fishing boats bobbing on the water.'
      },
      {
        id: 8,
        imgSrc: 'http://www.baovanhoa.vn/Portals/0/EasyDNNNews/thumbs/62512/1334931-(1).jpg',
        title: 'Bicycle Renting',
        operation: 'Operation:',
        options: 'all time frames of the day',
        grade: 'CULTURAL RELAX',
        fees: 39,
        description: 'Cycling helps visitors enjoy the romantic scenery of Da Nang at night, in addition to early morning exercise on the roads along the beach. '+
        'This is a humane activity to protect the environment applied by furama to serve visitors with great moments when using it.'
      },
      {
        id: 9,
        imgSrc: 'https://furamavietnam.com/wp-content/uploads/2023/01/Vsense-Spa-Da-Nang-Furama.jpg',
        title: 'Spa & Fitness',
        operation: 'Operation:',
        options: 'from 9:00am to 16:30pm daily',
        grade: 'CULTURAL RELAX',
        fees: 99,
        description: 'Indulge yourself on a relaxation and well-being journey with professional spa services at Furama Resort Danang. '+
        'You will get back with full energy and feel your rejuvenation with special therapies. Come and experience!'
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
