import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnchorComponent } from './anchor/anchor.component';

@NgModule({
  declarations: [AnchorComponent],
  imports: [CommonModule],
  exports: [AnchorComponent],
})
export class ComponentsModule {}
