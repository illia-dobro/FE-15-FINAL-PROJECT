import "./buttonLg.scss";

function ButtonLg({childrens, action}) {
  return (
    <button className="btn-large" onClick={action}>{childrens}</button>
  )
};

export default ButtonLg;