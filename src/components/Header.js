function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/mainlogo.svg" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">Fruit shop</h3>
                    <p className="opacity-1">Самые вкусные фрукты у нас!</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
                    <span>110$</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;