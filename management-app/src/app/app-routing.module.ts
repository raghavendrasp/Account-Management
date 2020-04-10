import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { RateComponent } from "./rate/rate.component";
import { ReportComponent } from "./report/report.component";
import { RoleComponent } from "./role/role.component";
import { WbsComponent } from "./wbs/wbs.component";
import { LeoCatwComponent } from "./leo-catw/leo-catw.component";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { LeoCatwGlobalHoursComponent } from "./leo-catw/leo-catw-global-hours/leo-catw-global-hours.component";
import { UploadLeoCatwActualsComponent } from "./leo-catw/upload-leo-catw-actuals/upload-leo-catw-actuals.component";
import { ColaYearComponent } from "./rate/cola-year/cola-year.component";
import { ColaBillingRateComponent } from "./rate/cola-billing-rate/cola-billing-rate.component";
import { ManageJobComponent } from "./rate/manage-job/manage-job.component";
import { ManageJobTypeComponent } from "./rate/manage-job-type/manage-job-type.component";
import { AccountCostRateComponent } from "./rate/account-cost-rate/account-cost-rate.component";
import { ColaFutureBillingRateComponent } from './rate/cola-future-billing-rate/cola-future-billing-rate.component';

const routes: Routes = [
  { path: "account", component: AccountComponent },
  {
    path: "rate",
    component: RateComponent,
    children: [
      { path: "cola-year", component: ColaYearComponent },
      {
        path: "cola-future-billing-rate",
        component: ColaFutureBillingRateComponent,
      },
      { path: "cola-billing-rate", component: ColaBillingRateComponent },
      { path: "manage-job", component: ManageJobComponent },
      { path: "manage-job-type", component: ManageJobTypeComponent },
      { path: "account-cost-rate", component: AccountCostRateComponent },
    ],
  },
  { path: "report", component: ReportComponent },
  { path: "role", component: RoleComponent },
  { path: "wbs", component: WbsComponent },
  {
    path: "leo-catw",
    component: LeoCatwComponent,
    children: [
      { path: "leo-catw-global-hours", component: LeoCatwGlobalHoursComponent },
      {
        path: "upload-leo-catw-actuals",
        component: UploadLeoCatwActualsComponent,
      }
    ],
  },
  { path: "exchange-rate", component: ExchangeRatesComponent },
  { path: "user", component: UserComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
