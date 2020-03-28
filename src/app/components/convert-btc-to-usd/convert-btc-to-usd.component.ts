import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-btc-to-usd',
  templateUrl: './convert-btc-to-usd.component.html',
  styleUrls: ['./convert-btc-to-usd.component.scss']
})
export class ConvertBtcToUsdComponent implements OnInit {
  selectedBtc: any;
  cars = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
  ];
  constructor() { }

  ngOnInit() {
  }

  onCalculator(e) {
    e.preventDefault();
    // if(!this.state.amount.trim()){
    //     alert("Vui lòng kiểm tra lại số tiền bạn muốn chuyển đổi");
    // } else {
    //     var myUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';
    //     axios.get(myUrl)
    //     .then(res => {
    //         this.setState({output: this.moneyFormat(this.state.amount * res.data.ticker.price, "USD")});
    //         this.setState({rate:  this.moneyFormat(res.data.ticker.price,'USD')});
    //     })
    // }
  }
}
