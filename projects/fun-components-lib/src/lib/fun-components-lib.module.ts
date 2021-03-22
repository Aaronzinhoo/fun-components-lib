import {NgModule} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';

import {FunComponentsLibComponent} from './fun-components-lib.component';

import {HideSupriseComponent} from './hide-suprise/hide-suprise.component';
import {SupriseComponent} from './suprise/suprise.component';

@NgModule({
  declarations: [
    FunComponentsLibComponent,
    HideSupriseComponent,
    SupriseComponent,
  ],
  imports: [MatSlideToggleModule, MatChipsModule],
  exports: [FunComponentsLibComponent],
})
export class FunComponentsLibModule {}
