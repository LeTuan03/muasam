import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import { Button, Grid, IconButton, Tooltip } from "@material-ui/core";
import { tableIcons } from '../../../utils/tableIcon';
import ManageProductDetailDialog from './ManageProductDetailDialog';
import { Delete, Edit } from '@material-ui/icons';
import { deleteProductDetails, getProductDetails } from './ManageProductDetailServices';
import ConfirmDialog from '../../../common/ConfirmDialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { localization } from '../../../utils/localization';

function MaterialButton(props) {
    const item = props.item;
    return (
        <>
            <Tooltip
                title={"Chỉnh sửa"}
                placement="right-end"
                enterDelay={300}
                leaveDelay={200}
            >
                <IconButton
                    size="small"
                    color="primary"
                    onClick={() => props.onSelect(item, 0)}
                >
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip
                title={"Xóa"}
                placement="right-end"
                enterDelay={300}
                leaveDelay={200}
            >
                <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => props.onSelect(item, 1)}
                >
                    <Delete />
                </IconButton>
            </Tooltip>
        </>
    );
}
function ManageProductDetail() {

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [listItem, setListItem] = useState([]);
    const [item, setItem] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenDelete(false);
        setItem(null);
    };

    const handleEdit = (item) => {
        setItem(item);
        handleClickOpen();
    }
    const handleDelete = (id) => {
        setItem(id);
        setOpenDelete(true);
    }

    const handleYesClick = async () => {
        try {
            const data = await deleteProductDetails(item);
            toast.success("Xóa thành công!")
            updatePageData();
            handleClose();
        } catch (error) {

        }
    }

    const updatePageData = async () => {
        try {
            const data = await getProductDetails();
            setListItem(data?.data)
        } catch (error) {

        }
    }
    let columns = [
        {
            title: 'Thao tác',
            field: '',
            width: 100,
            render: (rowData) => <MaterialButton
                item={rowData}
                onSelect={(rowData, method) => {
                    if (0 === method) {
                        handleEdit(rowData);
                    } else if (1 === method) {
                        handleDelete(rowData?.idProductDetails);
                    } else {
                        alert("Call Selected Here:" + rowData?.idProductDetails);
                    }
                }}
            />
        },
        {
            title: 'Tên sản phẩm',
            field: 'product',
            render: (rowData) => {
                return <>
                    <div class="flex items-center gap-4">
                        <img class="w-10 h-10 rounded" src={rowData?.product?.imageMain} />
                        <div class="font-medium ">
                            <div>{rowData?.product?.productName}</div>
                            <div class="text-sm">{rowData?.product?.productDes}</div>
                        </div>
                    </div>
                </>
            }
        },
        {
            title: 'Màu sắc', field: 'color', width: 190, render: (rowData) => rowData?.color?.colorName
        },
        {
            title: 'Kích cỡ', field: 'size', width: 190, render: (rowData) => rowData?.size?.sizeName
        },
        {
            title: 'Số lượng còn lại', field: 'productRemain', width: 190
        },
    ]
    useEffect(() => {
        updatePageData();
    }, [])
    return (
        <div className='p-10'>
            <Grid container spacing={2}>
                <Grid item><Button onClick={handleClickOpen} variant='contained' color="primary" size='small' ><span className='normal-case'>Thêm mới</span></Button></Grid>
                <Grid item><Button variant='contained' color="primary" size='small' ><span className='normal-case'>Tìm kiếm nâng cao</span></Button></Grid>
            </Grid>
            {open && <ManageProductDetailDialog item={item} open={open} handleClose={handleClose} updatePageData={updatePageData} />}
            {openDelete && <ConfirmDialog open={openDelete} handleYesClick={handleYesClick} handleClose={handleClose} />}
            <div className='mt-3' >
                <MaterialTable
                    options={{
                        sorting: false,
                        rowStyle: (rowData) => ({
                            backgroundColor:
                                rowData.tableData.id % 2 === 1 ? "#EEE" : "#FFF",
                        }),
                    }}
                    title="Chi tiết sản phẩm"
                    columns={columns}
                    data={listItem}
                    icons={tableIcons}
                    localization={localization}
                />
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    )
}

export default ManageProductDetail
