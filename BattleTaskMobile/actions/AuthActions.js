import Axios from 'axios'

export const storeUserData = (username, password, thenAction) => {
    Axios.post('/signup', {
        userName: username,
        password: password
    }).then(()=>{
        thenAction();
    }).catch((err)=>{
        console.log(err);
    });
}

export const checkIfUsernameTaken = (username, takenAction, notTakenAction)=>{
    Axios.get('http://192.168.1.188:5000/', {
        params: {
            userName: username
        }
    }).then(resp=>{
        if(resp.data.length>0){
            // the username is already taken
            takenAction();
        } else {
            // the username hasnt been taken
            notTakenAction();
        }
    });
}

export const authenticateUser = (username, password, 
    authedAction, notAuthedAction, notAUserAction)=>{
        Axios.get('http://192.168.1.188:5000/', {
            params: {
                userName: username
            }
        }).then(resp=>{
            if(resp.data.length>0){
                // if username exists
                if(resp.data[0].userName===username && 
                resp.data[0].password===password){
                    // if password is correct
                    authedAction();
                } else {
                    // if password is incorrect
                    notAuthedAction();
                }
            }else {
                notAUserAction();
            }
        })
    }