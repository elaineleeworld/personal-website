/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.button`
  cursor: pointer;
  display: inline-block;
  margin-bottom: auto;
  position: relative;
  border-radius: 10px;
  margin-top: 400px;
  width: 8rem;
  height: 2rem;
  background: #18CAE6;
  color: white;
  border: 2px solid white;
`

function Button({ click, text }) {
  function handleClick(e) {
    if (typeof click === 'function') return click(e)
    // fallback behavior: show portfolio container (keeps original intent)
    const container = document.querySelector('.button-container')
    const portfolio = document.querySelector('#portfolio-flex-container')
    if (container) container.style.display = 'none'
    if (portfolio) portfolio.style.display = 'flex'
  }

  return (
    <div className="button-container">
      <ButtonStyles className="button-styles" onClick={handleClick}>
        {text}
      </ButtonStyles>
    </div>
  )
}

export default Button