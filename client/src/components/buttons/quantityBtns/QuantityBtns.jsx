import "./quantityBtns.scss";

function QuantityBtns({ handleIncrement, handleDecrement, count }) {
  return (
    <div className="quantityBtns quantityBtnsLg">
      <button className="quantityBtns" onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
    
  );
}

export default QuantityBtns;
