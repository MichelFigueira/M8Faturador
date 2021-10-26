import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]'
})
export class DarkOnHoverDirective {

  @Input() brightness = '70%'

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseover')
  darkOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkOf() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
