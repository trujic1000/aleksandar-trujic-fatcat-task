import React from 'react';

import { cn } from '@homework-task/utils';

type Props = React.ComponentProps<'button'>;

export const Button = ({
    children,
    onClick,
    className,
    ...props
}: React.PropsWithChildren<Props>) => {
    return (
        <button
            className={cn([
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className,
            ])}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};
