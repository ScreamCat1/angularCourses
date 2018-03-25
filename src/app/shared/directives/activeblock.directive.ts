import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveblock]'
})
export class ActiveblockDirective {

  @HostBinding('style.background-color') color: string;

  @HostListener('mouseover') setActiveBlock() {
    this.color = 'lightblue';
  }

  @HostListener('mouseout') unsetActiveBlock() {
    this.color = '';
  }
}
