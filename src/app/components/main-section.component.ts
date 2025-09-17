import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MainSectionEntry {
  enterprise: string;
  role: string;
  location: string;
  start?: string;
  end?: string;
  skills: string[];

}

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8 p-4 bg-white rounded shadow">
      <h2 class="text-2xl font-bold text-blue-900 mb-4">{{ title }}</h2>
      <ng-container *ngFor="let entry of entries">
        <div class="mb-6">
          <div class="text-sm text-gray-700 mb-1">
            <span class="font-semibold">{{ entry.enterprise }}</span> &mdash; {{ entry.role }}
          </div>
          <div class="text-xs text-gray-500 mb-1">
            {{ entry.location }}
            <span *ngIf="entry.start"> | {{ entry.start }}</span>
            <span *ngIf="entry.end"> - {{ entry.end }}</span>
          </div>
          <div class="flex flex-wrap gap-2 mt-2">
            <span *ngFor="let skill of entry.skills" class="bg-yellow-200 text-yellow-900 px-2 py-1 rounded text-xs">{{ skill }}</span>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class MainSectionComponent {
  @Input() title: string = '';
  @Input() entries: MainSectionEntry[] = [];
}
