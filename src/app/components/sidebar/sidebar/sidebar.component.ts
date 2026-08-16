import { Component, input } from '@angular/core';
import { SidebarSkillsComponent } from '../sidebar-skills/sidebar-skills.component';
import { SidebarLanguagesComponent } from '../sidebar-languages/sidebar-languages.component';
import { SidebarCoursesComponent } from '../sidebar-courses/sidebar-courses.component';
import { SidebarAboutMeComponent } from "../sidebar-about-me/sidebar-about-me.component";
import { SidebarPersonalDetailsComponent } from "../sidebar-personal-details/sidebar-personal-details.component";
import { environment } from '../../../../environments/environment';
import { CvData } from '@interfaces/CVData';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarSkillsComponent, SidebarLanguagesComponent, SidebarCoursesComponent, SidebarAboutMeComponent, SidebarPersonalDetailsComponent],
  template: `
    <div class="flex flex-col items-center h-full w-64 px-6 pb-12 bg-gray-100" style="color: var(--clr-gray-900);">
      <img src="./assets/images/profile_sunrise.jpg" alt="Profile" class="rounded-full w-40 h-40 mt-4 mb-2" />
      <sidebar-about-me [class]="blockClass" [aboutMeText]="cvData().aboutme"></sidebar-about-me>
      <sidebar-skills [class]="blockClass" [skills]="cvData().skills"></sidebar-skills>
      <sidebar-languages [class]="blockClass" [languages]="cvData().languages"></sidebar-languages>
      @if (cvData().courses.length > 0 ) {
        <sidebar-courses
          [class]="blockClass"
          [class.after:hidden]="!(env.showArbeitserlaubnis)"
          [courses]="cvData().courses"></sidebar-courses>
      }
      @if (env.showArbeitserlaubnis ) {
        <sidebar-personal-details [class]="blockClass" [cvPersonalDetailsData]="cvData().contact"></sidebar-personal-details>
      }
    </div>
  `
})
export class SidebarComponent {
  cvData = input.required<CvData>();

  readonly env = environment;
  readonly blockClass = 'block break-inside-avoid py-6 relative w-full box-border after:content-[\'\'] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-sidebar-divider';
}
