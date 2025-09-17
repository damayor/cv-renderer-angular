import { Component } from '@angular/core';
import { SidebarSkillsComponent } from './sidebar-skills.component';
import { SidebarLanguagesComponent } from './sidebar-languages.component';
import { SidebarLinksComponent } from './sidebar-links.component';
import { SidebarCoursesComponent } from './sidebar-courses.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarSkillsComponent, SidebarLanguagesComponent, SidebarLinksComponent, SidebarCoursesComponent],
  template: `
    <div class="flex flex-col items-center h-full w-64 p-6" style="background: var(--sidebar-bg, #1e293b); color: white;">
      <img src="https://i.pravatar.cc/120" alt="Profile" class="rounded-full w-24 h-24 mb-4" />
      <h2 class="text-xl font-bold mb-2">Your Name</h2>
      <app-sidebar-skills [skills]="['Angular', 'TypeScript', 'CSS', 'Tailwind', 'RxJS']"></app-sidebar-skills>
      <app-sidebar-languages [languages]="['English', 'Spanish', 'French']"></app-sidebar-languages>
      <app-sidebar-links [links]="[
        { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
        { label: 'GitHub', url: 'https://github.com/yourprofile' },
        { label: 'Portfolio', url: 'https://yourportfolio.com' }
      ]"></app-sidebar-links>
      <app-sidebar-courses [courses]="['Angular Mastery', 'TypeScript Deep Dive', 'Advanced CSS', 'RxJS in Practice']"></app-sidebar-courses>
    </div>
  `
})
export class SidebarComponent {}
