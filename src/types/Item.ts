import { type Card } from './Card';

export type Item = Omit<Card, 'background' | 'onClick' | 'buttonText'>;
