import axios from "axios";
import { logSuccess, logError } from "./authSlice";


export const singIn = values => dispatch => {
	
    axios.post(`http://challenge-react.alkemy.org`, values).then(
        res => {
            console.log(res);
            if (res.data){
                dispatch(logSuccess(res.data));
            }
        }
    ).catch(e =>{
        console.log(e);
        dispatch(logError(e));

    })
     
    
  };
  