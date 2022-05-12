export interface IDealer {
  id?: number;
  name?: string | null;
  address?: string | null;
}

export const defaultValue: Readonly<IDealer> = {};
