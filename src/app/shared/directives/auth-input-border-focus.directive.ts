import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appAuthInputBorderFocus]',
  standalone: false
})
export class AuthInputBorderFocusDirective implements OnInit {
  @HostBinding('style.borderColor') borderColor = 'transparent';
  private isFocused = false;

  ngOnInit() {
    this.borderColor = 'transparent'; 
  }

  @HostListener('focus') onFocus() {
    this.isFocused = true;
    this.borderColor = '#380AD1';
  }

  @HostListener('blur') onBlur() {
    this.isFocused = false;
    if (!this.isFocused) {
      this.borderColor = 'transparent';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isFocused) {
      this.borderColor = '#380AD1';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isFocused) {
      this.borderColor = 'transparent';
    }
  }
}
