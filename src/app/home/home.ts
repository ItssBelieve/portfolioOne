import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    new Typed('.typed', {
strings: [
  "a Computer Engineering student",
  "an aspiring Software Developer",
  "building modern Web applications",
  "a Visual artist"
],        typeSpeed: 100,
  backSpeed: 20,        // ❌ disables deleting
  backDelay: 1500,     // pause before next text
  smartBackspace: false,
  loop: true
    });
  }

}