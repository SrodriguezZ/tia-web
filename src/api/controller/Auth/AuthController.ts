
import { URL_AUTHENTICATION } from "../../url";
import { Post } from "../../MethodPost";
import { AuthInterface, IMessageLogin } from "../../../interface/auth/inde";

interface IAuth {
    postAuthentication : (auth : AuthInterface) => Promise<IMessageLogin>;
}

export const authController = (): IAuth  => {


    const postAuthentication = async (auth:AuthInterface ) : Promise<IMessageLogin> => {

        try {
            const response = await Post<IMessageLogin>(URL_AUTHENTICATION, ({
                userName: auth.userName,
                password:auth.password
            }))
           
            return Promise.resolve(response);
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    return {
        postAuthentication
    }
}