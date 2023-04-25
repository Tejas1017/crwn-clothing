import { signInWithGooglePopup ,createUserDocFromAuth} from "../../../utils/firebase/firebase.utils"


const SignIn = () => {
    const logGoogleIn = async () => {
        const {user} = await signInWithGooglePopup()
       const userDocRef= await createUserDocFromAuth(user)
    }
    return (
        <div>

            <div>
                <h1>
                    Sign-in is working!!
                </h1>
            </div>
            <div>
                <button onClick={logGoogleIn}>SignIn</button>
            </div>

        </div>

    )
}
export default SignIn