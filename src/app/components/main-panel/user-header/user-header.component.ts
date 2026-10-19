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
          <span style="color: var(--clr-primary);"> <span class="icon-phone"></span></span>
          <span>{{userData().phone }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-primary);"> <span class="icon-envelop"></span></span>
          <span>{{userData().email }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-primary);"> <span class="icon-location2"></span></span>
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
