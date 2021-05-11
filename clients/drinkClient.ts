import { API_BASE_URL } from "../constants";

export const fetchData = async (drink: string) => {
  try {
    if (!drink) throw "Empty string";
    const response = await fetch(`${API_BASE_URL}search.php?s=${drink}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
