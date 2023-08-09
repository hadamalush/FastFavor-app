import Wrapper from "../styles/Wrapper";
import classes from "./MainNavigation.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const MainNavigation = () => {
	const [isShow, setIsShow] = useState(false);

	const showResNavHandler = () => {
		setIsShow(!isShow);
	};

	const navbar = isShow ? classes.navResponsive : classes.navbar;
	const navItem = isShow ? classes.navItemRes : classes.navItem;
	return (
		<nav className={classes.navigation}>
			<Wrapper>
				<div className={classes.respMenu}>
					<NavLink to='/' className={classes["nav-brand"]}>
						<i className='fa-solid fa-truck-fast'></i>
						<p>
							<span className={classes["brand-title"]}>Fast</span>Favor
						</p>
					</NavLink>

					<button
						className={classes["navbar-toggler"]}
						type='button'
						onClick={showResNavHandler}>
						<i className='fa-solid fa-bars-staggered'></i>
					</button>
				</div>

				<ul className={navbar}>
					<li className={navItem}>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li className={navItem}>
						<NavLink to='recommended'>Recommended</NavLink>
					</li>
					<li className={navItem}>
						<NavLink to='contact'>Contact</NavLink>
					</li>
					<li className={navItem}>
						<NavLink to='register'>Register</NavLink>
					</li>
				</ul>
			</Wrapper>
		</nav>
	);
};

export default MainNavigation;
