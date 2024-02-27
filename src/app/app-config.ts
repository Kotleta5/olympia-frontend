import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RuntimeConfiguration } from "./types/runtime-config";

@Injectable()
export class AppConfig {
  private rcfg = {} as RuntimeConfiguration;

  constructor(private http: HttpClient) {}

  public getConfig(): RuntimeConfiguration {
    return this.rcfg;
  }

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
      .get<{rcfg: RuntimeConfiguration}>('assets/config/config.json')
      .subscribe({
        next: (data) => {
          this.rcfg = data.rcfg;
          resolve(true);
        },
        error: (err) =>  reject(err),
      });
    });
  }
}

