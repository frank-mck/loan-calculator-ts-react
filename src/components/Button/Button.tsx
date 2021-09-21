import React from 'react'
import './/styles/Button.css';

export const Button: React.FC = () => {
  return (
    <div className="loan-calculator__btn-container">
      <button className="loan-calculator__btn" data-testid="button">
        Get your quote <span>&#187;</span>
      </button>
    </div>
  )
}
