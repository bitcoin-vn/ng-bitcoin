import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-usd-to-btc',
  templateUrl: './convert-usd-to-btc.component.html',
  styleUrls: ['./convert-usd-to-btc.component.scss']
})
export class ConvertUsdToBtcComponent implements OnInit {

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

  onChangeLocale(e) {}

  onUpdateAmout() { }

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
