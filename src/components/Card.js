function Card() {
    return (
        <div className="card">
            <img width={200} height={170}
                 src="https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg"
                 alt="banana"/>
            <h5>Банан</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>10$</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;