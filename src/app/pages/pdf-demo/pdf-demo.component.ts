import { Component, ElementRef, Renderer2, signal, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel/main-panel.component';
import { CvData } from '@interfaces/CVData';
import { loadMockData } from 'src/app/services/loadCVData';

@Component({
  selector: 'pdf-demo',
  standalone: true,
  imports: [SidebarComponent, MainPanelComponent],
  template: `
    <div #pdfContent class="flex flex-row w-[210mm] bg-gray-100 mx-auto">
      <sidebar [cvData]="cvData()"></sidebar>
      <main-panel [cvData]="cvData()" [contact]="cvData().contact" ></main-panel>
    </div>
  `,
  styles: [``]
})
export class PdfDemoComponent {

  constructor(private renderer: Renderer2) {}


  @ViewChild('pdfContent', { static: false }) pdfContentRef!: ElementRef<HTMLDivElement>;



  cvData = signal<CvData>({} as CvData);

  async ngOnInit() {
    const loadedData = await loadMockData();
    console.log('Loaded CV data:', loadedData);
    if(!loadedData) {
      console.error('No data loaded');
      return;
    }
    else{
      this.setThemeColors(loadedData.colors )

      this.cvData.set(loadedData);
    }

  }

  setThemeColors(colors: Record<string, string>) {
    console.log('trying to set theme')
    Object.entries(colors).forEach(([key, value]) => {
      // console.log(`setting --clr-${key} : ${value}`)
      document.documentElement.style.setProperty(`--clr-${key}`, value);
    });
  }
}
