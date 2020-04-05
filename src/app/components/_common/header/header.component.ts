import { Component, OnInit } from '@angular/core';
import { Menu } from "src/app/menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any[] = Menu;
  isShowHide = true;

  constructor() { }

  ngOnInit() {
  }

}
