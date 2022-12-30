import { baseURLFetch } from "../../service/ApiUrl"


export async function GetGames() {
    const options = {
        method: "GET",
        // body: JSON.stringify(forms),
        headers: {
            "Content-type": "Application/json",
            // "Authorization": `Bearer ${token}`
        },
    }

    const request = await fetch(`${baseURLFetch}$games`, options)
        .then((res) => res.json())
        .then((res) =>{
            console.log(res)
            return res
        })
        .catch((err) => {console.log(err)})

        return request

}