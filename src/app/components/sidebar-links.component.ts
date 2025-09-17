import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-lg font-bold mb-2" style="color: gold;">Links</h2>
    <ul class="mb-2">
      <li *ngFor="let link of links">
        <a [href]="link.url" target="_blank" class="text-blue-500 underline">{{ link.label }}</a>
      </li>
    </ul>
    <hr class="border-t border-gray-400 mb-4" />
  `
})
export class SidebarLinksComponent {
  @Input() links: { label: string, url: string }[] = [];
}
