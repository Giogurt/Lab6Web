import React from "react";
import ProductPreview from "../../components/ProductPreview";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

interface ListState {
  products: Product[];
}

/**
 * Product List Component
 * @extends {Component<Props, State>}
 */
export class ProductList extends React.Component<{}, ListState> {
  state = {
    products: [] as Product[],
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    let productList: any[] = [];
    this.state.products.forEach((product) => {
      productList.push(<ProductPreview product={product} />);
    });

    return productList;
  }

  /**
   * Runs when the component is mounted - Gets all the products
   */
  componentDidMount() {
    ProductService.getAll()
      .then((response) => {
        const products = response.data;
        console.log(products);
        this.setState({ products });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ProductList;
