import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MenuRightComponent } from './components/menu-right/menu-right.component';
// primeng
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [MenuRightComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    FieldsetModule
  ],
  exports: [
    MenuRightComponent
  ]
})
export class SharedModule { }
