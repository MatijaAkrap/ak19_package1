import { MouseEventHandler } from 'react';

interface IButtonProps {
	kind?: string;
	id?: string;
	type?: 'button' | 'submit' | 'reset';
	name?: string;
	value?: string | number | readonly string[];
	disabled?: boolean;
	label?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButtonProps) => {
	console.log('Bok Matija!');
	return (
		<button
			className={`btn btn--${props.kind} CTA`}
			data-id={props.id}
			type={props.type}
			name={props.name}
			value={props.value}
			disabled={props.disabled}
			onClick={props.handleClick}>
			<h4>{props.label}</h4>
		</button>
	);
};
export default Button;
