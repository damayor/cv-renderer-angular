import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-links',
  standalone: true,
  imports: [],
  template: `
  <ng-container>
    <div class="sidebar-heading">Links</div>
    <div class="sidebar-block-content">
      <div class="links-container flex flex-row w-full gap-5">
        @for (link of links; track $index) {
          <div>
            <a [href]="link.url" target="_blank" class="link-url-font">{{ link.label }}</a>
        </div>
        }
      </div>
    </div>
  </ng-container>
  `
})
export class SidebarLinksComponent {
  @Input() links: { label: string, url: string }[] = [];
}
