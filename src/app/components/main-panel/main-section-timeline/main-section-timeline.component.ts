import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineExperience } from '@interfaces/CVData';

@Component({
  selector: 'main-section-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full pt-8">
      <h2 class="h2--primary pb-2 mb-4">{{ title }}</h2>
      <div class="flex flex-col">
       @for (exp of experiences; track $index) {
        <div class="flex items-start relative">
          <!-- Left: Company, Location, Dates -->
          <div class="flex flex-col pr-6" style="width: calc(28%);">
            <div class="experience__institution-font font-ubuntu-bold">{{ exp.company }}</div>
            <div class="experience__city-font ">{{ exp.location }}</div>
            <div class="experience__timeframe-font">{{ exp.dates }}</div>
          </div>


          <!-- Right: Role, Tasks -->
          <div class="pl-6 pb-8 relative" style="width: calc(72%);">
            <div class="experience__role-font font-ubuntu-bold">{{ exp.role }}</div>
            <div class="experience__tasks-font ">
              <ul>
              @for (item of exp.tasks; track $index) {
                <li class="pt-2" [innerHTML]="item"></li>
              }</ul>
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
  @Input() title: string = '';
}
