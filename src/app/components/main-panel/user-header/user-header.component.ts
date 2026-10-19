import { Component, computed, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Contact } from '@interfaces/CVData';
import { HeaderLinks, LinkItem } from "../header-links/header-links.component";

@Component({
  selector: 'user-header',
  standalone: true,
  imports: [CommonModule, HeaderLinks],
  template: `
    <div class="flex items-center p-5 pb-0 gap-x-2" [class]="env.showPicture ? 'justify-between' : 'justify-around'">
      <!-- Left: Name und Role -->
      <div class="flex flex-col ">
        <div class="text-4xl  uppercase" style="color: var(--clr-primary)">{{userData().fullname }}</div>
        <div class="h3-occupation">{{role() }}</div>
      </div>
      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-2 user-header__contact-info" [class.flex-[44%]]="env.showPicture">
      
        <div class="flex items-center gap-2 ">
          <span style="color: var(--clr-primary);"><svg class="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
          <span>{{userData().phone }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-primary);"><svg class="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
          <span>{{userData().email }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-primary);"><svg class="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <span>{{location() }}</span>
        </div>

      </div>

    </div>
    <div class="px-5 pt-3 flex justify-center">
      <header-links [links]="links()"></header-links>
    </div>
  `,
  styles: [``]
})
export class UserHeaderComponent {
  userData = input.required<Contact>({});
  role = input.required<string>({});
  links = input<LinkItem[]>([]);

  readonly env = environment;

  location = computed(() =>  environment.cvScope === 'DE' ? this.userData().address : this.userData().location )

}
