import { Hearts } from "react-loader-spinner";
import "./heartLoader.scss";

function HeartsLoader({wrapperClass}) {
  return (
      <Hearts
        height="120"
        width="120"
        color="#ffc0cb"
        ariaLabel="hearts-loading"
        wrapperClass={wrapperClass}
        visible={true}
      />
  );
}
export default HeartsLoader;