import axios from "../utils/axios";

export const createOrder = async (orderData, headers) => {
  const response = await axios.post("/orders", orderData, {
    headers,
  });
  return response.data;
};

export const getAllOrders = async () => {
  const response = await axios.get("/orders");
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await axios.get(`/orders/${id}`);
  return response.data;
};

export const getOrdersByUserId = async (userId) => {
  const response = await axios.get(`/orders/user/${userId}`);
  return response.data;
};

export const getOrdersBySellerId = async (sellerId) => {
  const response = await axios.get(`/orders/seller/${sellerId}`);
  return response.data;
};
