import { Component, Input } from '@angular/core';
import { Course } from '../../../../assets/cv-data/frontend.mock';

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
      color: #a28848;
      text-transform: uppercase;
      font-size: 0.95rem;
    }
    .course-meta {
      font-size: 0.8rem;
      color: #cbd5e1;
    }
  `],
  template: `
  <ng-container>
    <div class="sidebar-heading">Courses</div>
    <div class="sidebar-block-content">
      <ul>
        @for (course of courses; track $index) {
          <li class="course-item">
            <div class="course-font">{{ course.name }}</div>
            <div class="course-meta">{{ course.institution }} &mdash; {{ course.date }}</div>
          </li>
        }
      </ul>
    </div>
  </ng-container>
  `
})
export class SidebarCoursesComponent {
  @Input() courses: Course[] = [];
}
