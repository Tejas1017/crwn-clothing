import { useState } from "react"
import FormInput from "../form-input/form-input.components"
import Button from "../button/button.components"
import { 
    createUserWithEmailandPasswordFromUser,
     createUserDocFromAuth 
    } from "../../utils/firebase/firebase.utils"

import "./sign-up.styles.scss"    
const defaultFormField = {
    displayName: "",
    Email: "",
    Password: "",
    confirmPassword: ""

}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormField)
    //console.log(formFields)
    const { displayName, Email, Password, confirmPassword } = formFields


    const resetFromField = () => {
        setFormFields(defaultFormField)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (Password !== confirmPassword) {
            alert('Check your password')
            return
        }
        try {
            const { user } = await createUserWithEmailandPasswordFromUser(Email, Password)
            //console.log(userDocRef)
            await createUserDocFromAuth(user, { displayName })

            resetFromField()

        }
        catch (e) {
            if (e.code === "auth/email-already-in-use") {
                alert('Email is already in use!')
            }
            else {
                console.log("error", e)
            }
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormFields({ ...formFields, [name]: value })

    }

    return (
        <div className="sign-up-container">

            <h2>Don't have an account?</h2> 
            <span>Sign up with ur Email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text"
                    label="Display Name"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

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

                <FormInput 
                    label="Confirm password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />

                <Button type="submit">SIGN UP</Button>
            </form>
        </div>
    )
}
export default SignUp