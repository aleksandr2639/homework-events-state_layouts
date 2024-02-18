import ShopCard from "./ShopCard";
import { v4 as uuidv4 } from "uuid";

function CardsView({cards}) {
    return (
        <div className="cards__view">
        {
          cards.map((card) => (
            <div key={uuidv4()} className="cards-view__card">
              <ShopCard card={card}/>
            </div>
          ))
        }
      </div>
    )
}

export default CardsView