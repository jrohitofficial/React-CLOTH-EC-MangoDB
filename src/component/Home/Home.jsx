import React, {useEffect} from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
// import bg from "../../Assets/background.jpg";
// import bg2 from "../../Assets/background2.jpg";
import bg from "../../Assets/shopping2.webp";
import bg2 from "../../Assets/shopping4.jpg";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";


const Home = () => {
  const dispatch = useDispatch();
  const { products,error,loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(getProduct());
 
  }, [dispatch]);
  
  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <>
          <MetaData title="trendywear" />
          <Header />

          {/* Carousel */}
          <div className="banner">
            <Carousel className="new">
              
              <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="bgImg" alt="" />
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="bgImg" alt="" />
            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                
              </div>
             
              
             
              
            </div>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
