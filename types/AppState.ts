import { Drink } from "./Drink";

export type AppState = {
  isLoading: boolean;
  query: string | undefined;
  drinks: Drink[];
  error?: boolean | null;
  errorMessage?: string | null;
}
