import Button from "../button";
import { VscHeart ,VscHeartFilled} from "react-icons/vsc";
import { useState } from "react";
import "./favoriteBtn.scss";

function FavoriteBtn() {
  const  [inFavorites, setInFavorites]  = useState(false);

  return (
    <Button className="favorite-btn" action={() => setInFavorites(!inFavorites)}>
      {inFavorites ? <VscHeartFilled /> : <VscHeart />}
      {inFavorites ? (
        <span>Remove from favorites</span>
        
      ) : (
        <span>Add to favorites</span>
      )}
    </Button>
  );
}

export default FavoriteBtn;
