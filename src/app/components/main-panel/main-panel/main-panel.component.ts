import { Component, input, signal } from '@angular/core';
import { MainSectionTimelineComponent } from '../main-section-timeline/main-section-timeline.component';
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";
import { environment } from '../../../../environments/environment';
import { Contact, CvData } from '@interfaces/CVData';

@Component({
  selector: 'main-panel',
  standalone: true,
  imports: [MainSectionTimelineComponent, PersonalDetailsComponent],
  template: `
    <div class="flex flex-col bg-white min-h-screen">
      @for (section of cvData().experiences; track $index) {
        <main-section-timeline [title]="section.title" [experiences]="section.entries"></main-section-timeline>
      }
      
      <!-- @if (env.showArbeitserlaubnis ) {
        <personal-details [cvPersonalDetailsData]="cvData().contact" [titles]="cvData().sectionTitles" ></personal-details>
      } -->
    </div>
  `
})
export class MainPanelComponent {
  cvData =  input.required<CvData>();

  readonly env = environment;
}
