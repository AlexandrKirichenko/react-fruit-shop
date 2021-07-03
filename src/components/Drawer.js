function Drawer() {
    return (
        <div style={{display:'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
                </h2>

                <div className="items flex">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20 p-5"
                             width={70} height={70}
                             src="https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg"
                             alt="banana"/>
                        <div className="mr-50">
                            <p className="mb-5">Банан Кавендиш</p>
                            <b>10$</b>
                        </div>
                        <img className="cardBtn" width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        <img className="cardBtn" width={11} height={11} src="/img/min.svg" alt="minus"/>
                        <img className="cardBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20 p-5"
                             width={70} height={70}
                             src="https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg"
                             alt="banana"/>
                        <div className="mr-50">
                            <p className="mb-5">Банан Кавендиш</p>
                            <b>10$</b>
                        </div>
                        <img className="cardBtn" width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        <img className="cardBtn" width={11} height={11} src="/img/min.svg" alt="minus"/>
                        <img className="cardBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
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