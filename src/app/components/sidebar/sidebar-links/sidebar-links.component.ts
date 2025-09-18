import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-links',
  standalone: true,
  imports: [],
  template: `
  <h2 class="h2-primary">Links</h2>
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
