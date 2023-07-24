import "./button.scss";
import PropTypes from "prop-types";

function Button({children, action, className}) {
  return (
    <button className={className} onClick={action}>{children}</button>
  )
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
};
export default Button;