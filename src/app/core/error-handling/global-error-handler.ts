import { Service, ErrorHandler } from '@angular/core';

@Service()
export class GlobalErrorHandler extends ErrorHandler {
  override handleError(error: any): void {
    console.error(error);
  }
}
