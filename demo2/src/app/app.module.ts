import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { ContentComponent } from './content/content.component';
import { RightsideComponent } from './rightside/rightside.component';
import { FooterComponent } from './footer/footer.component';
import { JobsComponent } from './jobs/jobs.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { TutorilsComponent } from './tutorils/tutorils.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AdvertisingComponent,
    LeftsideComponent,
    ContentComponent,
    RightsideComponent,
    FooterComponent,
    JobsComponent,
    ScholarshipComponent,
    TutorilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
