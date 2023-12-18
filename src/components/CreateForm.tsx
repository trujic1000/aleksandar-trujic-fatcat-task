import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import { useForm, FieldValues, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Alert } from './Alert';
import { Button } from './Button';

type CreateFormProps<
    TFormData extends FieldValues,
    TMutationData,
    TMutationError,
    TMutationContext,
> = {
    validationSchema: z.ZodSchema<TFormData>;
    useMutation: ({
        onSuccess,
    }: {
        onSuccess?: (data: TMutationData) => void;
    }) => UseMutationResult<
        TMutationData,
        TMutationError,
        TFormData,
        TMutationContext
    >;
    renderForm: (methods: UseFormReturn<TFormData>) => React.ReactNode;
    successMessage: string;
};

export function CreateForm<
    TFormData extends FieldValues,
    TMutationData,
    TMutationError,
    TMutationContext,
>({
    validationSchema,
    useMutation,
    renderForm,
    successMessage,
}: CreateFormProps<
    TFormData,
    TMutationData,
    TMutationError,
    TMutationContext
>) {
    const methods = useForm<TFormData>({
        resolver: zodResolver(validationSchema),
    });

    const { mutate, isSuccess, isPending, isError, error } = useMutation({
        onSuccess: () => methods.reset(),
    });

    const onSubmit = methods.handleSubmit((data: TFormData) => mutate(data));

    return (
        <form onSubmit={onSubmit} className="space-y-8">
            {renderForm(methods)}
            <Button disabled={isPending}>Submit</Button>
            {isSuccess && <Alert message={successMessage} />}
            {isError && (
                <p>
                    Error:{' '}
                    {error instanceof Error ? error.message : 'Unknown error'}
                </p>
            )}
        </form>
    );
}
