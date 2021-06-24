import React from 'react'
import ProductService from '../services/ProductService'

import cimg from '../components/images/cp.png'


class ProductComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    //To call Rest Api
    componentDidMount() {
        ProductService.getProducts().then((response) => {
            this.setState({ products: response.data })
        });

    }

    render() {
        return (
            <>
                <h1 className='text-center mb-5'>Products List</h1>
                <div className=' grid row g-4'>

                    <div className="col d-flex">{
                        this.state.products.map(
                            product =>
                                <div className="card" >
                                    <img src={cimg} class="card-img-top" alt={cimg} />

                                    <div class="card-body text-center" key={product.id}>
                                        <h5 class="card-title text-center font-weight-bold">{product.id}</h5>
                                        <p class="card-text">{product.productName}</p>

                                        <section className="section">
                                            <p className="card-text" onChange={this.onChange} >{product.productCost}</p>
                                        </section>

                                    </div>
                                </div>
                        )}
                    </div>

                </div>

                

            </>
        )
    }
}

export default ProductComponent;

