import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    num1 = 0;
    num2 = 0;
    expression = '';

    handleInput(event) {
        const { name, value } = event.target;
        this[name] = parseFloat(value);
    }
    add() {
        const result = this.num1 + this.num2;
        this.expression = `${this.num1} + ${this.num2} = ${result}`;
    }

    subtract() {
        const result = this.num1 - this.num2;
        this.expression = `${this.num1} - ${this.num2} = ${result}`;
    }
    multiply() {
        const result = this.num1 * this.num2;
        this.expression = `${this.num1} × ${this.num2} = ${result}`;
    }

    divide() {
        if (this.num2 === 0) {
            this.expression = 'Cannot divide by 0';
        } else {
            const result = (this.num1 / this.num2).toFixed(2);
            this.expression = `${this.num1} ÷ ${this.num2} = ${result}`;
        }
    }
}