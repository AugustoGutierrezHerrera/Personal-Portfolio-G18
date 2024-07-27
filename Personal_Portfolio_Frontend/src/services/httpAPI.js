import {BASE_URL} from "./config";

export async function createDataForm(from){

    const response  = await fetch(BASE_URL, {
        method:"POST",
        body: JSON.stringify(from),
        headers: {"Content-Type": "application/json",}
    })

    // const date = await response.json()
    // return date
}