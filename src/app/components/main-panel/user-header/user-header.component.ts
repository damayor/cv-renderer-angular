import { Component, computed, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Contact } from '@interfaces/CVData';

@Component({
  selector: 'user-header',
  standalone: true,
    imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between p-5 pb-0">
      <!-- Left: Name und Role -->
      <div class="flex flex-col">
        <div class="text-4xl  uppercase" style="color: var(--clr-primary)">{{userData().fullname }}</div>
        <div class="h3-occupation">{{role() }}</div>
      </div>
      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-2 user-header__contact-info ">
      
        <div class="flex items-center gap-2 ">
          <span style="color: var(--clr-secondary);"> <span class="icon-phone"></span></span>
          <span>{{userData().phone }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-secondary);"> <span class="icon-envelop"></span></span>
          <span>{{userData().email }}</span>
        </div>
        <div class="flex items-center gap-2 border-t border-gray-200 pt-2">
          <span style="color: var(--clr-secondary);"> <span class="icon-location2"></span></span>
          <span>{{location() }}</span>
        </div>
        
      </div>
    </div>
  `,
  styles: [``]
})
export class UserHeaderComponent {
  userData = input.required<Contact>({});
  role = input.required<string>({});

  location = computed(() =>  environment.cvScope === 'DE' ? this.userData().address : this.userData().location )

}
