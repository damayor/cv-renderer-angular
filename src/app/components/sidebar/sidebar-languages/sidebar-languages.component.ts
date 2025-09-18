import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../../assets/cv-data/frontend.mock';

@Component({
  selector: 'app-sidebar-languages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="h2-primary">Languages</h2>
    <div class="flex flex-col gap-4 mb-2">
      <div *ngFor="let lang of languages">
        <div class="h6-primary mb-1">{{ lang.name }}</div>
        <div class="w-full h-3 rounded bg-[var(--cl-gray-900)] flex">
          <div
            class="h-3 rounded"
            [ngStyle]="{ width: lang.level + '%', background: 'var(--clr-secondary)' }"
          ></div>
        </div>
      </div>
    </div>
    <hr class="border-t border-gray-400 mb-4" />
  `
})
export class SidebarLanguagesComponent {
  @Input() languages: Language[] = [];
}
