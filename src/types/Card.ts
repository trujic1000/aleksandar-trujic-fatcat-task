export type Card = {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
};
