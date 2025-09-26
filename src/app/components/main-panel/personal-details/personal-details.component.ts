import { Component, input } from '@angular/core';
import { Contact } from '@interfaces/CVData';

@Component({
  selector: 'personal-details',
  imports: [],
  templateUrl: './personal-details.component.html',
})
export class PersonalDetailsComponent {

  cvPersonalDetailsData = input.required<Contact>();
  
}
