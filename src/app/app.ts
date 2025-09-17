import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SheetA4Component } from "./pages/SheetA4/SheetA4.component";
import { PdfDemoComponent } from "./pages/pdf-demo/pdf-demo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, SheetA4Component, PdfDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-renderer');
}
