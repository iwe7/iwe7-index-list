import { Component, ElementRef, Injector, } from '@angular/core';
import { BetterScrollDirective, BetterManagerService } from 'iwe7-better-scroll';

@Component({
    selector: 'index-list-scroll',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./index-list-scroll.scss'],
    exportAs: 'indexListScroll'
})

export class IndexListScrollComponent extends BetterScrollDirective {
    constructor(ele: ElementRef, injector: Injector, betterManagerService: BetterManagerService) {
        super(ele, injector, betterManagerService);
        this.click = true;
        this.probeType = 3;
        this.getCyc('betterScrollInited').subscribe(res => {
            this.updateStyle();
        });
    }

    updateStyle() {
        const element: HTMLElement = this.ele.nativeElement;
        const children = element.children;
        let total = 0;
        for (let i = 0; i < children.length; i++) {
            const child: HTMLElement = children[i] as HTMLElement;
            if (this.options.scrollX) {
                total += child.clientWidth;
            } else {
                total += child.clientHeight;
            }
        }
        if (this.options.scrollX) {
            this.render.setStyle(this.ele.nativeElement, 'width', total + 'px');
        } else {
            this.render.setStyle(this.ele.nativeElement, 'height', total + 'px');
        }
        this._scroll.refresh();
    }
}
