import React from 'react';

type Props = {
    message: string;
    hideAfter?: number;
};

export const Alert = ({ message, hideAfter = 5000 }: Props) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, hideAfter);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div
            className="p-4 mb-4 text-sm text-mainGreen rounded-lg bg-gray80"
            role="alert"
        >
            <span className="font-medium">{message}</span>
        </div>
    );
};
