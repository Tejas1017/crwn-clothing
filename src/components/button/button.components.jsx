import "./button.styles.scss"

const Button_type_class = {
    google :"google-sign-in",
    inverted:"inverted"
}

const Button = ({children,buttonType,...otherprops}) =>{
    return (
        <button className={`button-container ${Button_type_class[buttonType]}`}
        {...otherprops}>{children}</button>
    )
}

export default Button