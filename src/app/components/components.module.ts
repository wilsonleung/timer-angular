import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnchorComponent } from './anchor/anchor.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnchorComponent, ButtonComponent],
  exports: [AnchorComponent, ButtonComponent],
})
export class ComponentsModule {}
