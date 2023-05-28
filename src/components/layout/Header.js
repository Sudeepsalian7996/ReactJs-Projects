import React from 'react'
import HeaderCartIcon from './HeaderCartIcon'
import classes from './Header.module.css'
import banner from '../../assets/banner.jpg'

function Header(){
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Family Restaurent</h1>
                <HeaderCartIcon />
            </header>
            <div className={classes['main-image']}>
                <img src={banner} alt='delicious banner' />
            </div>
        </React.Fragment>
    )
}
export default Header;