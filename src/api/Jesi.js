import { breakBadApi } from "./breakBadApi";

export const Jesi = async( )=>{
    const {data} = await breakBadApi.get()

    const otro = data.map(datitos =>({

        yea : datitos.author
    }
    ));

    console.log(otro);

    return otro
}