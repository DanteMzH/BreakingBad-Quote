import { breakBadApi } from "./breakBadApi"


export const Lista = async() => {
    const {data} = await breakBadApi.get();

    console.log(data);

    return data;
}
