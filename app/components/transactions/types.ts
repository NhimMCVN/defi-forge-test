export type TransactionType = 'Stake' | 'Borrow' | 'Lend';

export interface TransactionItem {
  username: string;
  type: TransactionType;
  token: string;
  amount: number;
  date: string;
}
