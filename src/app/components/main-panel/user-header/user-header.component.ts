import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between py-8">
      <!-- Left: Name and Role -->
      <div class="flex flex-col">
        <div class="text-5xl font-bold text-gray-800 font-ubuntu-bold leading-tight">{{ name }}</div>
        <div class="text-xl font-ubuntu-bold text-yellow-700 mt-2 tracking-wide">{{ role }}</div>
      </div>
      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-2 min-w-[260px]">
        <div class="flex items-center gap-2 text-gray-700">
          <span class="material-icons text-yellow-700">location_on</span>
          <span>{{ location }}</span>
        </div>
        <div class="flex items-center gap-2 text-gray-700 border-t border-gray-200 pt-2">
          <span class="material-icons text-yellow-700">call</span>
          <span>{{ phone }}</span>
        </div>
        <div class="flex items-center gap-2 text-gray-700 border-t border-gray-200 pt-2">
          <span class="material-icons text-yellow-700">mail</span>
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
