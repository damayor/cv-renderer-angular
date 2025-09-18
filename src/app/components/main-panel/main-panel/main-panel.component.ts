import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MainSectionComponent, MainSectionEntry } from '../main-section/main-section.component';
import { MainSectionTimelineComponent, TimelineExperience } from '../main-section-timeline/main-section-timeline.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { frontendMockData } from '../../../../assets/cv-data/frontend.mock';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [SectionComponent, MainSectionComponent, MainSectionTimelineComponent, UserHeaderComponent],
  template: `
    <div class="flex flex-col p-8 bg-white min-h-screen">
      <app-user-header
        [name]="contact.name"
        [role]="'Senior Software Engineer'"
        [location]="'Berlin, Germany'"
        [phone]="'+49 01525 2198970'"
        [email]="'dr.mayorga20@gmail.com'"
      ></app-user-header>
      <app-main-section-timeline [experiences]="timelineExperiences"></app-main-section-timeline>
      <app-main-section
        title="Education"
        [entries]="cvData.educations"
      ></app-main-section>
      <app-main-section
        title="Extra-Curricular Activities"
        [entries]="cvData.extraCurriculars"
      ></app-main-section>
    </div>
  `
})
export class MainPanelComponent {
  cvData = frontendMockData;
  contact = frontendMockData.contact;
  timelineExperiences: TimelineExperience[] = [
    {
      company: 'ADIDAS',
      location: 'Bogotá',
      dates: 'May 2021 - Jun 2025',
      role: 'Software Engineer',
      tasks: [
        'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js</b> and <b>Unity</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
        'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
        'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
        'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
      ]
    },
    {
      company: 'MADBRICKS',
      location: 'Remote',
      dates: 'Sep 2020 - Dec 2020',
      role: 'Game Developer',
      tasks: [
        'Developed and maintained hyper-casual mobile games using <b>Unity</b> and <b>Unreal/C++</b>, enhancing user engagement and UI/UX experience.'
      ]
    },
    {
      company: 'UMBRA INTERACTIVE - 3D STUDIO',
      location: 'Bogotá',
      dates: 'Jan 2020 - Sep 2020',
      role: 'Frontend Software Developer',
      tasks: [
        'Created <b>immersive 3D applications</b> with <b>React</b> and <b>Unreal/C++</b> and interactive masterplan visualisations for the real estate sector (PropTech)',
        'Developed hyper-casual games in <b>Unity</b> and <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.'
      ]
    }
  ];
  // If you use CvDataService and do not subscribe, you may get:
  // "Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
}
