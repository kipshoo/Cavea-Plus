import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubscriptionAuthButtonDesign]',
  standalone: false
})
export class SubscriptionAuthButtonDesignDirective {
  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'left', '250px');
    this.renderer.setStyle(button, 'top', 'calc(620px + 40px)');
    this.renderer.setStyle(button, 'padding', '12px 24px');
    this.renderer.setStyle(button, 'height', '40px');
    this.renderer.setStyle(button, 'width', 'auto');
    this.renderer.setStyle(button, 'display', 'flex');
    this.renderer.setStyle(button, 'justify-content', 'center');
    this.renderer.setStyle(button, 'align-items', 'center');
    this.renderer.setStyle(button, 'border-radius', '100px');
    this.renderer.setStyle(button, 'font-size', '16px');
    this.renderer.setStyle(button, 'color', 'white');
    this.renderer.setStyle(button, 'border', '1px solid transparent');
    this.renderer.setStyle(button, 'font-weight', '500');
    this.renderer.setStyle(button, 'background', 'linear-gradient(90deg, #52fff3, #380ad1 32.6%, #7b0ad1 68.54%, #d840fb)');
    this.renderer.setStyle(button, 'transition', '.5s ease');
    this.renderer.setStyle(button, 'border', 'none');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'box-shadow', '-3px 3px 10px #52fff3e6, 3px 3px 10px #d840fb, -3px -3px 10px #380ad1, 3px -3px 10px #7b0ad1');
}

@HostListener('mouseleave') onMouseLeave() {
    const button = this.el.nativeElement;
    this.renderer.removeStyle(button, 'box-shadow');
    this.setStyle();
}

}
