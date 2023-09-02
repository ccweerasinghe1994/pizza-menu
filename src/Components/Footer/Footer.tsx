import { FC } from 'react';

const Footer: FC = () => {
	return (
		<footer className={'text-2xl'}>
			{new Date().toLocaleTimeString()} We currently open
		</footer>
	);
};
export default Footer;
