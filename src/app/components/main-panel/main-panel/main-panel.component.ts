import { Component } from '@angular/core';
import { MainSectionTimelineComponent } from '../main-section-timeline/main-section-timeline.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { frontendMockData } from '../../../../assets/cv-data/frontend.mock';
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";

@Component({
  selector: 'main-panel',
  standalone: true,
  imports: [MainSectionTimelineComponent, UserHeaderComponent, PersonalDetailsComponent],
  template: `
    <div class="flex flex-col p-8 bg-white min-h-screen">
      <user-header
        [name]="contact.name"
        [role]="contact.occupation"
        [location]="contact.location"
        [phone]="contact.phone"
        [email]="contact.email"
      ></user-header>
      @for (section of cvData.experiences; track $index) {
        <main-section-timeline [title]="section.title" [experiences]="section.entries"></main-section-timeline>

      }
      <personal-details></personal-details>
    </div>
  `
})
export class MainPanelComponent {
  cvData = frontendMockData;
  contact = frontendMockData.contact;

}
