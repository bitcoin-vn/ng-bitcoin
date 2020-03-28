import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FullLocales } from "../../../components/config-chart/data-display";
interface Locale {
  label: string,
  value: string
}
declare const Intl: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('800ms ease-in'))
    ])
  ]
})
export class MenuRightComponent implements OnInit {
  @Output() public onChangeLocale = new EventEmitter();
  public showHide = false;
  public piSpinner = 'default';

  locales: any[] = FullLocales;
  selected: string;

  public onShowHide() {
    this.showHide = !this.showHide
    this.piSpinner = (this.piSpinner === 'default' ? 'rotated' : 'default');
  }

  public onChange(e) {
    const locale: Locale = FullLocales.filter((f: Locale) => f.value === e.value)[0];
    localStorage.setItem('locale', locale.value);
    this.onChangeLocale.emit(locale.value);
  }

  constructor() {
  }

  ngOnInit() {
    const localeActive = localStorage.getItem('locale');
    if (localeActive === undefined || localeActive === null) {
      const locale: Locale = FullLocales.filter((f: Locale) => f.value.split("_")[0] === new Intl.NumberFormat().resolvedOptions().locale)[0];
      this.selected = locale.value
      localStorage.setItem('locale', locale.value);
    } else {
      this.selected = localeActive;
    }
  }

}
