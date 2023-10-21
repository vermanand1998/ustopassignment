import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { RoundStatusComponent } from './round-status/round-status.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssessmentOnlyComponent } from './assessment-only/assessment-only.component';
import { AssessmentMyComponent } from './assessment-my/assessment-my.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyLibraryComponent,
    RoundStatusComponent,
    AssessmentComponent,
    AssessmentOnlyComponent,
    AssessmentMyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatDialogModule,
    MdbModalModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
