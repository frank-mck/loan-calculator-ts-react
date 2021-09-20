import React from 'react'

export const Button: React.FC = () => {
  return (
    <div className="calculator__btn-container">
      <button className="calculator__btn" data-testid="button">
        Get your quote <span>&#187;</span>
      </button>
    </div>
  )
}
