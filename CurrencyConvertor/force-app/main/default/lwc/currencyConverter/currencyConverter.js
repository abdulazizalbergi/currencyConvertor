import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverter extends LightningElement {
    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "AUD";
    amount;
    result;
    error;
    handleChange(event){
        const {name,value} = event.target;
        this[name] = value;
        this.result = '';
        this.error = '';
    }
    submitHandler(event){
        event.preventDefault();
        this.convert()

    }
   async convert(){
       const Api_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`;
       try {
        const data = await fetch(Api_URL);
        const jsonData = await data.json();
        this.result = (Number(this.amount) * jsonData.result).toFixed(2);
        console.log(jsonData);
        console.log(this.result);
        
       } catch(error){
           console.log(error)
           this.error = "An error Occured, please try again";

       }

    }

}