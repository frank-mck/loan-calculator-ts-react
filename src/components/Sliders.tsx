import React from 'react'
import { Amount } from './Enums';

export const Sliders: React.FC = () => {
  const [years, setYears] = React.useState<number>(50);
  const [borrowing, setBorrowing] = React.useState<number>(0);

  const getBorrowAmount = (): string | number => {
    return borrowing >= Amount.Minimum ? borrowing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : borrowing;
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
    <div className ="calculator__sliders">

      {/* This is the slider to chose amount to borrow */}
      <div className="calculator__sliders-borrow">
        <div className="slider-info">
          <p className="slider-primary-text">I want to borrow <span className="slider-secondary-text">
              £{`${getBorrowAmount()}.00`}
            </span>
          </p>
        </div>
        <input data-testid="borrow-slider" type="range"
          min="0" className="slider-1" max="20000" 
          value={borrowing} step="100"
          onChange={(e) => setBorrowing(parseInt(e.target.value))}>
        </input>
      </div>

      {/* This is the slider to chose amount of years to borrow */}
      <div className="calculator__sliders-years">
        <div className="slider-info">
          <p className="slider-primary-text">Over
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
  )
}


