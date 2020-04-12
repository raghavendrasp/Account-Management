import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountComponent } from './account/account.component';
import { RateComponent } from './rate/rate.component';
import { LeoCatwComponent } from './leo-catw/leo-catw.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { WbsComponent } from './wbs/wbs.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { UploadLeoCatwActualsComponent } from './leo-catw/upload-leo-catw-actuals/upload-leo-catw-actuals.component';
import { LeoCatwGlobalHoursComponent } from './leo-catw/leo-catw-global-hours/leo-catw-global-hours.component';
import { ManageJobTypeComponent } from './rate/manage-job-type/manage-job-type.component';
import { ManageJobComponent } from './rate/manage-job/manage-job.component';
import { ColaYearComponent } from './rate/cola-year/cola-year.component';
import { ColaFutureBillingRateComponent } from './rate/cola-future-billing-rate/cola-future-billing-rate.component';
import { ColaBillingRateComponent } from './rate/cola-billing-rate/cola-billing-rate.component';
import { AccountCostRateComponent } from './rate/account-cost-rate/account-cost-rate.component';
import { SearchComponent } from './search/search.component';
import { AccountService } from './service/account.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountComponent,
    RateComponent,
    LeoCatwComponent,
    ExchangeRatesComponent,
    WbsComponent,
    RoleComponent,
    UserComponent,
    ReportComponent,
    HomeComponent,
    SignInUpComponent,
    UploadLeoCatwActualsComponent,
    LeoCatwGlobalHoursComponent,
    ManageJobTypeComponent,
    ManageJobComponent,
    ColaYearComponent,
    ColaFutureBillingRateComponent,
    ColaBillingRateComponent,
    AccountCostRateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
