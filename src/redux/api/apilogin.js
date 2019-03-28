import instance from '../../helper/helper';

const loginApi = (email, password) => {
    return instance.post('api/user/login', {email, password})
}
export default loginApi