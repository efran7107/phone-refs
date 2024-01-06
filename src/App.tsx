import { createRef, useState } from 'react';
import './App.css';
import { TextInput } from './TextInput';
import { PhoneInput } from './PhoneInput';

function App() {
	const [nameInput, setNameInput] = useState('');

	const nameRef = createRef<HTMLInputElement>();

	const reset = () => {
		setNameInput('');
	};
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					reset();
				}}>
				<button onClick={() => {}}>Scroll to Slogan</button>
				<h3>Information form</h3>
				<TextInput
					labelText={'name'}
					inputProps={{
						onChange: (e) => {
							setNameInput(e.target.value);
						},
						value: nameInput,
						placeholder: 'Rick Sanchez',
						ref: nameRef,
					}}
				/>
				<PhoneInput />
				<input
					type='submit'
					value='Sumbit'
				/>
			</form>
		</>
	);
}

export default App;
