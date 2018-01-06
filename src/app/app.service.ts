import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  curentCode: string;

  constructor() {
  }

  setCode(code: string) {
    this.curentCode = code;
  }

  getCode(): string {
    return this.curentCode;
  }

}
