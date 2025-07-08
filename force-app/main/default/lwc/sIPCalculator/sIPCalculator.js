import { LightningElement } from 'lwc';

export default class SipCalculator extends LightningElement {
    monthlyInvestment = 25000;
    annualReturn = 12;
    timePeriod = 10;
    investedAmount = 0;
    estimatedReturns = 0;
    totalValue = 0;

    handleChange(event) {
        const { name, value } = event.target;
        this[name] = parseFloat(value);
        this.calculateSIP();
    }
    calculateSIP() {
        const month = this.monthlyInvestment;
        const annu = this.annualReturn / 100 / 12;
        const tim = this.timePeriod * 12;

        this.investedAmount = month * tim;
        const fv = month * (((Math.pow(1 + annu, tim) - 1) / annu) * (1 + annu));
        this.totalValue = Math.round(fv);
        this.estimatedReturns = Math.round(this.totalValue - this.investedAmount);
    }

    connectedCallback() {
        this.calculateSIP();
    }
}
