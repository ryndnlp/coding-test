import './ActionButton.css';

const ActionButton = ({onClick, text}) => {
  return(
    <button className='action-button' onClick={onClick}>
      {text}
    </button>
  )
}

export default ActionButton;