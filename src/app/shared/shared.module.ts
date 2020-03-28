import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRightComponent } from './components/menu-right/menu-right.component';

@NgModule({
  declarations: [MenuRightComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuRightComponent
  ]
})
export class SharedModule { }
