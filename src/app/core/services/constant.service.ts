import { InjectionToken } from '@angular/core';

export const CONSTANT_SERVICE = new InjectionToken<CONST>('constant.service');

export interface CONST {
  App: string;
  Ver: string;
}

export const ConstantValue = {
  App: 'TaskManager',
  Ver: '1.0'
};
