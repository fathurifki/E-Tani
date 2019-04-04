import instance from '../../helper/helper';

const homeApi = (param, token) => {
     return instance.get('/api/product/:category', 
        { headers: {'Authorization' : `${token}`}, 
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
}

export default homeApi; 