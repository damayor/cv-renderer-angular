import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineExperience {
  company: string;
  location: string;
  dates: string;
  role: string;
  tasks: string[];
}

@Component({
  selector: 'app-main-section-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full py-8">
  <h2 class="h2-primary">Work Experience</h2>
      <div class="flex flex-col gap-8">
        <div *ngFor="let exp of experiences; let i = index" class="flex items-start relative">
          <!-- Left: Company, Location, Dates -->
          <div class="w-1/3 flex flex-col items-end pr-6">
            <div class="text-xs font-bold uppercase text-gray-700 font-ubuntu-bold">{{ exp.company }}</div>
            <div class="text-xs text-gray-500">{{ exp.location }}</div>
            <div class="text-xs text-gray-400">{{ exp.dates }}</div>
          </div>
          <!-- Timeline Dot and Line -->
          <div class="relative" style="width: 32px;">
            <div class="absolute top-0 left-1/2 -translate-x-1/2" style="height: 24px;"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500 border-2 border-white timeline-dot" style="position: absolute; top: 0; left: 50%; transform: translate(-50%, 0);"></div>
            <div *ngIf="i < experiences.length - 1" class="w-0.5 bg-yellow-300 mx-auto" style="position: absolute; top: 0.75rem; left: 50%; transform: translateX(-50%); height: 80px;"></div>
          </div>
          <!-- Right: Role, Tasks -->
          <div class="w-2/3 pl-8">
            <div class="font-bold text-lg mb-1 font-ubuntu-bold">{{ exp.role }}</div>
            <ul class="list-disc ml-5 text-sm text-gray-700">
              <li *ngFor="let task of exp.tasks" [innerHTML]="task"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MainSectionTimelineComponent {
  @Input() experiences: TimelineExperience[] = [];
}
