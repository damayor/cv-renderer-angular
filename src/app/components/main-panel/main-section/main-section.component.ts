import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MainSectionEntry {
  enterprise: string;
  role: string;
  location: string;
  start?: string;
  end?: string;
  skills: string[];

}

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule],
  // template: `
  //   <div class="mb-8 p-4 bg-white rounded shadow">
    //     <h2 class="h2-primary">{{ title }}</h2>
  //     <ng-container *ngFor="let entry of entries">
  //       <div class="mb-6">
  //         <div class="text-sm text-gray-700 mb-1">
  //           <span class="font-semibold">{{ entry.enterprise }}</span> &mdash; {{ entry.role }}
  //         </div>
  //         <div class="text-xs text-gray-500 mb-1">
  //           {{ entry.location }}
  //           <span *ngIf="entry.start"> | {{ entry.start }}</span>
  //           <span *ngIf="entry.end"> - {{ entry.end }}</span>
  //         </div>
  //         <div class="flex flex-wrap gap-2 mt-2">
  //           <span *ngFor="let skill of entry.skills" class="bg-yellow-200 text-yellow-900 px-2 py-1 rounded text-xs">{{ skill }}</span>
  //         </div>
  //       </div>
  //     </ng-container>
  //   </div>
  // `
  styleUrls: ['./main-section.component.css'],
  template: `
    <div data-rbd-draggable-context-id="0" data-rbd-draggable-id="8da56ea0-1fd9-4da7-bdfd-9e13fc50f0d7"
              id="EMPLOYMENT-block" class="DraggableElement DraggableElement-sc-c1e580d4-0 jgSLlR"
              style="height: auto; width: auto;">
              <div left="0" scale="1.1687657430730478" class="BlockSection BlockSection-sc-cb010fcc-0 ilxAUx">
                  <!-- <div
                      class="View-sc-57b21346-0 heading-parent BlockItem-sc-b96fe92f-0 StyledBlockItem-sc-c1e580d4-12 dcFdIq cdQLsg eHzHNu">
                      <div summary="0" class="Text-sc-b3383982-0 heading-wrapper Heading-sc-81c94517-0 gXJpya fOqiJv">
                          <div class="Wrapper-sc-1c9d0e6e-0 jVbJRX heading click-to-edit-wrapper">WORK EXPERIENCE
                          </div>
                      </div>
                      <div class="View-sc-57b21346-0 BlockItems dcFdIq hozeqF">
                          <div
                              class="UnbreakableView StyledUnbreakableView-sc-c1e580d4-14 RxPtj iliEGp">
                              <div
                                  class="View-sc-57b21346-0 BlockInnerItem StyledBlockInnerItem-sc-c1e580d4-1 dcFdIq exTnCa rwynz">
                                  <div style="break-after: auto;">
                                      <div
                                          class="View-sc-57b21346-0 BlockNestedItem dcFdIq cLuNGH">
                                          <div
                                              class="View-sc-57b21346-0 LeftSide dcFdIq boEebh">
                                              <div
                                                  class="View-sc-57b21346-0 LeftSideChild StyledItemContainer-sc-6a1d40ef-0 dcFdIq eIhKmj">
                                                  <div class="BreakAvoidWrapper-sc-8a96861a-0 dnIEnb">
                                                      <div
                                                          class="done Wrapper-sc-1c9d0e6e-0 jVbJRX click-to-edit-wrapper SubHeader-Wrapper">
                                                          <div lineheight="14"
                                                              class="done Text-sc-b3383982-0 Heading-sc-81c94517-0 SubHeader gXJpya bRhXBK bueCwQ">
                                                              Universidad de los Andes, Bogotá, Colombia</div>
                                                      </div>
                                                      <div
                                                          class="Wrapper-sc-1c9d0e6e-0 jVbJRX click-to-edit-wrapper">
                                                          <div
                                                              class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 CityText gXJpya iLIuzV fFYPKN">
                                                              Bogotá</div>
                                                      </div>
                                                      <div
                                                          class="Wrapper-sc-1c9d0e6e-0 jVbJRX click-to-edit-wrapper">
                                                          <div
                                                              class="Text-sc Text-sc-81ef30b9-0 Text-sc-c8dfd5ab-0 year-text gXJpya iLIuzV jvKtUE">
                                                              2017</div>
                                                      </div>
                                                  </div>
                                                  <div
                                                      class="View-sc-57b21346-0 Decoration-sc-6a1d40ef-1 dcFdIq jayEgZ decoration-range">
                                                  </div>
                                              </div>
                                          </div>
                                          <div
                                              class="View-sc-57b21346-0 RightSide dcFdIq jpOqam">
                                              <div
                                                  class="View-sc-57b21346-0 RightSideChild StyledItemContainer-sc-6a1d40ef-0 role-wrapper dcFdIq efWUnc">
                                                  <div
                                                      class="Wrapper-sc-1c9d0e6e-0 jVbJRX click-to-edit-wrapper">
                                                      <div data-tooltip-content="Click to edit"
                                                          data-tooltip-id="false"
                                                          class="Text-sc-b3383982-0 Heading-sc-81c94517-0 SubHeader SubHeader--role gXJpya bRhXBK icgXEI">
                                                          Bachelor of Science in Systems and Computing
                                                          Engineering</div>
                                                  </div>
                                                  <div
                                                      class="Wrapper-sc-1c9d0e6e-0 jVbJRX click-to-edit-wrapper tasks-wrapper">
                                                      <div class="TextCont-sc-e8e7f7cf-2 hZJiBM">
                                                          <div
                                                              class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                              <div
                                                                  class="ParsedTextContainer-sc-20abf7ed-0 gikexY">
                                                                  <div
                                                                      class="UnbreakableView-sc-fd8e1ddb-0 RxPtj">
                                                                      <div
                                                                          class="View-sc-57b21346-0 ListItem-sc-6f850dd6-0 dcFdIq xygUV">
                                                                          <div
                                                                              class="View-sc-57b21346-0 Number-sc-e06f0e1f-1 dcFdIq eRcXiX bullet-point">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  •</div>
                                                                          </div>
                                                                          <div
                                                                              class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  <div class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV"
                                                                                      style="text-decoration: none; color: inherit; display: inline;">
                                                                                      Academic option in
                                                                                      Visual and Computing
                                                                                      Interaction</div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div
                                                                      class="UnbreakableView-sc-fd8e1ddb-0 RxPtj">
                                                                      <div
                                                                          class="View-sc-57b21346-0 ListItem-sc-6f850dd6-0 dcFdIq drQnZI">
                                                                          <div
                                                                              class="View-sc-57b21346-0 Number-sc-e06f0e1f-1 dcFdIq eRcXiX bullet-point">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  •</div>
                                                                          </div>
                                                                          <div
                                                                              class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  <div class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV"
                                                                                      style="text-decoration: none; color: inherit; display: inline;">
                                                                                      Research Monitor in
                                                                                      IMAGINE group</div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div
                                                                      class="UnbreakableView-sc-fd8e1ddb-0 RxPtj">
                                                                      <div
                                                                          class="View-sc-57b21346-0 ListItem-sc-6f850dd6-0 dcFdIq drQnZI">
                                                                          <div
                                                                              class="View-sc-57b21346-0 Number-sc-e06f0e1f-1 dcFdIq eRcXiX bullet-point">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  •</div>
                                                                          </div>
                                                                          <div
                                                                              class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                              <div
                                                                                  class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV">
                                                                                  <div class="Text-sc-b3383982-0 Text-sc-81ef30b9-0 gXJpya iLIuzV"
                                                                                      style="text-decoration: none; color: inherit; display: inline;">
                                                                                      Scholarship "Quiero
                                                                                      Estudiar" given to the
                                                                                      best national ICFES
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div
                                                      class="View-sc-57b21346-0 Decoration-sc-6a1d40ef-1 dcFdIq jayEgZ decoration-range">
                                                  </div>
                                              </div>
                                              <div class="Border-sc-e8e7f7cf-0 FHtfI decoration-border"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>


                      </div> -->
        <!-- </div> -->
      </div>
    </div>
  
  `
})
export class MainSectionComponent {
  @Input() title: string = '';
  @Input() entries: MainSectionEntry[] = [];
}
