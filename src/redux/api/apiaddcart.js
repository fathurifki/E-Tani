import instance from '../../helper/helper';

const addCartApi = (user_id, product_id, amount, token) => {
    return instance.post('/api/transaction/cart', {user_id, product_id, amount, headers: {'Authorization' : `Bearer ${token}`} 
   })
}

export default addCartApi