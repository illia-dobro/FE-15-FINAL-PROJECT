import { Hearts } from "react-loader-spinner";
import "./heartLoader.scss";

function HeartsLoader() {
  return (
    <div className="hearts">
      <Hearts
        height="120"
        width="120"
        color="#ffc0cb"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
export default HeartsLoader;