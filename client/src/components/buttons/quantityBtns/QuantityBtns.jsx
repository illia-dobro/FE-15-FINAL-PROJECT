import "./quantityBtns.scss";
import PropTypes from "prop-types";

import Button from "../button";
function QuantityBtns({ handleIncrement, handleDecrement, count=1, className }) {
  
  return (
    <div className={`quantityBtns ${className}`}>
      <Button action={handleDecrement}>-</Button>
      <span>{count}</span>
      <Button action={handleIncrement}>+</Button>
    </div>
    
  );
}
QuantityBtns.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  className: PropTypes.string
};
export default QuantityBtns;
