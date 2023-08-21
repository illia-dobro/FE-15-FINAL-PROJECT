import PropTypes from "prop-types";
import "./button.scss";

function Button({children, action, className}) {
  return (
    <button className={className} onClick={action}>{children}</button>
  )
};
Button.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
  className: PropTypes.string,
};
export default Button;