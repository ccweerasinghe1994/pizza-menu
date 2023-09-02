import { FC } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import classes from 'classnames';
// import { Routes } from '../../main';

// const LinkRoutesStyles = classes('flex px-3 py-1 rounded bg-blue-200');
// const commonStyles = classes('px-3 py-1');
// const navLinkStyles = classes(
// 	'flex justify-items-start gap-10 px-3 h-10 text-xl flex-wrap mb-3',
// );
const Header: FC = () => {
	// const { pathname } = useLocation();
	// const pathNameConverted = pathname as Routes;
	// const isHome = pathNameConverted === Routes.Home || pathname === '/';
	// const isAbout = pathNameConverted === Routes.About;
	// const isLogin = pathNameConverted === Routes.Login;
	//
	// return (
	// 	<nav className={navLinkStyles}>
	// 		<Link className={isHome ? LinkRoutesStyles : commonStyles} to={'/home'}>
	// 			Fast React Pizzas
	// 		</Link>
	// 		<Link className={isAbout ? LinkRoutesStyles : commonStyles} to={'/about'}>
	// 			About
	// 		</Link>
	// 		<Link className={isLogin ? LinkRoutesStyles : commonStyles} to={'/login'}>
	// 			Login
	// 		</Link>
	// 	</nav>
	// );

	return (
		<header className={'self-stretch'}>
			<h1
				className={
					'text-pizzaYellow uppercase text-center text-[5.2rem] font-light tracking-[3px] relative w-full block ' +
					'before:block before:content[""] before:h-[3px] before:w-[4rem] before:bg-pizzaYellow before:absolute before:top-[calc(50%-1px)] before:left-0' +
					'after:block after:content[""] after:h-[3px] after:w-[4rem] after:bg-pizzaYellow after:absolute after:top-[calc(50%-1px)] after:right-0'
				}>
				Fast React Pizzas
			</h1>
		</header>
	);
};

export default Header;
