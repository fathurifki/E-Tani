import instance from '../../helper/helper';

const cartApi = (token) => {
    return instance.get('/api/transaction/cart', 
       { headers: {'Authorization' : `Bearer ${token}`} 
   })
}

export default cartApi; 