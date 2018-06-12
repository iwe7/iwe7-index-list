import { OnInit, Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
    selector: '[listNabItem]'
})
export class ListNavItemDirective implements OnInit {
    @Input() index: number = 0;
    _current: number;
    @Input()
    set current(val: Observable<number>) {
        val.subscribe(res => {
            if (this._current !== res) {
                this._current = res;
                if (this._current === this.index) {
                    this.render.addClass(this.ele.nativeElement, 'active');
                } else {
                    this.render.removeClass(this.ele.nativeElement, 'active');
                }
            }
        });
    }
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }

    ngOnInit() { }
}
