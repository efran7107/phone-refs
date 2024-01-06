import { useState, useRef } from 'react';

export const PhoneInput = () => {
	const [phoneInputState, setPhoneInputState] = useState(['', '', '']);

	const refs = [useRef(), useRef(), useRef()];
	const ref0 = refs[0];
	const ref1 = refs[1];
	const ref2 = refs[2];

	const createOnChangeHandlet = (index) => (e) => {
		const lengths = [3, 3, 4];
		const currentMaxLength = lengths[index];
		const nextRef = refs[index + 1];
		const prevRef = refs[index - 1];
		const value = e.target.value;

		const shouldGoToNextRef = currentMaxLength === value.length && nextRef !== undefined;
		const shouldGoToPrevRef = value.length === 0 && prevRef !== undefined;

		const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
			index === phoneInputIndex ? e.target.value : phoneInput
		);

		if (shouldGoToNextRef) {
			nextRef.current?.focus();
		} else {
			e.target.maxLength = lengths[index];
			console.log(e.target.maxLength);
		}

		if (shouldGoToPrevRef) {
			prevRef.current?.focus();
		}
		setPhoneInputState(newState);
	};

	return (
		<div>
			<label htmlFor=''>Phone Number: </label>
			<div
				style={{
					display: 'flex',
				}}>
				<input
					type='text'
					ref={ref0}
					style={{ width: 40 }}
					value={phoneInputState[0]}
					onChange={createOnChangeHandlet(0)}
				/>
				-
				<input
					type='text'
					ref={ref1}
					style={{ width: 40 }}
					value={phoneInputState[1]}
					onChange={createOnChangeHandlet(1)}
				/>
				-
				<input
					type='text'
					ref={ref2}
					style={{ width: 40 }}
					value={phoneInputState[2]}
					onChange={createOnChangeHandlet(2)}
				/>
			</div>
		</div>
	);
};
