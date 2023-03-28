import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";
export const Data = () => {
  const {
    data: allProductsData,
    isLoading,
  } = useGetAllProductsQuery();

  const { data: singleProductData } = useGetProductQuery("iphone");

  if (isLoading) return <h1> Loading...</h1>;
  return (
    <>
      <h1> All Products</h1>
      <ul>
        {allProductsData.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <h1> Single Product</h1>
      <ul>
        <li>
          {singleProductData.products[0].title}
        </li>
      </ul>
    </>
  )
};
