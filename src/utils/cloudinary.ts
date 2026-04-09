const CLOUD_NAME = "dic9hw3ie";

export const getImageUrl = (path: string, width = 600) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${path}`;
};