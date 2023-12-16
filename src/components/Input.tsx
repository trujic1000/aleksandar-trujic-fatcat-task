import React from 'react';

import { type FieldError } from 'react-hook-form';

import { cn } from '@homework-task/utils';

import { ErrorMessage } from './ErrorMessage';

export type InputProps = {
    label?: string;
    fieldsetClassName?: string;
    labelClassName?: string;
    error?: FieldError;
} & React.ComponentProps<'input'>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id = '',
            label,
            fieldsetClassName = '',
            labelClassName = '',
            className,
            error,
            required = false,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <fieldset className={fieldsetClassName}>
                {label && (
                    <label
                        htmlFor={id}
                        className={cn([
                            'pb-2 block font-bold text-black',
                            disabled && 'text-gray40',
                            required && "after:text-red after:content-['_*']",
                            required &&
                                disabled &&
                                "after:text-red after:content-['_*']",
                            labelClassName,
                        ])}
                    >
                        {label}
                    </label>
                )}
                <div className="relative px-1">
                    <input
                        ref={ref}
                        id={id}
                        className={cn([
                            'h-12 w-full rounded-2xl bg-gray10 py-0 px-4',
                            'flex flex-row items-center gap-2',
                            'hover:bg-gray20 focus:outline-none focus:ring focus:ring-gray60',
                            error && 'border-2 border-red',
                            className,
                        ])}
                        disabled={disabled}
                        {...props}
                    />
                </div>
                {error && <ErrorMessage error={error} />}
            </fieldset>
        );
    }
);

Input.displayName = 'Input';
