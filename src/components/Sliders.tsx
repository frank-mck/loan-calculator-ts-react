import React from 'react'

export const Sliders: React.FC = () => {
  const [years, setYears] = React.useState<number>(50)
  const [borrowing, setBorrowing] = React.useState<number>(0)

  return (
    <div className ="calculator__sliders">

      <div className="calculator__sliders-borrow">
        <p>I want to borrow</p>
        <input 
          data-testid="borrow-slider"
          type="range"
          min="1" 
          className="slider-1" 
          max="100" 
          value={borrowing} 
          onChange={(e) => setBorrowing(parseInt(e.target.value))}>
        </input>
      </div>

      <div className="calculator__sliders-years">
        <p>Over</p>
        <input 
          data-testid="years-slider"
          type="range" 
          min="1" 
          max="100" 
          value={years} 
          onChange={(e) => setYears(parseInt(e.target.value))} 
          className="slider-2" 
          id="myRange">
        </input>

      </div>
    </div>
  )
}


