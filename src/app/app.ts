import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfDemoComponent } from "./pages/pdf-demo/pdf-demo.component";

@Component({
  selector: 'app-root',
  imports: [PdfDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-renderer');
}
