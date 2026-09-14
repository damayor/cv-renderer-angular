import { Component, input } from '@angular/core';
import { Contact, SectionTitles } from '@interfaces/CVData';

@Component({
  selector: 'personal-details',
  imports: [],
  templateUrl: './personal-details.component.html',
})
export class PersonalDetailsComponent {

  cvPersonalDetailsData = input.required<Contact>();
  titles = input.required<SectionTitles>();

}
