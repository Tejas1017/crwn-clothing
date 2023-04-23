import { Outlet,Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as Crownlogo } from "../../../assests/crown.svg"
import './navigation.styles.scss'
const Navigation = ()=>{
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <Crownlogo className="logo"/>
          </Link>
          <h1>Freash Threads</h1>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
              Shop
            </Link>
          </div>
          {/* <h1>Fresh Threads</h1> */}
        </div>
      <Outlet/>
      </Fragment>
    )
  }
  export default Navigation