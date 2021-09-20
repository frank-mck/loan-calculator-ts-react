import React from 'react'

export const Button: React.FC = () => {
  return (
    <div>
      <button className="calculator__btn" data-testid="button">
        Get your quote <span>&#187;</span>
      </button>
    </div>
  )
}
