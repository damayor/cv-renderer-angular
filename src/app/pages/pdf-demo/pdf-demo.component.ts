import { Component, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel/main-panel.component';
import { CvData } from '@interfaces/CVData';
import { loadMockData } from 'src/app/services/loadMockCVData';
import { ActivatedRoute } from '@angular/router';
import { UserHeaderComponent } from 'src/app/components/main-panel/user-header/user-header.component';
import { environment } from '../../../environments/environment';
import { CVDataService } from 'src/app/services/cvData.service';

@Component({
  selector: 'pdf-demo',
  imports: [SidebarComponent, MainPanelComponent, UserHeaderComponent],
  template: `
    <div #pdfContent class="w-[210mm] h-full bg-white mx-auto">
      @if (!env.showPicture && cvData().occupation) {
        <!-- Float, so it is painted before the floats below -->
        <div class="flow-root">
          <user-header
            class="float-left w-full"
            [role]="cvData().occupation.value"
            [userData]="cvData().contact"
            [links]="cvData().links"
          ></user-header>
        </div>
      }
      <div class="flow-root" [class]="dividerClass">
        @if (env.showPicture && cvData().occupation) {
          <user-header
            class="float-right clear-right w-[calc(100%-16rem)]"
            [role]="cvData().occupation.value"
            [userData]="cvData().contact"
            [links]="cvData().links"
          ></user-header>
        }
        <sidebar class="float-left clear-left" part="top" [cvData]="cvData()"></sidebar>
        <main-panel class="float-right clear-right w-[calc(100%-16rem)] bg-white" [cvData]="cvData()"></main-panel>
        <sidebar class="float-left clear-left" part="bottom" [cvData]="cvData()"></sidebar>
      </div>
    </div>
  `,
  styles: [``]
})
export class PdfDemoComponent {
  readonly env = environment;
  // Vertical sidebar divider as a background (no positioned element needed): 1px wide, 90% high, at the right edge of the 16rem sidebar.
  readonly dividerClass = '[background:linear-gradient(var(--color-sidebar-divider),var(--color-sidebar-divider))_calc(16rem-1px)_1rem/1px_90%_no-repeat]';

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
