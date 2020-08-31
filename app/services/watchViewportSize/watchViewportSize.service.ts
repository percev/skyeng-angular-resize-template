import { Injectable, Inject } from '@angular/core';
import { Subject, fromEvent, Subscription } from 'rxjs';
import { debounceTime  } from 'rxjs/operators';

import { CONFIG } from './../../app.module';

@Injectable()
export class watchViewportSize {
  private currentWidth: string;

  private subscription: Subscription;

  public eventChanged = new Subject<string>();
  
  constructor(@Inject('windowObject') private window: Window){
    this.setWidth(window.innerWidth);

    const event = fromEvent(window, 'resize');

    this.subscription = event
    .pipe(debounceTime(100))
    .subscribe((event) => {
      this.setWidth(event.target.innerWidth);
      this.eventChanged.next(this.getWidth());
    })
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public setWidth(width: number): void {
    if (width < CONFIG.medium) {
      this.currentWidth = 'small';
    }
    else if (CONFIG.medium <= width && width < CONFIG.large) {
        this.currentWidth = 'medium';
    }
    else {
      this.currentWidth = 'large';
    }
  }
      
  public getWidth(): string { 
      return this.currentWidth;
  }
}