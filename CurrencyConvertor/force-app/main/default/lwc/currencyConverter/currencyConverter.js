import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverter extends LightningElement {
    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "AUD";
    handleChange(event){
        const {name,value} = event.target;
        this[name] = value;
    }
    submitHandler(event){
        event.preventDefault();
        this.convert()

    }
   async convert(){
       const Api_URL = 'https://api.exchangerate.host/convert?from=USD&to=EUR';
       try {
        const data = await fetch(Api_URL);
        const jsonData = await data.json();
        console.log(jsonData);
       } catch(error){
           console.log(error)

       }

    }

}