import React from 'react'
import CouponService from '../services/CouponService'
import cimg from '../components/images/cp.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class CouponComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            coupons: []
        }
    }

    //To call Rest Api
    componentDidMount() {
        CouponService.getCoupons().then((response) => {
            this.setState({ coupons: response.data })
        })
    }

    state = { value: '', copied: false };

    onChange = ({ target: { value } }) => {
        this.setState({ value, copied: false });
    };

    onCopy = () => {
        this.setState({ copied: true });
    };

    render() {
        return (
            <div className='row my-5'>
                <h1 className='text-center mb-5 '>Coupons List</h1>
                
                <div className="col-sm-12 col-10 mx-auto d-flex">{
                    this.state.coupons.map(
                        coupon =>
                            <div className="card gy-4 " >
                                <img src={cimg} class="card-img-top" alt={cimg} />

                                <div class="card-body" key={coupon.id}>
                                    <h5 class="card-title font-weight-bold">{coupon.id}</h5>
                                    <p class="card-text">{coupon.desc}</p>

                                    <section className="section">
                                        <p className="card-text" onChange={this.onChange} >{coupon.couponCode}</p>
                                    </section>

                                    <section className="section">
                                        <CopyToClipboard onCopy={this.onCopy} text={coupon.couponCode}>
                                            <button className="btn btn-warning">Copy</button>
                                        </CopyToClipboard>
                                    </section>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}

export default CouponComponent;

