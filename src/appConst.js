export const API_PATH = "http://localhost:9090";
export const COLOR = {
  primary: "#6366f1",
  textWhite: "#fff",
};
export const STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED_ERROR: 401,
  FORBIDDEN_ERROR: 403,
};

export const PATH = {
  PROFILE: { code: 1, name: "", path: "/profile" },
  LIST_PRODUCT: { code: 1, name: "Quần áo", path: "/list_product" },
  HOME: { code: 1, name: "Trang chủ", path: "/" },
};

export const STATUS_ORDER = [
  { code: 1, name: "Chờ người dùng xác nhận" },
  { code: 2, name: "Chờ người bán xác nhận" },
  { code: 3, name: "Chờ lấy hàng" },
  { code: 4, name: "Chờ giao hàng" },
  { code: 5, name: "Đã giao" },
];

export const OBJECT_STATUS_ORDER = {
  CHO_NGUOI_DUNG_XAC_NHAN: { code: 1, name: "Chờ người dùng xác nhận" },
  CHO_NGUOI_BAN_XAC_NHAN: { code: 2, name: "Chờ người bán xác nhận" },
  CHO_LAY_HANG: { code: 3, name: "Chờ lấy hàng" },
  CHO_GIAO_HANG: { code: 4, name: "Chờ giao hàng" },
  DA_GIAO: { code: 5, name: "Đã giao" },
};
