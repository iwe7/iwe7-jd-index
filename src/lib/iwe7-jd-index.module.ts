import { JdSearchComponent } from './jd-search/jd-search';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7JdIndexComponent } from './iwe7-jd-index.component';
import { JdSearchContainerComponent, JdSearchLayoutComponent, JdSearchViewComponent, JdSearchThemeDirective } from './jd-search/index';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JdFloorComponent } from './jd-floor/jd-floor';
import { JdFloorItemComponent } from './jd-floor-item/jd-floor-item';
import { JdFloorTitleComponent } from './jd-floor-title/jd-floor-title';
import { JdItemComponent } from './jd-item/jd-item';
import { JdNewsComponent } from './jd-news/jd-news';
import { JdGridComponent } from './jd-grid/jd-grid';
import { JdBoxComponent } from './jd-box/jd-box';


import { Iwe7SquareModule } from 'iwe7-square';
import { JdSwiperComponent } from './jd-swiper/jd-swiper';
import { JdTipComponent } from './jd-tip/jd-tip';
import { JdHeaderComponent } from './jd-header/jd-header';
import { JdFooterComponent } from './jd-footer/jd-footer';
import { JdHotsComponent } from './jd-hots/jd-hots';
import { JdToTopComponent } from './jd-to-top/jd-to-top';

export const JdComponents = [
  Iwe7JdIndexComponent,
  JdSearchContainerComponent,
  JdSearchLayoutComponent,
  JdSearchViewComponent,
  JdSearchComponent,
  JdSearchThemeDirective,
  JdFloorComponent,
  JdFloorItemComponent,
  JdFloorTitleComponent,
  JdItemComponent,
  JdNewsComponent,
  JdGridComponent,
  JdSwiperComponent,
  JdBoxComponent,
  JdTipComponent,
  JdHeaderComponent,
  JdFooterComponent,
  JdHotsComponent,
  JdToTopComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    Iwe7SquareModule
  ],
  declarations: [...JdComponents],
  exports: [Iwe7JdIndexComponent, JdSearchComponent]
})
export class Iwe7JdIndexModule { }
