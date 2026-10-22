import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineExperience } from '@interfaces/CVData';

@Component({
  selector: 'main-section-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full p-5">
      <h2 class="h2--primary pb-2 mb-4 break-after-avoid">{{ title }}</h2>
      <div class="flex flex-col">
       @for (exp of experiences; track $index) {
        <div class="grid grid-cols-[28%_72%] grid-rows-[auto_1fr] items-start">
          <div class="col-start-2 row-start-1 pl-6 experience__role-font font-ubuntu-bold">{{ exp.role }}</div>
          <div class="col-start-1 row-start-1 row-span-2 pr-6">
            <div class="experience__institution-font font-ubuntu-bold">{{ exp.company }}</div>
            <div class="experience__city-font">{{ exp.location }}</div>
            <div class="experience__timeframe-font">{{ exp.dates }}</div>
          </div>
          <div class="col-start-2 row-start-2 pl-6 pb-8 experience__tasks-font">
            <ul>
            @for (item of itemsOf(exp); track $index) {
              <li class="pt-2" [innerHTML]="item"></li>
            }</ul>
          </div>
          <!-- Timeline dot and line, spanning role + tasks. Decorative only, no text. -->
          <div class="col-start-2 row-start-1 row-span-2 relative self-stretch pointer-events-none" aria-hidden="true">
            <div class="experience__decoration-dot"></div>
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

  itemsOf(exp: TimelineExperience): string[] {
    return [...(exp.achievements ?? []), ...(exp.tasks ?? [])];
  }
}
