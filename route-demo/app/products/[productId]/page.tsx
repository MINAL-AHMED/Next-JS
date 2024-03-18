const ProductDetails = ({ params }: { params: { productId: String } }) => {
  return (
    <div>
      <h1>Products Details Page {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
