function Drawer({onClose, items = [], quantity = 0}) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>

                <div className="items flex">
                    {
                        items.map( (item)=> (
                            <div key={item.id} className="cartItem d-flex align-center mb-20">
                                <img className="mr-20 p-5"
                                     width={70} height={70}
                                     src={item.imageUrl}
                                     alt="banana"/>
                                <div className="mr-50">
                                    <p className="mb-5">{item.title}</p>
                                    <b>{item.price}$</b>
                                </div>
                                <img className="cardBtn" width={11} height={11} src="/img/plus.svg" alt="plus"/>
                                {quantity ? <span>{quantity}</span> : null}
                                <img className="cardBtn" width={11} height={11} src="/img/min.svg" alt="minus"/>
                                <img className="cardBtn" src="/img/btn-remove.svg" alt="Remove"/>
                            </div>
                        ))
                    }
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>110$</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;