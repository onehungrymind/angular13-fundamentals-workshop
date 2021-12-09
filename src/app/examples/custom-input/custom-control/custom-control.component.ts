import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true,
    },
  ],
})
export class CustomControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  key: string;
  source$ = timer(1000, 5000);
  sub;

  ngOnInit(): void {
    this.sub = this.source$.subscribe((_) => this.generateKey());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  generate() {
    return Math.random().toString(36).substr(2, 8);
  }

  generateKey() {
    this.key = this.generate();
    this.onChange(this.key);
  }

  writeValue(key: string) {
    this.key = key;
  }

  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
