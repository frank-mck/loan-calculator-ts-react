import React from 'react'

export const Sliders: React.FC = () => {
  const [years, setYears] = React.useState<number>(50);
  const [borrowing, setBorrowing] = React.useState<number>(0);

  const getBorrowAmount = () => {
    return borrowing >= 1000 ? borrowing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : borrowing
  }

  return (
    <div className ="calculator__sliders">

      <div className="calculator__sliders-borrow">
        <div className="slider-info">
          <p className="slider-primary-text">I want to borrow <span className="slider-secondary-text">
              £{getBorrowAmount()}
            </span>
          </p>
        </div>
        <input data-testid="borrow-slider" type="range"
          min="0" className="slider-1" max="20000" 
          value={borrowing} step="100"
          onChange={(e) => setBorrowing(parseInt(e.target.value))}>
        </input>
      </div>

      <div className="calculator__sliders-years">
        <div className="slider-info">
          <p className="slider-primary-text">Over
            <span className="slider-secondary-text"> £</span>
          </p>
          
        </div>
        <input data-testid="years-slider" type="range" 
          min="0" max="100" value={years} 
          onChange={(e) => setYears(parseInt(e.target.value))} 
          className="slider-2" step="10">
        </input>

      </div>
    </div>
  )
}


