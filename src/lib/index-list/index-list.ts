import { IndexListNavService } from './../index-list-nav/nav.service';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';

@Component({
    selector: 'index-list',
    templateUrl: 'index-list.html',
    exportAs: 'indexList',
    styleUrls: ['./index-list.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [IndexListNavService]
})
export class IndexListComponent { }
