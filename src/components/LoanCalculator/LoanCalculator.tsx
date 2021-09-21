import React from 'react'
import './styles/LoanCalculator.css';
import { Button } from '../Button/Button';
import { Amount } from '../enums/Enums';
import { Interest } from '../Interest/Interest';

export const LoanCalculator: React.FC = () => {
  const [years, setYears] = React.useState<number>(50);
  const [borrowing, setBorrowing] = React.useState<number>(Amount.Minimum);

  const getBorrowAmount = (): string | number => {
    if (borrowing >= Amount.Minimum) {
      // if the amount selected is equal or greater than 1000, insert a comma
      return borrowing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
      return borrowing;
      }
    }

  const getBorrowingYears = (): string | number => {
    let year = years / 2 * 0.1;
    let halfAYear = years * 0.1 % 2 === 1
    if (halfAYear) {
      return Math.floor(year);
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
            <p data-testid="amount" className="slider-primary-text">I want to borrow <span className="slider-secondary-text">
                £{`${getBorrowAmount()}.00`}
              </span>
            </p>
          </div>
          <input data-testid="amount-slider" type="range"
            min="1000" className="slider-1" max="20000" 
            value={borrowing} step="100"
            onChange={(e) => setBorrowing(parseInt(e.target.value))}>
          </input>
        </div>

        {/* This is the slider to chose amount of years to borrow */}
        <div className="loan-calculator__sliders-years">
          <div className="slider-info">
            <p data-testid="years" className="slider-primary-text">Over
              <span className="slider-secondary-text"> {getBorrowingYears()}</span>
              {years * 0.1 % 2 === 1 ? <span className="slider-secondary-text">&#189; year{years > 1 ? "s" : ""}</span> : null} 
            </p>
          </div>
          <input data-testid="years-slider" type="range" 
            min="20" max="100" value={years} 
            onChange={(e) => setYears(parseInt(e.target.value))} 
            className="slider-2" step="10">
          </input>
        </div>
        </div>
        <Interest years={years} borrowing={borrowing}/>
        <Button />
    </div>
  )
}


