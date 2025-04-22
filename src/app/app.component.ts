// app.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskService } from './services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showFooter = !this.router.url.includes('/about');
    });
  }
}
