import React from 'react';

import { type FieldError } from 'react-hook-form';

import { cn } from '@homework-task/utils';

import { ErrorMessage } from './ErrorMessage';

export type TextAreaProps = {
    label?: string;
    fieldsetClassName?: string;
    labelClassName?: string;
    error?: FieldError;
} & React.ComponentProps<'textarea'>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
                    <textarea
                        ref={ref}
                        id={id}
                        cols={30}
                        rows={5}
                        className={cn([
                            'h-40 w-full rounded-2xl bg-gray10 p-4 focus:outline-none focus:ring focus:ring-gray60',
                            'hover:bg-gray30 focus:outline-none focus:ring focus:ring-gray60 data-[placeholder]:text-gray50',
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

TextArea.displayName = 'TextArea';
