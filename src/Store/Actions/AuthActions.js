const AsyncAuthMehtod = (reqBody, url, setErrorMessage, setLoaderState) => {
    setLoaderState(true);
    console.log(reqBody);
    return (dispatch, getState) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
                'Access-Control-Allow-Credentials': 'true',
                //'Access-Control-Allow-Methods' : 'GET, POST, PATCH, OPTIONS',
                // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
             },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(reqBody)
        }).then (response => response.json()
        ).then(response => { 
            if(response.status === 'success') {
                let expiryTimer = getState().expiryTimer;
                let timer = new Date(response.data.expiresAt).getTime() - Date.now() + 10000;

                if(expiryTimer) {
                    clearTimeout(expiryTimer);                    
                }

                expiryTimer = setTimeout(() => {
                    dispatch({type:'LOGOUT'});
                }, timer)

                setLoaderState(false);                 
                dispatch({type:'LOGIN', name: response.data.user, email: response.data.email, expiresAt: response.data.expiresAt, isLoggedin: true, expiryTimer: expiryTimer});
            }
            else {
                setLoaderState(false);
                setErrorMessage(response.message);                
            }
        }).catch(err=>{
            dispatch({type: 'ERROR', error: err.message});
        })
    }
}

export const login = (email, password, setErrorMessage, setLoaderState) => {
    return AsyncAuthMehtod({email: email, password: password}, 'http://localhost:3001/heyCart/api/v1/user/login', setErrorMessage, setLoaderState);
}

export const signup = (name, email, password, confirmPassword, setErrorMessage, setLoaderState) => {
    return AsyncAuthMehtod({name: name, email: email, password: password, confirmPassword: confirmPassword}, 'http://localhost:3001/heyCart/api/v1/user/signup', setErrorMessage, setLoaderState);
}