import React, { Component } from 'react';
import {connect} from 'react-redux';

class Item extends Component{

  render() {
    const {products} = this.props;
    var pathname = this.props.location.pathname;
    var item_id = pathname.substring(1);
    var the_item = null;
    
    {products.map(item=>{
      if(item.attributes.friendly_id === item_id){
        the_item = item;
      }
      return the_item;
    })};

    return (
      <div dangerouslySetInnerHTML={{ __html: the_item.attributes.html_description }} />
    )
  }
}

const mapStateToProps = (state)=>({
  products: state.product.products,
  isLoading: state.product.isLoading,
});

export default connect(mapStateToProps)(Item);
