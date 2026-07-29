import React , {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/productCard.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchProducts = async () => {
        try {
        const res = await fetch("/api/products", {
            contentType: "application/json",
            method: "GET",
        });
        const data = await res.json();
        setProducts(data.products);
     
    } catch (error) {
        alert(error.message);
    } finally {
        setLoading(false);
    }
    }
    fetchProducts();
})
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
