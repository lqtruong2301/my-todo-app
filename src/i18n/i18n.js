// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Dark Mode": "Dark Mode",
            "Light Mode": "Light Mode",
            Language: "Language",
            English: "English",
            Vietnamese: "Vietnamese",
            "Add New": "Add New",
            'Update': "Update",
            'Please do not leave it blank!' : "Please do not leave it blank!",
            'Enter your task' : "Enter your task",
        },
    },
    vi: {
        translation: {
            "Dark Mode": "Chế độ tối",
            "Light Mode": "Chế độ sáng",
            Language: "Ngôn ngữ",
            English: "Tiếng Anh",
            Vietnamese: "Tiếng Việt",
            "Add New": "Thêm Mới",
            'Update': "Cập Nhật",
            'Please do not leave it blank!' : "Vui lòng không để trống!",
            'Enter your task' : "Nhập nhiệm vụ của bạn",

        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Ngôn ngữ mặc định
    interpolation: {
        escapeValue: false, // React đã mặc định bảo vệ chống XSS
    },
});

export default i18n;
