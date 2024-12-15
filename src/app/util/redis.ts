import clientPromise from "@/app/lib/redis";

export const setKeyValue = async (
  key: string,
  value: string,
  expirationInSeconds?: number,
): Promise<void> => {
  const client = await clientPromise;
  try {
    if (expirationInSeconds) {
      await client.set(key, value, { EX: expirationInSeconds });
    } else {
      await client.set(key, value);
    }
  } catch (error) {
    console.error(`Error setting value in Redis: ${error}`);
    throw error;
  }
};

export const deleteKey = async (key: string): Promise<void> => {
  const client = await clientPromise;
  try {
    const result = await client.del(key);
    if (result === 0) {
      console.warn(`Key "${key}" does not exist.`);
    }
  } catch (error) {
    console.error(`Error deleting key in Redis: ${error}`);
    throw error;
  }
};

export const getKeyValue = async (key: string): Promise<string | null> => {
  const client = await clientPromise;
  try {
    return await client.get(key);
  } catch (error) {
    console.error(`Error getting value from Redis: ${error}`);
    throw error;
  }
};
