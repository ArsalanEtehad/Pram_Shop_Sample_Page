import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from './state/product/actions';
import './App.css';


class App extends Component {
  componentWillMount(){
    setTimeout(()=>{
      this.props.fetchProducts();
    },1000);
  }


  render() {
    const {products} = this.props;
    if(products !== undefined){
      return (
        <main id="app">
          <div class="main-content">
            <article class="product-list">


              {products.map((item)=>(
                <div class="product" key={item.id}>
                  <a href={item.links.external} id={item.id} data-id={item.id} data-togl-trigger="productpopup" data-togl-actioned="false">
                    <div class="product_image">
                      <img src={item.attributes.image_urls[0]} alt={item.attributes.friendly_id} title={item.attributes.title}/>
                      <span class="product_image_promotion">
                      </span>
                    </div>
                    <div class="product_content">
                      <span class="product_content_brand">{item.attributes.brand_name}</span>
                      <h2 class="product_content_name">{item.attributes.title}</h2>
                      <span class="product_content_store">
                        <span>from </span>
                        {item.attributes.spider_name}
                      </span>
                      <span class="product_content_price price">${item.attributes.price}</span>
                    </div>
                  </a>
                </div>
              )
            )}



            </article>
          </div>
        </main>

      );


    }else{
      return <div>is Loading... </div>;    }
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
