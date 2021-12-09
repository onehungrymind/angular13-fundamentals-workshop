import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <mat-card class="shape">
      <mat-card-header>
        <mat-card-title>Circle</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="circle"></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .circle {
        width: 100px;
        height: 100px;
        background: #ff1a00;
        border-radius: 50%;
        margin: 0 auto;
      }
    `,
  ],
})
export class CircleComponent {}
