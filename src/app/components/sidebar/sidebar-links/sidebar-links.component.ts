import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-links',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-links.component.html'
})
export class SidebarLinksComponent {
  @Input() links: { label: string, url: string }[] = [];
}
