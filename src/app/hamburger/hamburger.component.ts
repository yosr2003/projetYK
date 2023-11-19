import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit() {
      window.addEventListener('scroll', (e) => {
        if (window.pageYOffset > 100) {
          this.renderer.addClass(this.elRef.nativeElement.querySelector("header"), 'is-scrolling');
        } else {
          this.renderer.removeClass(this.elRef.nativeElement.querySelector("header"), 'is-scrolling');
        }
      });
  
      const menu_btn = this.elRef.nativeElement.querySelector('.hamburger');
      const mobile_menu = this.elRef.nativeElement.querySelector('.mobile-nav');
  
      menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
      });
    }
  

}
