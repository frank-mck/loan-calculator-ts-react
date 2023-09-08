import React from 'react'
import './styles/LoanCalculator.css';
import { Button } from '../Button/Button';
import { Amount } from '../enums/Enums';
import { Interest } from '../Interest/Interest';

export const LoanCalculator: React.FC = () => {
  const [years, setYears] = React.useState<number>(50);
  const [borrowing, setBorrowing] = React.useState<number>(Amount.Minimum);

  const getBorrowAmount = (): string => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'GBP' }).format(borrowing) 
  }

  const getBorrowingYears = (): any => {
    let year = years / 2 * 0.1, halfAYear = years * 0.1 % 2 === 1;
    if (halfAYear) {
      return <span className="slider-secondary-text">
        {Math.floor(year)}&#189; {years > 1 ? "years" : "year"}</span>
    } else {
      return `${year} ${year > 1 ? "years" : "year"}`;
    }
  }

  return (
    <div className="loan-calculator">
      <div className ="loan-calculator__sliders">
        {/* This is the slider to chose amount to borrow */}
        <div className="loan-calculator__sliders-borrow">
          <div className="slider-info">
            <p data-testid="amount" className="slider-primary-text">
              I want to borrow <span className="slider-secondary-text">
              {getBorrowAmount()}
              </span>
            </p>
          </div>
          <input data-testid="amount-slider" type="range"
            min="1000" className="slider" max="20000" 
            value={borrowing} step="100"
            onChange={(e) => setBorrowing(parseInt(e.target.value))}>
          </input>
        </div>

        {/* This is the slider to chose amount of years to borrow */}
        <div className="loan-calculator__sliders-years">
          <div className="slider-info">
            <p data-testid="years" className="slider-primary-text">Over
              <span className="slider-secondary-text"> {getBorrowingYears()}</span>
            </p>
          </div>
          <input data-testid="years-slider" type="range" 
            min="20" max="100" value={years} 
            onChange={(e) => setYears(parseInt(e.target.value))} 
            className="slider" step="10">
          </input>
        </div>
        </div>
        <Interest years={years} borrowing={borrowing}/>
        <Button />
    </div>
  )
}


