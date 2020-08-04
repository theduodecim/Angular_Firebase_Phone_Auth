import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';


const routes: Routes = [
  { path: '', component: PhoneNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
