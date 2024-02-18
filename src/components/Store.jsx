import products from '../products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import { useState } from 'react';

function Store() {
  const [icon, setIcon] = useState("view__module");

  const onSwitch = () => {
    setIcon((icon) => ( icon === "view__module" ? "view__list": "view__module"));
  }

  return (
    <div className="container">
       <IconSwitch icon={icon} onSwitch={onSwitch}/>
       {icon === "view__module" ? <ListView items={products}/> : <CardsView cards={products}/>}
    </div>
  )
}

export default Store