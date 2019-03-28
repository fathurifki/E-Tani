import instance from '../../helper/helper';

const homeApi = (token) => {
     return instance.get('/api/product/:category', 
        { headers: {'Authorization' : `Bearer ${token}`} 
    })
}

export default homeApi; 