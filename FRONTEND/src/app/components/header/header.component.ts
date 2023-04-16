import { Component, HostListener } from '@angular/core';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sticky: boolean = false;
  faToggleOn = faBars;
  faToggleOff = faXmark;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.sticky = window.pageYOffset >= 1;
  }

  public isMenuOpen: boolean = false;
  public menuClass: string = "";

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.menuClass = "nav-open"; 
    } else {
      this.menuClass = ""; 
    }
  }
  
  public selectPage(): void {
    this.isMenuOpen = false;
    this.menuClass = "";
  }
}
