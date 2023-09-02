import PropTypes from "prop-types";
import Button from "../button";
import "./quantityBtns.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function QuantityBtns({ handleIncrement, handleDecrement, count = 1, className }) {

	return (
		<div className={`quantityBtns ${className}`}>
			<Button action={handleDecrement}><AiOutlineMinus /></Button>
			<span className="font-bold">{count}</span>
			<Button action={handleIncrement}><AiOutlinePlus /></Button>
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