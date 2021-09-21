import React from 'react'
import './/styles/Interest.css';
import { Amount, InterestRate } from '../enums/Enums'

export const Interest: React.FC<any> = ({ years, borrowing }) => {

  const getInterestRate = (): number => {
    if (borrowing >= Amount.Minimum && borrowing <= 5000) {
      return InterestRate.Rate5;
    } else if (borrowing > 5000 && borrowing <= 10000) {
      return InterestRate.Rate10;
    } else if (borrowing > 10000 && borrowing <= 15000) {
      return InterestRate.Rate15;
    } else {
      return InterestRate.Rate20;
    }
  }

  const getMonthlyPayments = (): number => {
    let numOfPayments = 12 * years * 0.1 / 2;
    let interest = getInterestRate() * 0.01 
    return borrowing * (interest/12)*Math.pow((1+interest/12), numOfPayments) / (Math.pow((1+interest/12), numOfPayments) -1);
  }

  return (
    <div className="loan-calculator__interest">
      <div className="interest-rate">
        <h2 data-testid="interest" className= "secondary-text">{getInterestRate()}%</h2>
        <h4>Interest rate</h4>
      </div>
      <div className="monthly-repayment">
        <h2 data-testid="repayments" className = "secondary-text">£{getMonthlyPayments().toFixed(2)}</h2>
        <h4>Monthly repayment</h4>
      </div>
    </div>
  )
}



