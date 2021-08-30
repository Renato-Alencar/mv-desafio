import api from "./index";

export async function getData(): Promise<void> {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
