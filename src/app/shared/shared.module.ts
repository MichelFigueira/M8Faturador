import { TopPageComponent } from './components/top-page/top-page.component';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { DarkOnHoverDirective } from './directives/dark-on-hover.directive';

@NgModule({
  imports: [],
  declarations: [
    ToolbarComponent,
    CardComponent,
    TopPageComponent,
    DarkOnHoverDirective
  ],
  exports: [
    ToolbarComponent,
    CardComponent,
    TopPageComponent,
    DarkOnHoverDirective
  ]
})
export class SharedModule { }
