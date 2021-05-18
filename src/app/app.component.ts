import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurantadmin';
  currentcomp='listfood';
  Direct(comp: string): void{
    this. currentcomp=comp;
  }
}
