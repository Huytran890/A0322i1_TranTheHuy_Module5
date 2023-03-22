import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  constructor() { }

  public expotional = (number: number): number => number * number;
}
