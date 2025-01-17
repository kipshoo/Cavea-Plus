import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy {
  constructor (private commonService:CommonService, private location:Location) {}
  navbarArray:Array<any> = [];
  isDropdownOpen = false;
  selectedLanguage = 'GEO';
  selectedNavIndex: number = 0;
  isNavDropdownOpen = false;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.isDropdownOpen = false;
  }

  setActiveNav(index: number): void {
    this.selectedNavIndex = index;
  }

  onClickToScroll():void {
    this.setActiveNav(0)
    this.scrollToTop()
  }

  ngOnInit(): void {
    this.getNavbar()
  }

  ngOnDestroy(): void {}

  private getNavbar():void {
    this.commonService.getHeaderNavbar()
    .subscribe((response) => {
      this.navbarArray = response.items;
    })
  }

  getParams(){
    let locationPath = this.location.path()
    return locationPath == '' ? '/' : locationPath;
  }
  
  toggleNavDropdown() {
    this.isNavDropdownOpen = !this.isNavDropdownOpen;
  }

  getIconClass(icon: string): string {
    switch (icon) {
      case 'icon-home':
        return 'fa fa-home';
      case 'icon-movies':
        return 'fa fa-film';
      case 'icon-tv-shows':
        return 'fa fa-tv';
      case 'icon-watchlist':
        return 'fa fa-bookmark';
      default:
        return '';
    }
  }
}
