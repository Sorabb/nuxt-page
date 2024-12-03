import axios from 'axios';
export const getDashboard = async () => {
    const { data } =  await axios.get('/api/dashboard');
    if (data.code == 200) {
        return data.data;
    } else if (data.code == 500) {
        navigateTo('/login');
    }
}