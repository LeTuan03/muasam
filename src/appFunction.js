import { createFilterOptions } from "@mui/material";
import { PATH } from "./appConst";

export const getTitlePage = (text) => {
  switch (text) {
    case PATH.HOME.path:
      return PATH.HOME.name;
    case PATH.LIST_PRODUCT.path:
      return PATH.LIST_PRODUCT.name;
    case PATH.LIST_PRODUCT.path:
      return PATH.PROFILE.name;

    default:
      return PATH.HOME.name;
  }
};

const filterAutocomplete = createFilterOptions();
export const filterOptions = (options, params, isNew, displayLable) => {
  params.inputValue = params.inputValue?.trim();
  let filtered = filterAutocomplete(options, params);

  if (isNew && filtered?.length === 0) {
    filtered.push({ [displayLable]: "Thêm mới", code: "New" });
  }

  return filtered;
};

export const getCurrentUser = () => {
  let user = JSON.parse(localStorage.getItem("currentuser"));
  return user;
};

export const convertToDate = (milliseconds) => {
  var date = new Date(milliseconds);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return day + "/" + month + "/" + year;
};

export const convertDate = (inputDate) => {
  // Chuyển inputDate thành kiểu Date
  var inputDateObj = new Date(inputDate);

  // Lấy ngày, tháng, năm
  var year = inputDateObj.getFullYear();
  var month = inputDateObj.getMonth() + 1; // Tháng bắt đầu từ 0
  var day = inputDateObj.getDate();

  // Format lại ngày thành chuỗi "YYYY-MM-DD"
  var newDate =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;

  return newDate;
};

// export const convertToISOString = (dateString) => {
//   const date = new Date(dateString);
//   const isoString = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
//   return isoString;
// };
