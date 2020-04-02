import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Project
import { AppRoutes } from './app.routes';
import { AppComponent } from './components/_root';
import { FullLayoutComponent } from './components/_root/full-layout/full-layout.component';
import { HeaderComponent } from './components/_common/header/header.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { GoogleTrendsComponent } from './components/google-trends/google-trends.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { ConvertBtcToUsdComponent } from './components/convert-btc-to-usd/convert-btc-to-usd.component';
import { ConvertUsdToBtcComponent } from './components/convert-usd-to-btc/convert-usd-to-btc.component';
import { ConvertBtcToAltcoinComponent } from './components/convert-btc-to-altcoin/convert-btc-to-altcoin.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/_common/music/music.component';
import { NavigationComponent } from './components/_common/navigation/navigation.component';
import { FooterComponent } from './components/_common/footer/footer.component';
import { SharedModule } from './shared/shared.module';
// ngx-bootstrap v4
import { ModalModule } from 'ngx-bootstrap/modal';
// angularx-qrcode
import { QRCodeModule } from 'angularx-qrcode';
// primeng
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HeaderComponent,
    ChartsComponent,
    AnalysisComponent,
    ChatRoomComponent,
    GoogleTrendsComponent,
    CryptocurrencyComponent,
    MyNotesComponent,
    ConvertBtcToUsdComponent,
    ConvertUsdToBtcComponent,
    ConvertBtcToAltcoinComponent,
    HomeComponent,
    MusicComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes,
    QRCodeModule,
    SharedModule,
    ModalModule.forRoot(),
    // ngprime
    MultiSelectModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
