import { useMutation } from "@tanstack/react-query";
import getEnv from "utils/env";


const  fetchVerification = async(data: any) => {

    const BASE_URL = getEnv("VITE_API_BASE_URL")
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${data.token}`
            },          

        })
        const result =  response.json()

        if(!response.ok){
            throw new Error(`${result}`)
        }

        return result;
    } catch (error) {
        throw new Error(error as string)
        
    }
}
interface useVerificationProp {
    onSuccess: (data: unknown, variables: unknown, context: unknown) => void,
    onError: (data: unknown, variables: unknown, context: unknown) => void
}

const useVerification = (props: useVerificationProp ) => {
    const { onSuccess: onSuccessOverride,
        onError: onErrorOverride,
        ...rest
    } = props;

    return useMutation<any, unknown, any>({
        mutationFn: fetchVerification,
        onSuccess: (data, variables, context) =>{
            onSuccessOverride(data, variables, context)
        },
        onError: (error, variables, context) => {
            if(onErrorOverride) {
                onErrorOverride(error, variables, context)
            }
        },
        ...rest
    })
}

export default useVerification