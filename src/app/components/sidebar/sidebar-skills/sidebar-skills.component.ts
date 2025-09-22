import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-skills',
  standalone: true,
  imports: [],
  styleUrls: ['./sidebar-skills.component.css'],
  template: `
    <div class="sidebar-block">
      <div class="sidebar-heading">SKILLS</div>
      <div class="sidebar-block-content skills-container">
          @for (skill of skills; track skill) {
            <div class="skills-item-wrapper">
              <div class="skills-item-tag">{{ skill }}</div>
            </div>
          }

        </div>
    </div>
    `
})
export class SidebarSkillsComponent {
  @Input() skills: string[] = [];
}
