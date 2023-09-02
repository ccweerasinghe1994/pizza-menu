import { FC } from 'react';
import Pizza from '../Pizza/Pizza';
import classes from 'classnames';

const menuStyles = classes('flex flex-col items-center gap-[4rem]');
const menuTextStyles = classes(
	'inline-block py-4 border-t-[2px] border-b-[2px] border-solid border-current text-[2.4rem] uppercase tracking-[3px] font-medium',
);
const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'prosciutto.jpg',
		soldOut: false,
	},
];
const Menu: FC = () => {
	return (
		<main className={menuStyles}>
			<h2 className={menuTextStyles}>Our Menu</h2>
			<p>
				Authentic italian cuisine. six creative dishes to chose from. All from
				our stone oven. All made with love.
			</p>
			<div className={'list-none grid gap-[4.8rem] grid-cols-2'}>
				{pizzaData.map((pizza) => (
					<Pizza
						key={pizza.name}
						name={pizza.name}
						ingredients={pizza.ingredients}
						imageUrl={pizza.photoName}
						price={pizza.price}
						soldOut={pizza.soldOut}
					/>
				))}
			</div>
		</main>
	);
};

export default Menu;
