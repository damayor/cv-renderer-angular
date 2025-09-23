import { Component, input } from '@angular/core';

@Component({
  selector: 'sidebar-about-me',
  imports: [],
  templateUrl: './sidebar-about-me.component.html',
})
export class SidebarAboutMeComponent { 
  
  aboutMeText = input.required<string>();
}
