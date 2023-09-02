import { FC } from 'react';
import Pizza from '../Pizza/Pizza';
import classes from 'classnames';

const menuStyles = classes('flex flex-col items-center gap-[4rem]');
const menuTextStyles = classes(
	'inline-block py-4 border-t-[2px] border-b-[2px] border-solid border-current text-[2.4rem] uppercase tracking-[3px] font-medium',
);
const Menu: FC = () => {
	return (
		<main className={menuStyles}>
			<h2 className={menuTextStyles}>Our Menu</h2>
			<Pizza />
			<Pizza />
		</main>
	);
};

export default Menu;
