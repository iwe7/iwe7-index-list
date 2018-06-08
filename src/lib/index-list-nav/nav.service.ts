import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IndexListNavService {
    map: Map<HTMLElement, any> = new Map();
    hasCalulate: boolean = false;
    change: BehaviorSubject<{
        element: HTMLElement,
        data: any
    }[]> = new BehaviorSubject([]);
    list: {
        element: HTMLElement,
        data: any
    }[] = [];

    heightList: number[] = [];
    constructor() {
        this.change.subscribe(items => this.list = items);
    }

    set(element: HTMLElement, data: any) {
        this.map.set(element, data);
        this.emit();
    }
    _calculateHeight() {
        if (this.hasCalulate) {
            return;
        }
        const list = this.list;
        const TITLE_HEIGHT = 0;
        if (!list) {
            return;
        }
        this.heightList = [];
        let height = TITLE_HEIGHT;
        this.heightList.push(height);
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            height += item.element.clientHeight;
            this.heightList.push(height);
        }
        this.hasCalulate = true;
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

    size() {
        return this.map.size;
    }

    getIndex(index: number) {
        return this.list[index];
    }

    getDiff(newY: number): { currentIndex: number, element: any } {
        this._calculateHeight();
        let currentIndex = 0;
        for (let i = 0; i < this.heightList.length - 1; i++) {
            const item1 = this.heightList.find((item, index) => {
                return index === i;
            });
            const item2 = this.heightList.find((item, index) => {
                return index === i + 1;
            });
            const abs = Math.abs(newY);
            const __re = abs >= item1 && abs < item2;
            if (__re) {
                currentIndex = i;
                return {
                    currentIndex: currentIndex,
                    element: this.list[currentIndex].element,
                };
            }
        }
        currentIndex = this.list.length - 2;
        return {
            currentIndex: currentIndex,
            element: this.list[currentIndex].element,
        };
    }

    getItemTop(item: any) {
        const element: HTMLElement = item.element;
        const rect = element.getBoundingClientRect();
        return rect.top;
    }

}
