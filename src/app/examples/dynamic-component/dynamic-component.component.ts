import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { TriangleComponent } from './triangle/triangle.component';

const Components = {
  square: SquareComponent,
  triangle: TriangleComponent,
  circle: CircleComponent,
};

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
})
export class DynamicComponent implements OnInit {
  shapes = [
    { type: 'square' },
    { type: 'square' },
    { type: 'triangle' },
    { type: 'circle' },
    { type: 'square' },
    { type: 'triangle' },
  ];

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.shapes.forEach((shape) =>
      this.viewContainerRef.createComponent(Components[shape.type])
    );
  }
}
