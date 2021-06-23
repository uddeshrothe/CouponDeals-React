import axios from 'axios'

const COUPONS_REST_API_URL = 'http://localhost:9003/getCoupon'

class CouponService{

    getCoupons(){
        return axios.get(COUPONS_REST_API_URL);
    }
}

export default new CouponService();