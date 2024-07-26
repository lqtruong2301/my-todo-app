// src/api/api.js
import axios from 'axios';

const API_URL = "https://66a2476d967c89168f1f775a.mockapi.io"; // Thay thế bằng URL API của bạn

// Lấy danh sách các nhiệm vụ
export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
    throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
  }
};

// Tạo nhiệm vụ mới
export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Cập nhật nhiệm vụ
export const updateTask = async (id, updates) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Xóa nhiệm vụ
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error.response ? error.response.data : error.message);
    throw error;
  }
};
