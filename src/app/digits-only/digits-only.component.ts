import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-digits-only',
  templateUrl: './digits-only.component.html',
  styleUrls: ['./digits-only.component.css'],
})
export class DigitsOnlyComponent {
  @Input() digit?: number = 0;
  @Output() digitChange = new EventEmitter<number>();

  onInput(event: Event) {
    let input = event.target as HTMLInputElement;

    if (this.verifyNumber(input.value)) {
      if (input.value == '') {
        this.digitChange.emit(null);
      } else {
        this.digitChange.emit(Number(input.value));
      }
    } else {
      let newValue = input.value.replace(/[\D]+/, '');
      input.value = newValue;
    }
  }

  private verifyNumber(stringToVerify: string) {
    let regex = /^\d*$/;
    return regex.test(stringToVerify);
  }
}
