import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-languages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-lg font-bold mb-2" style="color: gold;">Languages</h2>
    <div class="flex flex-wrap gap-2 mb-2">
      <span *ngFor="let lang of languages" class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">{{ lang }}</span>
    </div>
    <hr class="border-t border-gray-400 mb-4" />
  `
})
export class SidebarLanguagesComponent {
  @Input() languages: string[] = [];
}
