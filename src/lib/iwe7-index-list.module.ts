import { IndexListAnchorDirective } from './index-list-anchor/index-list-anchor';
import { IndexListScrollComponent } from './index-list-scroll/index-list-scroll';
import { IndexListNavComponent } from './index-list-nav/index-list-nav';
import { IndexListComponent } from './index-list/index-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {} from 'iwe7-better-scroll';

export const IndexListComponents = [
  IndexListComponent,
  IndexListNavComponent,
  IndexListScrollComponent,
  IndexListAnchorDirective
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...IndexListComponents
  ],
  exports: [
    ...IndexListComponents
  ]
})
export class Iwe7IndexListModule { }
