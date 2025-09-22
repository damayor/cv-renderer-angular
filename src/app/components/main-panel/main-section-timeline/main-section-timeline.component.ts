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
  selector: 'main-section-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full py-8">
      <h2 class="h2--primary pb-2 mb-4">Work Experience</h2>
      <div class="flex flex-col">
       @for (exp of experiences; track $index) {
        <div class="flex items-start relative">
          <!-- Left: Company, Location, Dates -->
          <div class="w-1/4 flex flex-col pr-6">
            <div class="experience__institution-font font-ubuntu-bold">{{ exp.company }}</div>
            <div class="experience__city-font ">{{ exp.location }}</div>
            <div class="experience__timeframe-font">{{ exp.dates }}</div>
          </div>


          <!-- Right: Role, Tasks -->
          <div class="w-3/4 pl-8 pb-8 relative">
            <div class="experience__role-font font-ubuntu-bold">{{ exp.role }}</div>
            <div class="experience__tasks-font ">
              <li>
              @for (item of exp.tasks; track $index) {
                <ul [innerHTML]="item"></ul>
              }</li>
            </div>
            <div class="experience__decoration-dot">
          </div>
            <!-- Timeline Dot and Line -->
          <div class="experience__tasks-border"></div>
          </div>

        </div>
       }
      </div>
    </div>
  `
})
export class MainSectionTimelineComponent {
  @Input() experiences: TimelineExperience[] = [];
}
