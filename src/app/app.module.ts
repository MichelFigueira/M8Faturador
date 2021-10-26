import { FaturamentoModule } from './faturamento/faturamento.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { EstoqueModule } from './estoque/estoque.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EstoqueModule,
    FaturamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
