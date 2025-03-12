// app.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskService } from './services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService],
})
export class AppComponent {
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showFooter = !this.router.url.includes('/about');
    });
  }
}
