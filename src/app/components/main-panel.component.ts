import { Component } from '@angular/core';
import { SectionComponent } from './section.component';
import { MainSectionComponent, MainSectionEntry } from './main-section.component';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [SectionComponent, MainSectionComponent],
  template: `
    <div class="flex flex-col p-8 bg-white min-h-screen">
      <h1 class="text-4xl font-bold mb-2">Your Name</h1>
      <p class="text-lg mb-4">Contact: email@example.com | +123456789</p>
      <app-main-section
        title="Work Experience"
        [entries]="workExperiences"
      ></app-main-section>
      <app-main-section
        title="Education"
        [entries]="educations"
      ></app-main-section>
      <app-main-section
        title="Extra-Curricular Activities"
        [entries]="extraCurriculars"
      ></app-main-section>
    </div>
  `
})
export class MainPanelComponent {
  workExperiences: MainSectionEntry[] = [
    {
      enterprise: 'TechCorp',
      role: 'Frontend Engineer',
      location: 'Remote',
      start: 'Jan 2020',
      end: 'Present',
      skills: ['Angular', 'TypeScript', 'Leadership']
    },
    {
      enterprise: 'WebWorks',
      role: 'UI Developer',
      location: 'Berlin',
      start: 'Feb 2018',
      end: 'Dec 2019',
      skills: ['HTML', 'CSS', 'JavaScript']
    }
  ];
  educations: MainSectionEntry[] = [
    {
      enterprise: 'University of Example',
      role: 'Student',
      location: 'Cityville',
      start: 'Sep 2015',
      end: 'Jun 2019',
      skills: ['Algorithms', 'Data Structures', 'Teamwork']
    },
    {
      enterprise: 'Online Academy',
      role: 'Learner',
      location: 'Online',
      start: 'Jan 2020',
      skills: ['Machine Learning', 'Python']
    }
  ];
  extraCurriculars: MainSectionEntry[] = [
    {
      enterprise: 'Code4Good',
      role: 'Mentor',
      location: 'Online',
      start: 'Mar 2021',
      skills: ['Mentoring', 'Public Speaking', 'Community']
    },
    {
      enterprise: 'Local Sports Club',
      role: 'Coach',
      location: 'Cityville',
      start: 'May 2017',
      end: 'Aug 2019',
      skills: ['Teamwork', 'Leadership']
    }
  ];
}
