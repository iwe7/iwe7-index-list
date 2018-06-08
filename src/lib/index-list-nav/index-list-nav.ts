import { IndexListScrollComponent } from './../index-list-scroll/index-list-scroll';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Component, Input, ChangeDetectorRef, Injector, ElementRef } from '@angular/core';
import { IndexListNavService } from './nav.service';
import { BetterScrollCore } from 'iwe7-better-scroll';
import { Iwe7CoreComponent } from 'iwe7-core';
import { switchMap, takeUntil } from 'rxjs/operators';
@Component({
    selector: 'index-list-nav',
    templateUrl: 'index-list-nav.html',
    styleUrls: ['./index-list-nav.scss']
})
export class IndexListNavComponent extends Iwe7CoreComponent {
    _scroll: BetterScrollCore;
    currentIndex: BehaviorSubject<number> = new BehaviorSubject(0);
    _indexListScrollComponent: IndexListScrollComponent;

    scrollFn: any = (res: any) => {
        this.setCyc('scroll', res, true);
    }

    touchstartFn: any = (res: any) => {
        this.setCyc('touchstart', res, true);
    }

    @Input()
    set scroll(val: IndexListScrollComponent) {
        if (val) {
            val.scrollInstance.subscribe(res => {
                this._scroll = res;
                this._scroll.on('scroll', this.scrollFn);
                this._scroll.on('touchstart', this.touchstartFn);
            });
            this._indexListScrollComponent = val;
            fromEvent(this._indexListScrollComponent.ele.nativeElement, 'touchstart').subscribe(this.touchstartFn);
        }
    }
    constructor(
        public nav: IndexListNavService,
        public cd: ChangeDetectorRef,
        public injector: Injector,
        public ele: ElementRef
    ) {
        super(injector);
        // 点击导航时
        this.getCyc('touchstart').pipe(
            switchMap(res => {
                return this.getCyc('scroll').pipe(
                    takeUntil(this.getCyc('onNav'))
                );
            })
        ).subscribe(res => {
            const diff = this.nav.getDiff(res.y);
            this.currentIndex.next(diff.currentIndex);
        });
    }

    scrollToIndex(index: number) {
        if (!index && index !== 0) {
            return;
        }
        if (index < 0) {
            index = 0;
        } else if (index > this.nav.size() - 2) {
            index = this.nav.size() - 2;
        }
        const item = this.nav.getIndex(index);
        this._scroll.scrollToElement(item.element, 300);
    }

    onNav(e: MouseEvent, item: any, index: number) {
        e.preventDefault();
        this.currentIndex.next(index);
        this._scroll.scrollToElement(item.element, 300);
        this.setCyc('onNav', e, true);
    }

}
