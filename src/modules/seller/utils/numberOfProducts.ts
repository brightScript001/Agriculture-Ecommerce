const aggregateTotalByClass = (products, productClass = null) => {
  return products.reduce((acc, product) => {
    if (productClass && product.productClass !== productClass) return acc;

    if (!acc[product.productClass]) {
      acc[product.productClass] = 0;
    }
    acc[product.productClass] += product.numberOfProducts;

    return acc;
  }, {});
};
