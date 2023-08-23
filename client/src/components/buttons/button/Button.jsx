import PropTypes from "prop-types";
import "./button.scss";

function Button({ children, action, className, disabled = false }) {
  return (
    <button className={className} onClick={action} disabled={disabled}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
  className: PropTypes.string,
};
export default Button;
