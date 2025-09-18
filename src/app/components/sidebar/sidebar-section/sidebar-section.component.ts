import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4" [ngStyle]="{'background': 'var(--clr-primary, #1e293b)'}">
      <h3 class="text-lg font-bold mb-2">Skills</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <button *ngFor="let skill of skills" class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{{ skill }}</button>
      </div>
      <h3 class="text-lg font-bold mb-2">Languages</h3>
      <div class="flex flex-wrap gap-2 mb-4">
        <span *ngFor="let lang of languages" class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">{{ lang }}</span>
      </div>
      <h3 class="text-lg font-bold mb-2">Links</h3>
      <ul class="mb-4">
        <li *ngFor="let link of links">
          <a [href]="link.url" target="_blank" class="text-blue-500 underline">{{ link.label }}</a>
        </li>
      </ul>
      <h3 class="text-lg font-bold mb-2">Courses</h3>
      <ul>
        <li *ngFor="let course of courses" class="text-gray-700 text-xs mb-1">{{ course }}</li>
      </ul>
    </div>
  `
})
export class SidebarSectionComponent {
  @Input() skills: string[] = [];
  @Input() languages: string[] = [];
  @Input() links: { label: string, url: string }[] = [];
  @Input() courses: string[] = [];
}
