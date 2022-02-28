
const AuthReducer = (state,action)=>{
console.log('authReducer')
console.log(action, 'action')
 switch(action.type){
     
     case 'Login' :{
         console.log('login',  action.payload)
         return {
             ...state,
             accessToken : action.payload.accessToken,
             user : action.payload.user
         }
    
     }
     case 'socketID':{
         return {
             ...state,
             socketID : action.payload.socketID
         }
     }
     case  'Logout':{
         return null
         
     }
     default : {
         return 'error'
     }
   
 } 
 
}
export default  AuthReducer