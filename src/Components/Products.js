import React, { Component } from 'react'

export class Products extends Component {
 
  alertShow(){
    alert('No Links ditected in products.json')
  }

  render() {
    let { title, description, imageUrl, } = this.props;
    return (
      <div className='container mainCard my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href='/'  onClick={this.alertShow} className="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
