import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"

function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems]= React.useState([]);
    const [searchValue,setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    // const onAddToCart = (obj) => {
    //
    //     const itemIndex = cartItems.findIndex(cartItem => cartItem.id === obj.id)
    //
    //     if(itemIndex < 0){
    //         const newItem = {
    //             ...obj,
    //             quantity: 1,
    //         }
    //         setCartItems([...cartItems, newItem]);
    //     } else {
    //         const newCartItem = cartItems.map((cartItem, index) => {
    //             if(index === itemIndex) {
    //                 return {
    //                     ...cartItem,
    //                     quantity: cartItem.quantity + 1
    //                 }
    //             } else {
    //                 return cartItem;
    //             }
    //         })
    //
    //         setCartItems(newCartItem);
    //     }
    //
    // }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    React.useEffect(() => {

        axios.get('https://60e06e046b689e001788ca6f.mockapi.io/items').then(res => {
            setItems(res.data)
        });

    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://60e06e046b689e001788ca6f.mockapi.io/cart',obj)
        setCartItems(prev =>[...prev, obj]);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems}  onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{ searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все фрукты' }</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        {searchValue && <img onClick={() => setSearchValue('')} className="clea cu-p" src="/img/btn-remove.svg" alt="Close"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="cards d-flex flex-wrap">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>


            </div>

        </div>
    );
}

export default App;



