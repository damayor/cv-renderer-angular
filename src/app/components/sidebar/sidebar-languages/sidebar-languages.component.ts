import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '@interfaces/CVData';

@Component({
  selector: 'sidebar-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-languages.component.html'
})
export class SidebarLanguagesComponent {
  languages = input.required<Language[]>();
}
