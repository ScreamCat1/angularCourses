import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocusBlock]'
})
export class FocusBlockDirective {
  @Input() borderColor: string;
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event.target']) onclick() {
    this.el.nativeElement.style.border = `1px solid ${this.borderColor}`;
  }

}
