import "./auth.styles.scss"
import SignUp from "../../sign-up/sign-up.components"
import SignIn from "../../sign-in/sign-in-form.components"

const Authentication = () => {
  
    return (
        <div>
            <div className="auth-container">
                <SignIn/>
                <SignUp/>
            </div>
        </div>
    )
}
export default Authentication