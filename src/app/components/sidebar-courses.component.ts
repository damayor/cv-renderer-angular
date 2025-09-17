import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-lg font-bold mb-2" style="color: gold;">Courses</h2>
    <ul>
      <li *ngFor="let course of courses" class="text-gray-700 text-xs mb-1">{{ course }}</li>
    </ul>
    <hr class="border-t border-gray-400 mb-4" />
  `
})
export class SidebarCoursesComponent {
  @Input() courses: string[] = [];
}
