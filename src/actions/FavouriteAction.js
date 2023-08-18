import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../constants/FavouriteConstants";  
import axios from "axios";

// Add to favourites
export const addFavouriteItemsToCart =
  (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v2/product/${id}`);

    dispatch({
      type: ADD_TO_FAVOURITE,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    localStorage.setItem(
      "favouriteItems",
      JSON.stringify(getState().favourite.favouriteItems)
    );
  };

// Delete from favourites
export const deleteFavouriteItemsToCart =
  (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITE,
      payload: id,
    });

    localStorage.setItem(
      "favouriteItems",
      JSON.stringify(getState().favourite.favouriteItems)
    );
    };
  