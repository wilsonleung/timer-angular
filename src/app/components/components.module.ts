import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnchorComponent } from './anchor/anchor.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnchorComponent, ButtonComponent, ModalComponent],
  exports: [AnchorComponent, ButtonComponent, ModalComponent],
})
export class ComponentsModule {}
