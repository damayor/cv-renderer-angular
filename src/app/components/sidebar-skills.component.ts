import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-lg font-bold mb-2" style="color: gold;">Skills</h2>
    <div class="flex flex-wrap gap-2 mb-2">
      <button *ngFor="let skill of skills" class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{{ skill }}</button>
    </div>
    <hr class="border-t border-gray-400 mb-4" />
  `
})
export class SidebarSkillsComponent {
  @Input() skills: string[] = [];
}
