import { Component } from '@angular/core';
import { SidebarSkillsComponent } from '../sidebar-skills/sidebar-skills.component';
import { SidebarLanguagesComponent } from '../sidebar-languages/sidebar-languages.component';
import { SidebarLinksComponent } from '../sidebar-links/sidebar-links.component';
import { SidebarCoursesComponent } from '../sidebar-courses/sidebar-courses.component';
import { frontendMockData } from '../../../../assets/cv-data/frontend.mock';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarSkillsComponent, SidebarLanguagesComponent, SidebarLinksComponent, SidebarCoursesComponent],
  template: `
    <div class="flex flex-col items-center h-full w-64 p-6" style="background: var(--clr-primary, #1e293b); color: white;">
      <img src="https://i.pravatar.cc/120" alt="Profile" class="rounded-full w-24 h-24 mb-4" />
      <h2 class="h2-primary">{{ contact.name }}</h2>
      <app-sidebar-skills [skills]="cvData.skills"></app-sidebar-skills>
      <app-sidebar-languages [languages]="cvData.languages"></app-sidebar-languages>
      <app-sidebar-links [links]="cvData.links"></app-sidebar-links>
      <app-sidebar-courses [courses]="cvData.courses"></app-sidebar-courses>
    </div>
  `
})
export class SidebarComponent {
  cvData = frontendMockData;
  contact = frontendMockData.contact;
  // If you use CvDataService and do not subscribe, you may get:
  // "Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
}
