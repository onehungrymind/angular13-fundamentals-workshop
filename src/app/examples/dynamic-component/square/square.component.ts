import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <mat-card class="shape">
      <mat-card-header>
        <mat-card-title>Square</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="square"></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .square {
        width: 100px;
        height: 100px;
        background: #4096ee;
        margin: 0 auto;
      }
    `,
  ],
})
export class SquareComponent {}
