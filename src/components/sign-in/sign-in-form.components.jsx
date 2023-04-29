import { useState } from "react"
import FormInput from "../form-input/form-input.components"
import Button from "../button/button.components"
import {
    signInWithGooglePopup,
    createUserDocFromAuth,
    signInWithEmailandPasswordFromUser
} from "../../utils/firebase/firebase.utils"

import "./sign-in-form.styles.scss"
const defaultFormField = {
    Email: "",
    Password: "",

}
const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormField)
    //console.log(formFields)
    const { Email, Password } = formFields


    const resetFromField = () => {
        setFormFields(defaultFormField)
    }
    const signInwithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocFromAuth(user)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await signInWithEmailandPasswordFromUser(Email,Password)
            console.log(res)
            resetFromField()
        }
        catch (e) {
            console.log(e.code)
            switch(e.code){
                case "auth/wrong-password":
                    alert('please check your password')
                    break
                case "auth/user-not-found":
                    alert('Not your can be found with this email')
                    break
            }
            
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">

            <h2>Already have an account!</h2>
            <span>Sign In with ur Email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required onChange={handleChange}
                    name="Email"
                    value={Email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="Password"
                    value={Password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={"google"} onClick={signInwithGoogle}>Google Sign In</Button>

                </div>  
            </form>
        </div>
    )
}
export default SignIn