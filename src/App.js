import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from './state/product/actions';
import ProductGrid from './components/ProductGrid/index'
// import './App.css';


class App extends Component {
  componentWillMount(){
    setTimeout(()=>{
      this.props.fetchProducts();
    },1000);
  }


  render() {
    const {products, isLoading} = this.props;

    if(isLoading){
      return <h3>Loading...</h3>
    }
    return (
      <div>
        <h1> Sample Pram Shop</h1>
        <ProductGrid
          products={products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  products: state.product.products,
  isLoading: state.product.isLoading,

});

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
