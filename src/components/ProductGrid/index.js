import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, NavLink} from 'react-router-dom'
import ItemDet from './ItemDet'



const ProductGrid = ({products})=>(
    <div>
      <h1><NavLink to="/">Pram Shop (sample)</NavLink></h1>
      <Wrapper>
        {products.map(item=>(
          <ProductWrapper key={item.id}>
          
            <NavLink to={item.attributes.friendly_id} >
              <CropImage>
                <ProductImage
                  src={item.attributes.image_urls[0]}
                  title={item.attributes.friendly_id}
                />
              </CropImage>
            </NavLink>

            <Route path = {`/${item.attributes.friendly_id}`} component={ItemDet}/>
            <ProductContent>
              <ProductContentBrand>{item.attributes.brand_name}</ProductContentBrand>
              <ProductName>
                {item.attributes.title}
              </ProductName>
              <ProductContentStore>
                <p>from </p>
                {item.attributes.spider_name}
              </ProductContentStore>
              <ProductContentPrice>${item.attributes.price}</ProductContentPrice>
            </ProductContent>
          </ProductWrapper>
        ))}
      </Wrapper>
    </div>

);


//
ProductGrid.propTypes={
  products: PropTypes.arrayOf(PropTypes.shape({
    attributes: PropTypes.shape({
      brand_image: PropTypes.string,
      brand_name: PropTypes.arrayOf(PropTypes.string),
      categories: PropTypes.arrayOf(PropTypes.string),
      domain: PropTypes.string,
      friendly_id: PropTypes.string,
      html_description: PropTypes.string,
      image_urls: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      prices: PropTypes.arrayOf(PropTypes.string),
      spider_name: PropTypes.string,
      title: PropTypes.string
    }),
    id: PropTypes.string,
    links: PropTypes.shape({
      external: PropTypes.string,
      self: PropTypes.string,
      selfRelative: PropTypes.string,
      share: PropTypes.string
    }),
    type: PropTypes.string
  })).isRequired,
}



const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 100%;
  line-height: 1.55;
  overflow-y: scroll;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

`;

const ProductWrapper = styled.div`
  flex-basis: 24%;
  margin-bottom: 20px;
`;

const CropImage = styled.div`
  height: 400px;
  width: 300px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  height: auto;
  width: 300px;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  vertical-align: middle;
`;


const ProductName = styled.div`
  margin: 10px 0;
  font-size: .7rem;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ProductContent = styled.div`
  flex-basis: 24%;
  margin-bottom: 20px;
`;

const ProductContentBrand = styled.div`
  display: block;
  -ms-flex-order: 1;
  order: 1;
  margin-top: 5px;
  font-size: .6rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const ProductContentStore = styled.div`
  display: block;
  margin-top: 1px;
  color: #787878;
  font-size: .6rem;
  text-align: center;
`;

const ProductContentPrice = styled.div`
  display: block;
  text-align: center;
  font-size: .9rem;
  display: inline-block;
  padding: 0 3px;

`;




export default ProductGrid;
