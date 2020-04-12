import { HttpHeaders } from "@angular/common/http";

export class HttpServiceConstant {
  public static header;
  public static get baseURL(): string {
    return "http://localhost:4200/api";
  }
  public static get headers(): Headers {
    this.header = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.header;
  }
}
