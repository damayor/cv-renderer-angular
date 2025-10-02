import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-skills',
  standalone: true,
  imports: [],
  styleUrls: ['./sidebar-skills.component.css'],
  templateUrl: './sidebar-skills.component.html'
})
export class SidebarSkillsComponent {
  @Input() skills: string[] = [];
}
