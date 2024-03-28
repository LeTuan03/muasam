import { SvgIcon } from "@material-ui/core";
import {
  ColorLens,
  Dashboard,
  FormatSize,
  LibraryAdd,
  SaveOutlined,
  ShoppingCart,
  SignalCellularConnectedNoInternet0BarTwoTone,
} from "@material-ui/icons";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const items = () => {
  const roleBasedItems = [
    {
      title: "Overview",
      path: "/admin",
      icon: (
        <SvgIcon fontSize="small">
          <Dashboard />
        </SvgIcon>
      ),
    },
    {
      title: "Quản lý sản phẩm",
      path: "/admin/list-products",
      icon: (
        <SvgIcon fontSize="small">
          <ShoppingCart />
        </SvgIcon>
      ),
    },
    {
      title: "Quản lý loại sản phẩm",
      path: "/admin/category-product",
      icon: (
        <SvgIcon fontSize="small">
          <LibraryAdd />
        </SvgIcon>
      ),
    },
    {
      title: "Quản lý màu sản phẩm",
      path: "/admin/colors",
      icon: (
        <SvgIcon fontSize="small">
          <ColorLens />
        </SvgIcon>
      ),
    },
    {
      title: "Quản lý size sản phẩm",
      path: "/admin/sizes",
      icon: (
        <SvgIcon fontSize="small">
          <FormatSize />
        </SvgIcon>
      ),
    },
    {
      title: "Mã giảm giá",
      path: "/admin/sales",
      icon: (
        <SvgIcon fontSize="small">
          <SaveOutlined />
        </SvgIcon>
      ),
    },
  ];

  return roleBasedItems.filter(Boolean);
};
