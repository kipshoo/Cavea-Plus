import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPlayButtonDesign]',
  standalone: false
})
export class PlayButtonDesignDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'padding', '4px 16px');
    this.renderer.setStyle(button, 'height', '40px');
    this.renderer.setStyle(button, 'width', 'auto');
    this.renderer.setStyle(button, 'display', 'flex');
    this.renderer.setStyle(button, 'justify-content', 'center');
    this.renderer.setStyle(button, 'align-items', 'center');
    this.renderer.setStyle(button, 'border-radius', '100px');
    this.renderer.setStyle(button, 'font-size', '14px');
    this.renderer.setStyle(button, 'color', 'white');
    this.renderer.setStyle(button, 'border', '1px solid transparent');
    this.renderer.setStyle(button, 'font-weight', '500');
    this.renderer.setStyle(button, 'background', 'linear-gradient(#010116, #010116) padding-box, linear-gradient(90deg, #52fff3, #380ad1 32.6%, #7b0ad1 68.54%, #d840fb) border-box');
    this.renderer.setStyle(button, 'transition', 'background 0.5s ease-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'background', 'linear-gradient(90deg, #52fff3, #380ad1 32.6%, #7b0ad1 68.54%, #d840fb) padding-box');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle();
  }
}
