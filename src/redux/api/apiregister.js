import instance from '../../helper/helper';

const registerApi = (email, password) => {
    return instance.post('api/user/register', {email, password})
}
export default registerApi