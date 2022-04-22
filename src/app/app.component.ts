import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngProject-MyProducts';

  constructor(private router: Router) { }

  isHome(path: string): boolean {
    return this.router.url === path
  }

  isProducts(path: string): boolean {
    return this.router.url === path
  }
}
