import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar-skills',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./sidebar-skills.component.css'],
  templateUrl: './sidebar-skills.component.html'
})
export class SidebarSkillsComponent {
  @Input() skills: Record<string, string[]> = {};

  get skillGroups(): [string, string[]][] {
    return Object.entries(this.skills);
  }
}
