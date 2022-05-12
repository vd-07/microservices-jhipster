export interface ICar {
  id?: number;
  make?: string | null;
  model?: string | null;
  price?: string | null;
}

export const defaultValue: Readonly<ICar> = {};
