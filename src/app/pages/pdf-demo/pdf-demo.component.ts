import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SidebarComponent } from '../../components/sidebar.component';
import { MainPanelComponent } from '../../components/main-panel.component';
import { SectionComponent } from '../../components/section.component';

@Component({
  selector: 'app-pdf-demo',
  standalone: true,
  imports: [SidebarComponent, MainPanelComponent],
  template: `
    <div class="flex flex-row w-[210mm] h-[297mm] bg-gray-100 border border-gray-300" id="pdf-content">
      <app-sidebar></app-sidebar>
      <app-main-panel></app-main-panel>
    </div>
    <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded" (click)="exportPDF()">Export as PDF</button>
  `,
  styles: [``]
})
export class PdfDemoComponent {
  exportPDF() {
    const data = document.getElementById('pdf-content');
    if (!data) return;
    html2canvas(data).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv-demo.pdf');
    });
  }
}
