import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
