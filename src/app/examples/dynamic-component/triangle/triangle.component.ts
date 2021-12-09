import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <mat-card class="shape">
      <mat-card-header>
        <mat-card-title>Triangle</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="triangle"></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .triangle {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid #008c00;
        margin: 0 auto;
      }
    `,
  ],
})
export class TriangleComponent {}
