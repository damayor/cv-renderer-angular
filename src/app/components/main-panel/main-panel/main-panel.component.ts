import { Component, input, signal } from '@angular/core';
import { MainSectionTimelineComponent } from '../main-section-timeline/main-section-timeline.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";
import { CvData } from '../../../interfaces/CVData';

@Component({
  selector: 'main-panel',
  standalone: true,
  imports: [MainSectionTimelineComponent, UserHeaderComponent, PersonalDetailsComponent],
  template: `
    <div class="flex flex-col p-6 bg-white min-h-screen">
      <user-header
        [fullname]="contact().fullname"
        [role]="cvData().occupation.value"
        [location]="contact().location"
        [phone]="contact().phone"
        [email]="contact().email"
      ></user-header>
      @for (section of cvData().experiences; track $index) {
        <main-section-timeline [title]="section.title" [experiences]="section.entries"></main-section-timeline>

      }
      <personal-details [cvPersonalDetailsData]="cvData().contact" ></personal-details>
    </div>
  `
})
export class MainPanelComponent {
  cvData =  input.required<CvData>();
  contact = input() as any; // CvData['contact'];
}
