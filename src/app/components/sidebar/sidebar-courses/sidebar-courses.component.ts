import { Component, Input } from '@angular/core';
import { Course } from '@interfaces/CVData';
@Component({
  selector: 'sidebar-courses',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-courses.component.html'
})
export class SidebarCoursesComponent {
  @Input() courses: Course[] = [];
}
