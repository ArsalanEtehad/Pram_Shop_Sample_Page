import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded: false,
    }
  }
  addDefaultSrc(ev){
    // ev.target.src = 'https://www.interserver.net/tips/wp-content/uploads/2016/10/404error.jpeg'
    ev.target.src = 'https://cdn.dribbble.com/users/932640/screenshots/2470471/jq.gif'
  }


  componentDidMount(){
    const url = 'http://localhost:3001/data'
    fetch(url) //just a free json host to use now
    .then(res=>res.json())
    .then((json)=>{
      this.setState({
        isLoaded:true,
        items: json,
      })

    });
  }

  render() {
    var {items, isLoaded} = this.state;
    if(!isLoaded){
      return <div>is Loading... </div>;
    }
    else{
      return (
        <div className="App">
          <ul>
            {items.map((item)=>(
              <div key={item.id}>

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
          </ul>
        </div>
      );
    }
  }
}

export default App;
