
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AboutComponent } from './about/about';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { PortfolioComponent } from './portfolio/portfolio';
import { ContactComponent } from './contact/contact';
import { SkillsComponent } from './skills/skills';  
import AOS from 'aos';
import { HostListener } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,AboutComponent,HomeComponent,FooterComponent, PortfolioComponent, ContactComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
    
  }
  showTopBtn = false;

@HostListener('window:scroll', [])
onScroll() {
  this.showTopBtn = window.scrollY > 300;
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
