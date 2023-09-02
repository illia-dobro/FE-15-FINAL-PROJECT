import PropTypes from "prop-types";
import Button from "../button";
import "./quantityBtns.scss";

function QuantityBtns({ handleIncrement, handleDecrement, count = 1, className }) {

	return (
		<div className={`quantityBtns ${className}`}>
			<Button action={handleDecrement}>-</Button>
			<span>{count}</span>
			<Button action={handleIncrement}>+</Button>
		</div>

	);
}
QuantityBtns.propTypes = {
	handleIncrement: PropTypes.func,
	handleDecrement: PropTypes.func,
	count: PropTypes.number,
	className: PropTypes.string
};
export default QuantityBtns;