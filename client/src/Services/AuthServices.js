import axios from 'axios'

const registerUser =  async (data)=>{
    return await axios.post('/user/register', data)

}

const loginUser = async(data)=>{
    return await axios.post('/user/login',data)

}

const AuthServices ={registerUser , loginUser}

export default AuthServices