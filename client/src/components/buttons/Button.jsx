import "./button.scss";
import PropTypes from "prop-types";

function Button({childrens, action, className}) {
  return (
    <button className={className} onClick={action}>{childrens}</button>
  )
};
Button.propTypes = {
  childrens: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
};
export default Button;
