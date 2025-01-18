import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // Siempre va en en los import los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
