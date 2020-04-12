import { Component, OnInit } from "@angular/core";
import { AccountService } from "../service/account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  users: any;
  accounts: Account[];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  getAccounts() {
    this.accountService.getAccounts().subscribe((response) => {
      this.accounts = response;
      console.log("accounts response : "+response);
    });
  }

  getUser() {
    this.accountService.getSampleUser().subscribe((response) => {
      console.log("sample api response : " + response);
      this.users = response;
    });
  }
}
