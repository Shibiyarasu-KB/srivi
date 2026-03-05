export const Auth=(navigate)=>{
    const user=localStorage.getItem('user');
    if(user){
        navigate('/');
    }
    return JSON.parse(user);
};