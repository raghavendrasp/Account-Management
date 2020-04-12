import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AccountService } from "../service/account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  users: any;
  accounts: Account[];
  public api: string;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  getAccounts() {
    this.accountService.getAccounts().subscribe((data: any) => {
      this.accounts = data;
      console.log("accounts response : " + data);
    });
  }

  testApi(api) {
    if (api.value != null) {
      this.accountService.testApi(api.value).subscribe((response) => {
        console.log("sample api response : " + JSON.stringify(response));
        this.users = JSON.stringify(response);
      });
    } else {
      alert("api is empty");
    }
  }
}
