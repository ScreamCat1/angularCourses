import { Injectable } from '@angular/core';

interface ConfigOptions {
  id?: number;
  login?: string;
  email?: string;
}

@Injectable()
export class ConfigOptionsService {
  private config: ConfigOptions = {};

  constructor() { }

  get id(): number {
    return this.config.id;
  }

  get login(): string {
    return this.config.login;
  }

  get email(): string {
    return this.config.email;
  }

  set id(i: number) {
    this.config.id = i;
  }

  set login(l: string) {
    this.config.login = l;
  }

  set email(e: string) {
    this.config.email = e;
  }
}
