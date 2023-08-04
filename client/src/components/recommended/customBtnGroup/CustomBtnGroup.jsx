
import { RiArrowDropLeftLine,RiArrowDropRightLine } from "react-icons/ri";
import Button from "../../buttons/button";
import "./customBtnGroup.scss";

/* For the productSlider! with Libary settings for the custom btnGroup */
function CustomBtnGroup({ next, previous, ...rest }) {
  
  const { carouselState: { currentSlide, classname } } = rest;

  return (
    <div className="btn-group"> 
      <Button className={currentSlide === 0 ? 'disable' : ''} action={() => previous()}>
        <RiArrowDropLeftLine/>
      </Button>
      <Button action={() => next()}>
      <RiArrowDropRightLine/>
      </Button>
    </div>
  );

}

export default CustomBtnGroup;
