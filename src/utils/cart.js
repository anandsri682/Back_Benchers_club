// src/utils/cart.js

export const getCartKey = (userId) => `cart_${userId}`;

export const getCart = (userId) => {
  const key = getCartKey(userId);
  return JSON.parse(localStorage.getItem(key)) || {};
};

export const saveCart = (userId, cart) => {
  localStorage.setItem(getCartKey(userId), JSON.stringify(cart));
};
