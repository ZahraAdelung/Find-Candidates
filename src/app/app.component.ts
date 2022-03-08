import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'find-candidates';


  constructor(private readonly router: Router) { }


  public navigateToAddCandidate() {
    this.router.navigateByUrl('new');
  }
}
