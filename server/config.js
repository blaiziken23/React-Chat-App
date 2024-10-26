import "dotenv/config";

export const config = {
  cors: {
    origin: process.env.ClientURL,
  },
};
