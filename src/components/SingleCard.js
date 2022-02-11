import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => {
    if(!disabled) handleChoice(card);
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img 
          src="/img/img_0.png" 
          alt="card back" 
          onClick={handleClick}
          className="back" 
        />
      </div>
    </div>
   );
}

export default SingleCard;