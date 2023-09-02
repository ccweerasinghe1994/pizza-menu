import { FC } from 'react';

const Footer: FC = () => {
	const closeHour = 12;
	return (
		<footer className={'text-2xl'}>
			<div className={'flex flex-col items-center gap-[2.4rem]'}>
				<p>we are open until {closeHour}:00. Come visit us or order online</p>
				<button
					className={
						'text-inherit w-1/3 border-none text-[1.4rem] font-medium bg-amber-300 hover:bg-amber-400 py-[1.4rem] px-[3.2rem] cursor-pointer transition-all'
					}>
					Order Now
				</button>
			</div>
		</footer>
	);
};
export default Footer;
