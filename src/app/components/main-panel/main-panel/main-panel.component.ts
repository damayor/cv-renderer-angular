import { Component, input, signal } from '@angular/core';
import { MainSectionTimelineComponent } from '../main-section-timeline/main-section-timeline.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";
import { environment } from '../../../../environments/environment';
import { Contact, CvData } from '@interfaces/CVData';

@Component({
  selector: 'main-panel',
  standalone: true,
  imports: [MainSectionTimelineComponent, UserHeaderComponent, PersonalDetailsComponent],
  template: `
    <div class="flex flex-col bg-white min-h-screen">
      <user-header
        [role]="cvData().occupation.value"
        [userData]="contact()"
      ></user-header>
      
      @for (section of cvData().experiences; track $index) {
        <main-section-timeline [title]="section.title" [experiences]="section.entries"></main-section-timeline>
      }
      
      @if (env.cvScope !== 'EU' ) {
        <personal-details [cvPersonalDetailsData]="cvData().contact" ></personal-details>
      }
    </div>
  `
})
export class MainPanelComponent {
  cvData =  input.required<CvData>();
  contact = input() as any; //input.required<Contact>

  readonly env = environment;
}
