import React from 'react'

function AddBtn({ btnText, showModal, onToggle }) {
  return (
    <button className='add-btn' onClick={onToggle}>
        { btnText}
    </button>
  )
}

export default AddBtn