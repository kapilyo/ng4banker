import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnimateCount]'
})
export class AnimateCountDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText =  Element.nativeElement.innerText - 500;
      // let  counted = 0;
      // const target = Element.nativeElement.innerText || 5000; // 10 seconds
      // const i = setInterval(function () {
      //     if (counted < target) {
      //         counted++;
      //         Element.nativeElement.innerText =  counted;
      //     } else {
      //         clearInterval(i);
      //     }
      // }, 1);
    }
  }
