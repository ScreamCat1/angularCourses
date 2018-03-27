import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  getItem(name: string): string {
    return localStorage.getItem(name);
  }

  removeItem(name: string): void {
    localStorage.removeItem(name);
  }

  setItem(name: string, value): void {
    localStorage.setItem(name, value);
  }
}
