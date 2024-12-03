import { useEffect, useState } from "react";
import "./pagination.style.css";
export const Pagination = ({
  pageSize,
  selectedPage,
  onClick,
}: {
  pageSize: number;
  selectedPage: number;
  onClick: (pnumber: number) => void;
}) => {
  return (
    <>
      <span>⏮️</span>
      {[...Array(pageSize)].map((_, i) => {
        return (
          <span
            className={selectedPage === i + 1 ? "span-seleted" : ""}
            onClick={() => onClick(i + 1)}
          >
            {i + 1}
          </span>
        );
      })}

      <span>⏭️</span>
    </>
  );
};

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  const fetchAllProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleSelectedPage = (pageNumber: number) => {
    setSelectedPage(pageNumber);
    // fetchAllProducts();
  };

  return (
    <>
      <h1>Products</h1>

      <div className="productWrapper">
        {products
          ?.slice(selectedPage * 10 - 10, selectedPage * 10)
          ?.map((item) => (
            <div className="productThumbnail" key={item?.id}>
              <img src={item?.thumbnail} alt={item?.title} />
            </div>
          ))}
      </div>

      <Pagination
        selectedPage={selectedPage}
        pageSize={products?.length / 10}
        onClick={(pnumber) => handleSelectedPage(pnumber)}
      />
    </>
  );
};
