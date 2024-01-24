import { createContext, useContext,useEffect,useReducer } from "react";

const intialState={
    user:null,
    role:null,
    token:null
}

export const authContext = createContext(intialState)

const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN_START':
          return{
            user:null,
            role:null,
            token:null
          };

          case "LOGIN_SUCCESS":
            return{
                user:action.payload.user,
                role:action.payload.role,
                token:action.payload.token
            };

           case "LOGOUT":
            return{
            user:null,
            role:null,
            token:null
            }
        default:
            return StaticRange;
        }
}


export const AuthContextProvider=({children})=>{
    const [state,dispatch]= useReducer(authReducer,intialState)
    return <authContext.Provider value={{user:state.user,token:state.token,role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
}