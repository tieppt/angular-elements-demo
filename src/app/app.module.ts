import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  entryComponents: [SwitchComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(private inj: Injector) {
    const Switch = createCustomElement(SwitchComponent, {
      injector: inj
    });

    customElements.define('app-switch', Switch);
  }
  ngDoBootstrap() {}
}
