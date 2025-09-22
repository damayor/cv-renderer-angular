import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-header',
  standalone: true,
    imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between py-4">
      <!-- Left: Name and Role -->
      <div class="flex flex-col">
        <div class="h1-cv-name">{{ name }}</div>
        <div class="h3-occupation">{{ role }}</div>
      </div>
      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-2 user-header__contact-info ">
        <div class="flex items-center gap-2">
          <span style="color: var(--clr-secondary);"> <span class="icon-location2"></span></span>
          <span>{{ location }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-secondary);"> <span class="icon-phone"></span></span>
          <span>{{ phone }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-secondary);"> <span class="icon-envelop"></span></span>
          <span>{{ email }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class UserHeaderComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() location: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
}
