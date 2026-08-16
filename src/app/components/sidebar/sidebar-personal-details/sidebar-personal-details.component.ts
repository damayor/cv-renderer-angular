import { Component, input } from '@angular/core';
import { Contact } from '@interfaces/CVData';

@Component({
  selector: 'sidebar-personal-details',
  imports: [],
  templateUrl: './sidebar-personal-details.component.html',
})
export class SidebarPersonalDetailsComponent {

  cvPersonalDetailsData = input.required<Contact>();

}
