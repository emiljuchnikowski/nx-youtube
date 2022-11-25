import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedAngularService } from '@test-nx/shared/angular';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [SharedAngularService],
  bootstrap: [AppComponent],
})
export class AppModule {}
