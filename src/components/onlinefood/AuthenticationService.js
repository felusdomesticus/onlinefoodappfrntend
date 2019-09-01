import axios from 'axios';
class AuthenticationService{

    executeBasicAuthentication(username,password){
        return axios.get('http://localhost:8034/basicauthentication',{headers:{authorization:this.createBasicAuthentication(username,password)}});
    };

    createBasicAuthentication(username,password){
        return 'Basic '+ window.btoa(username+":"+password);
    };

    registerSuccessfullLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(username,password);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return false;
        return true;
    }

    setupAxiosInterceptors(username,password){
        axios.interceptors.request.use((config)=>{
            if(this.isUserLoggedIn())
                config.headers.authorization = this.createBasicAuthentication(username,password);
            return config;
        })
    }
}

export default new AuthenticationService()