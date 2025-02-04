import { createGeminiClient } from "~/utils/gemini";

export const useGemini = () => {
  const config = useRuntimeConfig();
  return createGeminiClient(config.public.GEMINI_API_KEY);
};
