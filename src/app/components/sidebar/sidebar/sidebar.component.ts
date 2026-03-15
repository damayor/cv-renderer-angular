import { Component, input } from '@angular/core';
import { SidebarSkillsComponent } from '../sidebar-skills/sidebar-skills.component';
import { SidebarLanguagesComponent } from '../sidebar-languages/sidebar-languages.component';
import { SidebarLinksComponent } from '../sidebar-links/sidebar-links.component';
import { SidebarCoursesComponent } from '../sidebar-courses/sidebar-courses.component';
import { SidebarAboutMeComponent } from "../sidebar-about-me/sidebar-about-me.component";
import { CvData } from '@interfaces/CVData';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarSkillsComponent, SidebarLanguagesComponent, SidebarLinksComponent, SidebarCoursesComponent, SidebarAboutMeComponent],
  template: `
    <div class="flex flex-col items-center h-full w-64 px-6" style="background: var(--clr-primary, #1e293b); color: white;">
      <img src="./assets/images/profile.jpg" alt="Profile" class="rounded-full w-40 h-40 mt-4 mb-2" />
      <sidebar-about-me class="sidebar-block" [aboutMeText]="cvData().aboutme"></sidebar-about-me>
      <sidebar-skills class="sidebar-block" [skills]="cvData().skills"></sidebar-skills>
      <sidebar-languages  class="sidebar-block" [languages]="cvData().languages"></sidebar-languages>
      <sidebar-links class="sidebar-block" [links]="cvData().links"></sidebar-links>
      @if (cvData().courses.length > 0 ) {
        <sidebar-courses class="sidebar-block sidebar-block--courses" [courses]="cvData().courses"></sidebar-courses>
      }
    </div>
  `
})
export class SidebarComponent {
  cvData = input.required<CvData>();
}
