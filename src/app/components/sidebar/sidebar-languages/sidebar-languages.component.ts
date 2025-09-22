import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../../assets/cv-data/frontend.mock';

@Component({
  selector: 'sidebar-languages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container>
      <div class="sidebar-heading text-left">Languages</div>
      <div class="sidebar-block-content flex flex-col gap-4 mb-2">
        @for (lang of languages; track $index) {
          <div class="flex flex-col w-full">
            <div class="h6-primary mb-1 languages-font">{{ lang.name }}</div>
            <div class="w-full h-3 rounded bg-[var(--clr-gray-900)] flex">
              <div
                class="h-3 rounded"
                [ngStyle]="{ width: lang.level + '%', background: 'var(--clr-secondary)' }"
              ></div>
            </div>
          </div>
        }
      </div>
    </ng-container>
  `
})
export class SidebarLanguagesComponent {
  @Input() languages: Language[] = [];
}
