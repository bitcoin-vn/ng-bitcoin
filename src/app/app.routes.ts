// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
// My app
import { HomeComponent } from "src/app/components/home/home.component";
import { ChartsComponent } from "src/app/components/charts/charts.component";
import { ChatRoomComponent } from "src/app/components/chat-room/chat-room.component";
import { FullLayoutComponent } from "src/app/components/_root/full-layout/full-layout.component";
import { AnalysisComponent } from "src/app/components/analysis/analysis.component";
import { ConvertBtcToAltcoinComponent } from "src/app/components/convert-btc-to-altcoin/convert-btc-to-altcoin.component";
import { ConvertBtcToUsdComponent } from "src/app/components/convert-btc-to-usd/convert-btc-to-usd.component";
import { ConvertUsdToBtcComponent } from "src/app/components/convert-usd-to-btc/convert-usd-to-btc.component";
import { CryptocurrencyComponent } from "src/app/components/cryptocurrency/cryptocurrency.component";
import { GoogleTrendsComponent } from "src/app/components/google-trends/google-trends.component";


const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'analysis',
        component: AnalysisComponent
      }, {
        path: 'charts',
        component: ChartsComponent
      }, {
        path: 'chat-room',
        component: ChatRoomComponent
      }, {
        path: 'btc-to-usd',
        component: ConvertBtcToUsdComponent
      }, {
        path: 'usd-to-btc',
        component: ConvertUsdToBtcComponent
      }, {
        path: 'btc-to-altcoin',
        component: ConvertBtcToAltcoinComponent
      }, {
        path: 'cryptocurrency',
        component: CryptocurrencyComponent
      }, {
        path: 'google-trends',
        component: GoogleTrendsComponent
      }, {
        path: 'chat-room',
        component: ChatRoomComponent
      },
    ]
  }, {
    path: '**',
    redirectTo: ''
  }
];

const routerOptions: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutes { }
