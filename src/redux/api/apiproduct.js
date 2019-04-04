import instance from '../../helper/helper';

const productApi = (token) => {
    return instance.get('/api/product',
    {headers: {'Authorization' : `${token}`},
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    })
} 

export default productApi