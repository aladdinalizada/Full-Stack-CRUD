import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/products/");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    // axios delete request
    console.log(id);
    const response = await axios.delete(`http://localhost:8080/products/${id}`);
    console.log(response);
    getData();
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleDelete = (e) => {
    const id = e.target.parentNode.id;
    deleteItem(id);
  };


  const addToCart = async (cardItem) => {
    const response = await axios.post(
      "http://localhost:8080/cart/",
      cardItem
    );
    console.log(response);
  };
  
  const handleAddToCard = (e) => {
    const id = e.target.parentNode.id;
    const product = products?.find((product) => product.id == id);

    let cardItem = {
      id: product.length + 1,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    };
    addToCart(cardItem);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="cards">
        {products &&
          products?.map((product) => (
            <div key={product.id} className="card" id={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>{product.price}$</p>
              <button onClick={(e) => handleAddToCard(e)}>Add to cart</button>
              <button onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
