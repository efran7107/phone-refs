import { ComponentProps } from 'react';

export const TextInput = ({ labelText, inputProps }: { labelText: string; inputProps: ComponentProps<'input'> }) => {
  return (
    <div>
      <label htmlFor='name'>{labelText}:</label>
      <input type='text' {...inputProps} />
    </div>
  );
};
