import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IndexListNavService {
    map: Map<HTMLElement, any> = new Map();

    change: BehaviorSubject<any[]> = new BehaviorSubject([]);
    constructor() { }

    set(element: HTMLElement, data: any) {
        this.map.set(element, data);
        this.emit();
    }

    emit() {
        let items: any[] = [];
        this.map.forEach((item, key) => {
            items.push({
                element: key,
                data: item
            });
        });
        this.change.next(items);
    }

}
