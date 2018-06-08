## index list

```html
<div style="height: 300px;overflow: hidden;position: relative;">
  <index-list>
    <div class="title" *ngFor="let item of [1,2,3,4,5,6,7,8,9,10]" [indexListAnchor]="item">
      {{item}}
      <div class="panel">

      </div>
    </div>
  </index-list>
</div>


<div style="height: 300px;overflow: hidden;position: relative;">
  <index-list>
    <div class="title" *ngFor="let item of [1,2,3,4,5,6,7,8,9,10]" [indexListAnchor]="item">
      {{item}}
      <div class="panel">

      </div>
    </div>
  </index-list>
</div>
```