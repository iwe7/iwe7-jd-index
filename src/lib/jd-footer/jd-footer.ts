import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import { Iwe7BaseComponent } from 'iwe7-base';

@Component({
  selector: 'jd-footer',
  templateUrl: 'jd-footer.html',
  styleUrls: ['./jd-footer.scss']
})

export class JdFooterComponent extends Iwe7BaseComponent {
  width: number = 0;
  position: string = 'absolute';
  constructor(public ele: ElementRef, injector: Injector) {
    super(injector, '');
    this.setStyleInputs(['position']);
    this.getCyc('ngOnInit').subscribe(res => {
      this.width = this.ele.nativeElement.clientWidth;
    });
  }
}
