import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer"

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все фрукты</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="cards d-flex">
                    <Card />

                </div>


            </div>

        </div>
    );
}

export default App;



// <div className="card">
//     <img width={200} height={170} src="https://lifeglobe.net/x/entry/6259/1a-0.jpg" alt="apple"/>
//     <h5>Банан</h5>
//     <div className="d-flex justify-between align-center">
//         <div className="d-flex flex-column ">
//             <span>Цена:</span>
//             <b>10$</b>
//         </div>
//         <button className="button">
//             <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
//         </button>
//     </div>
// </div>
// <div className="card">
//     <img width={200} height={170}
//          src="https://ideas-center.com.ua/wp-content/uploads/fc7146c85cb3d97069131e62c0fbfe27.png"
//          alt="banana"/>
//     <h5>Банан</h5>
//     <div className="d-flex justify-between align-center">
//         <div className="d-flex flex-column ">
//             <span>Цена:</span>
//             <b>10$</b>
//         </div>
//         <button className="button">
//             <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
//         </button>
//     </div>
// </div>