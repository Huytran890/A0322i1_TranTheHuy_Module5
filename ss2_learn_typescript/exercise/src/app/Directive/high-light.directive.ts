import { Directive, ElementRef, Input, } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input('appHighLight') appHighLight = 'blue';

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
    if(this.appHighLight) {
      this.element.nativeElement.style.color = this.appHighLight;
    }
    this.appHighLight = 'blue'
  }
}
