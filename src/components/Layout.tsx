import React from 'react';

import clsx from 'clsx';

export type LayoutProps = React.PropsWithChildren<{
    background: string;
}>;

export const Layout = ({ children, background }: LayoutProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
