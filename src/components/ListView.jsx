import ShopItem from "./ShopItem";
import { v4 as uuidv4 } from "uuid";

function ListView({items}) {
    return (
        <div className="list__item">
        {
          items.map((item) => (
            <div key={uuidv4()} className="list__view">
              <ShopItem item={item}/>
            </div>
          ))
        }
      </div>
    )
}

export default ListView