import axios from "axios"

export function reducer(state, action){
    console.log('reducer call', action)
 if(action.type === 'login'){
     if(action.payload == 'pat'){
        console.log('you are admin ')
        return false
     }else{
         console.log('no payload')
         return {userName : 'Noob'}
     }
    
 }
 if(action.type === 'logout'){
    return true
 }
 return state
}

// const response = await axios.post(
//     "http://blogservice.herokuapp.com/api/login",
//     user
//   );
//   // set the state of the user
//   setUser(response.data)
//   // store the user in localStorage
//   localStorage.setItem('user', response.data)
//   console.log(response.data)


