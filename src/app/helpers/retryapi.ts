export const retry = async <T>(
  fn: () => Promise<T>, 
  retries: number = 6,
  delay: number = 3000
): Promise<T> => {
  try {
    return await fn(); 
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}, waiting for ${delay}ms`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retry(fn, retries - 1, delay * 2);
    } else {
      console.error("Max retries reached:", error);
      throw error;
    }
  }
};

