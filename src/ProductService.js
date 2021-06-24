import axios from 'axios'

const PRODUCTS_REST_API_URL = 'http://localhost:9006/getProduct'

class ProductService{

    getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
}

export default new ProductService();