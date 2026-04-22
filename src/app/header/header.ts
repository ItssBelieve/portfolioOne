import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
  if (window.innerWidth < 1200) {
    this.isSidebarOpen = false;
  }
}
activeSection = 'home';

ngOnInit() {
  window.addEventListener('scroll', () => {
    this.onScroll();
  });
}

onScroll() {
  const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];

  for (let section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = section;
      }
    }
  }
}
}