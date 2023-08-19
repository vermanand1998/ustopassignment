import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { RoundStatusComponent } from './round-status/round-status.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentMyComponent } from './assessment-my/assessment-my.component';
import { AssessmentOnlyComponent } from './assessment-only/assessment-only.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-library', component: MyLibraryComponent },
  { path: 'round-status', component: RoundStatusComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'assessment-only', component: AssessmentOnlyComponent },
  { path: 'assessment-my', component: AssessmentMyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
