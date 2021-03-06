import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-only',
  templateUrl: './price-only.component.html',
  styleUrls: ['./price-only.component.css']
})
export class PriceOnlyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab'];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}