import axios from "axios";

export function getGroceries(){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/groceries")
            return dispatch({
                type: "GET_GROCERIES",
                payload: json.data
            })
        } catch(e){
            console.log(e)
        }
    }
}