import { IndexListScrollComponent } from './../index-list-scroll/index-list-scroll';

import { Component, OnInit, Input } from '@angular/core';
import { IndexListNavService } from './nav.service';

@Component({
    selector: 'index-list-nav',
    templateUrl: 'index-list-nav.html',
    styleUrls: ['./index-list-nav.scss']
})
export class IndexListNavComponent implements OnInit {
    @Input() scroll: IndexListScrollComponent;
    constructor(
        public nav: IndexListNavService
    ) { }
    ngOnInit() {
        console.log(this.nav);
    }

    onNav(e: any, item: any) {
        this.scroll._scroll.scrollToElement(item.element, 300);
    }
}
