function ShopItem({ item }) {
  return (
    <>
        <div className="item__image-wrapper">
          <img src={item.img} alt={item.name} className="item__img"/>
      </div>
        <p className="item__name">{item.name}</p>
        <p className="item__color">{item.color}</p>
        <span className="item__price">${item.price}</span>
        <button className="item__button">ADD TO CARD</button>
    </>
  )
}

export default ShopItem