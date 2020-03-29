import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MenuRightComponent } from './components/menu-right/menu-right.component';
// primeng
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [MenuRightComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputSwitchModule,
    MultiSelectModule
  ],
  exports: [
    MenuRightComponent
  ]
})
export class SharedModule { }
