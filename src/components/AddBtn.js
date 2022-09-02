import React from 'react'

function AddBtn({ btnText, onToggle, showModal }) {
  return (
    <button className={showModal ? 'cancel-btn' : 'add-btn'} onClick={onToggle}>
        { btnText}
    </button>
  )
}

export default AddBtn