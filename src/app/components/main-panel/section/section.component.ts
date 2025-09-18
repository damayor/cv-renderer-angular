import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="mb-8">
      <h2 class="h2-primary">{{ title }}</h2>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</p>
    </div>
  `
})
export class SectionComponent {
  @Input() title: string = '';
}
