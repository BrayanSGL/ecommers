import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
          {products &&
            products.map((product) => (
              <Card key={product.id} data={product} />
            ))}
        </div>
      </Layout>
    </>
  );
}

export default Home;
