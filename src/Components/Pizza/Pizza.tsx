import { FC } from 'react';
import { z } from 'zod';

const PizzaScheme = z.object({
	name: z.string(),
	ingredients: z.string(),
	imageUrl: z.string(),
	price: z.number(),
	soldOut: z.boolean(),
});
type PizzaT = z.infer<typeof PizzaScheme>;
const Pizza: FC<PizzaT> = (props) => {
	PizzaScheme.parse(props);
	const { name, ingredients, imageUrl, price, soldOut } = props;
	return (
		<div className={'flex gap-[3.2rem]'}>
			<img
				className={`w-[12rem] aspect-square align-self-start ${
					soldOut ? 'opacity-80 grayscale' : ''
				}	`}
				src={imageUrl}
				alt="pizza"
			/>
			<div className={'flex flex-col gap-[0.8rem] px-0 py-[0.4rem]'}>
				<h3 className={'text-[2rem] font-normal'}>{name}</h3>
				<p className={'text-[1.4rem] font-light italic mb-auto'}>
					{ingredients}
				</p>
				<span className={'block text-[1.6rem]'}>
					{soldOut ? 'SOLD OUT' : price}
				</span>
			</div>
		</div>
	);
};

export default Pizza;
