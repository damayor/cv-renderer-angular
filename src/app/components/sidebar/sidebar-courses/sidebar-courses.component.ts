import { Component, Input } from '@angular/core';
import { Course } from '@interfaces/CVData';
@Component({
  selector: 'sidebar-courses',
  standalone: true,
  imports: [],
  styles: [`
    :host {
      display: block;
    }
    .course-item {
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
      color: #e2e8f0;
    }
    .course-title {
      font-weight: 600;
      color: var(--clr-secondary);
      text-transform: uppercase;
      font-size: 0.95rem;
    }
    .course-meta {
      font-size: 0.8rem;
      color: #cbd5e1;
    }
  `],
  templateUrl: './sidebar-courses.component.html'
})
export class SidebarCoursesComponent {
  @Input() courses: Course[] = [];
}
