import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/products.js';
import { Container } from 'reactstrap';
import { listCateTour } from './data.js';
import React, {useState} from "react"
import Product from './components/product/Product.js';
function App() {
  const list = []

  const [listCafeTour, setListCafeTour] = useState({ id: 1, title: "New York" });
  
  const listTour = []

  const titleClick = (x)=>{
      setListCafeTour(x)
  }
  return (
    <>
    <h1>Perfect destination</h1>
    <h2>Trending destination</h2>
    <Buttons list={list} titleClick={titleClick}/>
    <Cards listTour = {listTour.filter((tour)=>tour.category === listCafeTour.title)}/>


{/* Button(props)
const {list, titleClick} = props
list.map((item, index) = (<Button key={index} onClick={titleClick(item.title)}/>item.title))
*/}
    </>
  );
}

export default App;
