import { Component, computed, input } from '@angular/core';
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
    <div class="flex flex-col items-center w-64 px-6" [class.pb-12]="part() === 'bottom'" style="color: var(--clr-gray-900);">
      @if (part() === 'top') {
        @if (env.showPicture) {
          <img src="./assets/images/profile_sunrise.jpg" alt="Profile" class="rounded-full w-40 h-40 mt-4 mb-2" />
        }
        <sidebar-about-me class="border-b" [class]="blockClass" [aboutMeText]="cvData().aboutme"></sidebar-about-me>
        <sidebar-skills class="border-b" [class]="blockClass" [skills]="cvData().skills" [title]="titles().skills"></sidebar-skills>
      } @else {
        <sidebar-languages class="border-b" [class]="blockClass" [languages]="cvData().languages" [title]="titles().languages"></sidebar-languages>
        @if (cvData().courses.length > 0 ) {
          <sidebar-courses
            [class]="blockClass"
            [class.border-b]="env.showArbeitserlaubnis"
            [title]="titles().courses"
            [courses]="cvData().courses"></sidebar-courses>
        }
        @if (env.showArbeitserlaubnis ) {
          <sidebar-personal-details class="border-b" [class]="blockClass" [cvPersonalDetailsData]="cvData().contact" [titles]="titles()"></sidebar-personal-details>
        }
      }
    </div>
  `
})
export class SidebarComponent {
  cvData = input.required<CvData>();
  // `top`: photo, about me, skills. `bottom`: languages, courses, personal details.
  part = input<'top' | 'bottom'>('top');

  titles = computed(() => this.cvData().sectionTitles);

  readonly env = environment;
  readonly blockClass = 'block break-inside-avoid py-6 w-full box-border border-sidebar-divider';
}
