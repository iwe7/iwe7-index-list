import { IndexListNavService } from './../index-list-nav/nav.service';
import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[indexListAnchor]' })
export class IndexListAnchorDirective implements OnInit {
    @Input() indexListAnchor: string;

    constructor(
        public indexListNavService: IndexListNavService,
        public ele: ElementRef
    ) { }
    ngOnInit() {
        this.indexListNavService.set(this.ele.nativeElement, this.indexListAnchor);
    }
}
