import { type FieldError } from 'react-hook-form';

export const ErrorMessage = ({ error }: { error: FieldError }) => (
    <p className="absolute mt-1 block text-xs text-red">{error.message}</p>
);
