## index list

```html
<div style="height: 300px;overflow: hidden;position: relative;">
  <index-list>
    <div class="title" *ngFor="let item of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]" [indexListAnchor]="item">
      {{item}}
      <div class="panel">

      </div>
    </div>
  </index-list>
</div>


<div style="height: 300px;overflow: hidden;position: relative;">
  <index-list>
    <div class="title" *ngFor="let item of [0,1,2,3,4,5,6,7,8,9,10]" [indexListAnchor]="item">
      {{item}}
      <div class="panel">

      </div>
    </div>
  </index-list>
</div>
```