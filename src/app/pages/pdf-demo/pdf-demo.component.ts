import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel/main-panel.component';

@Component({
  selector: 'pdf-demo',
  standalone: true,
  imports: [SidebarComponent, MainPanelComponent],
  template: `
    <button class="mt-4 px-4 py-2 hover:bg-blue-200 active:bg-amber-500 bg-blue-600 text-white rounded" (click)="exportPDF()">Export as PDF</button>
    <div #pdfContent class="flex flex-row w-[210mm] h-[297mm] bg-gray-100 border border-gray-300 shadow-lg mx-auto">
      <sidebar></sidebar>
      <main-panel></main-panel>
    </div>
  `,
  styles: [``]
})
export class PdfDemoComponent {
  @ViewChild('pdfContent', { static: false }) pdfContentRef!: ElementRef<HTMLDivElement>;

  exportPDF() {
    const data = this.pdfContentRef?.nativeElement;
    if (!data) {
      console.error('PDF content element not found');
      return;
    }
    else{
      console.log('PDF content element starting to be exported');
      try {
            html2canvas(data).then(canvas => {
              console.log('Canvas created, generating PDF...');
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF('p', 'mm', 'a4');
              const imgProps = pdf.getImageProperties(imgData);
              const pdfWidth = pdf.internal.pageSize.getWidth();
              const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
              pdf.save('cv-demo.pdf');
            }).catch(err => {
            console.error('html2canvas error:', err);
          });
        } catch (err) {
          console.error('html2canvas exception:', err);
      }
    }
   
  }
}
