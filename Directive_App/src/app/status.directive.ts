import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStatusColor]',
  standalone: true
})
export class StatusColorDirective implements OnChanges {

  @Input() appStatusColor!: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.color = this.appStatusColor ? 'green' : 'red';
  }
}
