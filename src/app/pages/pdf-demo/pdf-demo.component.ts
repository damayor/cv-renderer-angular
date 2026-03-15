import { Component, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel/main-panel.component';
import { CvData } from '@interfaces/CVData';
import { loadMockData } from 'src/app/services/loadMockCVData';
import { ActivatedRoute } from '@angular/router';
import { UserHeaderComponent } from 'src/app/components/main-panel/user-header/user-header.component';
import { CVDataService } from 'src/app/services/cvData.service';

@Component({
  selector: 'pdf-demo',
  imports: [SidebarComponent, MainPanelComponent, UserHeaderComponent],
  template: `
    <div #pdfContent class="w-[210mm] bg-white mx-auto">
      <div class="flex flex-row">
        <sidebar [cvData]="cvData()"></sidebar>
        <main-panel class="bg-white" [cvData]="cvData()" [contact]="cvData().contact" ></main-panel>
      </div>
     
    </div>
  `,
  styles: [``]
})
export class PdfDemoComponent {

  constructor(
    private CVDataService: CVDataService
  ) {}

  occupation = inject(ActivatedRoute).snapshot.queryParamMap.get('occupation') ?? undefined;
  lang = inject(ActivatedRoute).snapshot.queryParamMap.get('lang') ?? undefined;

  @ViewChild('pdfContent', { static: false }) pdfContentRef!: ElementRef<HTMLDivElement>;

  cvData = signal<CvData>({} as CvData)

  async ngOnInit() {
    const loadedData = await loadMockData(this.lang, this.occupation);
    console.log('query loaded :', this.occupation, this.lang);
    if(!loadedData) {
      console.error('No data loaded');
      return;
    }
    else{
      this.setThemeColors(loadedData.colors )
      this.renderUploadedCV(loadedData)
    }
  }

  renderUploadedCV(loadedData : CvData) {
    this.CVDataService.loadJsonCV(loadedData).subscribe({
      next: (data : CvData) => {
        console.log('CV loaded!!!:', data);
        this.cvData.set(data);
      },
      error: (err) => console.error('Suscribe error:', err)
    });
  }

  setThemeColors(colors: Record<string, string>) {
    console.log('trying to set theme')
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--clr-${key}`, value);
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }
}
