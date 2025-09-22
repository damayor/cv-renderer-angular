import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-links',
  standalone: true,
  imports: [],
  template: `
  <ng-container>
    <div class="sidebar-heading">Links</div>
    <div class="sidebar-block-content">
      <ul class="links-container">
        @for (link of links; track $index) {
          <li class="mb-2">
            <a [href]="link.url" target="_blank" class="link-url-font">{{ link.label }}</a>
          </li>
        }
      </ul>
      </div>
  </ng-container>
  `
})
export class SidebarLinksComponent {
  @Input() links: { label: string, url: string }[] = [];
}
