export const localization = {
  body: {
    emptyDataSourceMessage: "Không có dữ liệu để hiển thị",
    addTooltip: "Thêm",
    deleteTooltip: "Xóa",
    editTooltip: "Chỉnh sửa",
    filterRow: {
      filterTooltip: "Lọc",
    },
    editRow: {
      saveTooltip: "Lưu",
      cancelTooltip: "Hủy",
      deleteText: "Bạn có chắc chắn muốn xóa dòng này?",
    },
  },
  grouping: {
    placeholder: "Kéo tiêu đề cột và thả vào đây để nhóm theo cột đó",
  },
  header: {
    actions: "Hành động",
  },
  pagination: {
    labelDisplayedRows: "{from}-{to} của {count}",
    labelRowsSelect: "dòng",
    labelRowsPerPage: "Dòng mỗi trang:",
    firstAriaLabel: "Trang đầu tiên",
    firstTooltip: "Trang đầu tiên",
    previousAriaLabel: "Trang trước",
    previousTooltip: "Trang trước",
    nextAriaLabel: "Trang tiếp theo",
    nextTooltip: "Trang tiếp theo",
    lastAriaLabel: "Trang cuối cùng",
    lastTooltip: "Trang cuối cùng",
  },
  toolbar: {
    addRemoveColumns: "Thêm hoặc xóa cột",
    nRowsSelected: "{0} dòng được chọn",
    showColumnsTitle: "Hiển thị các cột",
    showColumnsAriaLabel: "Hiển thị các cột",
    exportTitle: "Xuất",
    exportAriaLabel: "Xuất",
    exportName: "Xuất ra CSV",
    searchTooltip: "Tìm kiếm",
    searchPlaceholder: "Tìm kiếm",
  },
  rowStyle: (rowData) => ({
    backgroundColor: rowData.tableData.id % 2 === 1 ? "#EEE" : "#FFF",
  }),
};
