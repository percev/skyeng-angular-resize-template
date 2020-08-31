import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { watchViewportSize } from './../../services/watchViewportSize/watchViewportSize.service';

@Directive({ selector: '[ifViewportSize]', providers: [ watchViewportSize ] })
export class ViewportSizeDirective {

    private elWidth: string;
    private currentWidth: string;
    private subscription: Subscription;
     
    constructor(private templateRef: TemplateRef<any>, 
                private viewContainer: ViewContainerRef,
                private watchViewportSize: watchViewportSize) {
                  this.currentWidth = this.watchViewportSize.getWidth();
                  this.subscription = this.watchViewportSize.eventChanged
                  .subscribe(
                    (size: string) => {
                      if (size !== this.currentWidth) {
                        this.currentWidth = size;
                        this.checkVisible();
                      }   
                    }
                  )
                }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
     
    @Input() set ifViewportSize(size: string) {
      this.elWidth = size;
      this.checkVisible();
    }

    private checkVisible(): void {
      if (this.elWidth === this.currentWidth) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      } 
    }
}