import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import { Button, Grid, IconButton, Tooltip } from "@material-ui/core";
import { tableIcons } from '../../../utils/tableIcon';
import ManageOrderDialog from './ManageOrderDialog';
import { Delete, Edit } from '@material-ui/icons';
import { deleteSize, getAllOrder, getAllSize } from './ManageOrderServices';
import ConfirmDialog from '../../../common/ConfirmDialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { localization } from '../../../utils/localization';
import { convertToDate } from '../../../../appFunction';

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
            {/* <Tooltip
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
            </Tooltip> */}
        </>
    );
}
function ManageOrder() {

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
            const data = await deleteSize(item);
            toast.success("Xóa thành công!")
            updatePageData();
            handleClose();
        } catch (error) {

        }
    }

    const updatePageData = async () => {
        try {
            const data = await getAllOrder();
            setListItem(data?.data)
        } catch (error) {

        }
    }
    let columns = [
        {
            title: 'Thao tác',
            field: '',
            align: "center",
            width: 100,
            render: (rowData) => <MaterialButton
                item={rowData}
                onSelect={(rowData, method) => {
                    if (0 === method) {
                        handleEdit(rowData);
                    } else if (1 === method) {
                        handleDelete(rowData?.idSize);
                    } else {
                        alert("Call Selected Here:" + rowData?.idSize);
                    }
                }}
            />
        },
        {
            title: 'Ngày đặt hàng',
            field: 'orderAt',
            width: 140,
            render: (rowData) => convertToDate(rowData?.orderAt)
        },
        { title: 'Trạng thái đơn hàng', field: 'statusOrder', width: 300 },
        {
            title: 'Người đặt hàng',
            field: 'totalPrice',
            width: 190,
            render: (rowData) => rowData?.profile?.fullName
        },
        { title: 'Thành tiền', field: 'totalFinal', width: 190 },
        { title: 'Loại hình thanh toán', field: 'orderType', width: 290 },
        { title: 'Trạng thái thanh toán', field: 'statusPayment', width: 290 },
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
            {open && <ManageOrderDialog item={item} open={open} handleClose={handleClose} updatePageData={updatePageData} />}
            {openDelete && <ConfirmDialog open={openDelete} handleYesClick={handleYesClick} handleClose={handleClose} />}
            <div className='mt-3'>
                <MaterialTable
                    title="Danh sách đơn hàng"
                    columns={columns}
                    data={listItem}
                    icons={tableIcons}
                    localization={localization}
                    options={{
                        sorting: false,
                        rowStyle: (rowData) => ({
                            backgroundColor:
                                rowData.tableData.id % 2 === 1 ? "#EEE" : "#FFF",
                        }),
                    }}
                />
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    )
}

export default ManageOrder
