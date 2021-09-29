import "./index.css";
import Product from "../../types/Product";
import { Grid, Paper, Typography } from "@material-ui/core";

interface ProductInfoProps {
  product: Product;
}

/**
 * Product info oreview
 * @returns ProductInfo preview UI elements
 */
const ProductPreview: React.FC<ProductInfoProps> = (props) => {
  var listPrice = 0.0;
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    listPrice = props.product.childSkus[0].listPrice;
  }

  var salePrice = 0.0;
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    salePrice = props.product.childSkus[0].salePrice;
  }

  let largeImageUrl = "";
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    largeImageUrl = props.product.childSkus[0].largeImageUrl;
  }

  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img src={largeImageUrl} alt={props.product.name} />
          </Paper>
        </Grid>

        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>{props.product.description}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">{listPrice}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">{salePrice}</Typography>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={12} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPreview;
