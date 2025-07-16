import axios from "axios";

const RestApiInstance=axios.create(
    "https://reqres.in/",
    {headers:{
        "Authorization":"",
        "Content-Type":"application/json"
    }}
)

export default RestApiInstance