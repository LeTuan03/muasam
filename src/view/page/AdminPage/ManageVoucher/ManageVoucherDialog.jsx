import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, TextField } from '@material-ui/core';
import { insertVoucher, updateVoucher } from './ManageVoucherServices';
import { toast } from 'react-toastify';
import { convertDate } from '../../../../appFunction';

export default function ManageVoucherDialog(props) {
    let {
        open,
        item,
        handleClose,
        updatePageData
    } = props;
    const [dataState, setDataState] = useState({});

    const handleChange = (event) => {
        let { name, value } = event.target;
        setDataState((pre) => ({ ...pre, [name]: value }))
    }

    const convertDataSubmit = (value) => {
        return {
            idVoucher: value?.idVoucher,
            nameVoucher: value?.nameVoucher,
            code: value?.code,
            totalPriceApply: value?.totalPriceApply,
            startDate: convertDate(value?.startDate),
            endDate: convertDate(value?.endDate),
            percent: value?.percent,
            quantity: value?.quantity,
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (dataState?.idVoucher) {
                const data = await updateVoucher(convertDataSubmit(dataState));
                toast.success("Cập nhật thành công !")
            } else {
                const data = await insertVoucher(convertDataSubmit(dataState));
                toast.success("Thêm mới thành công !")
            }
        } catch (error) {
            console.log(error)
        } finally {
            handleClose();
            updatePageData();
        }
    }

    useEffect(() => {
        setDataState({
            ...item,
            startDate: convertDate(new Date(item?.startDate)),
            endDate: convertDate(new Date(item?.endDate)),
        })
    }, [item?.idCategories])
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            minWidth="md"
            width="md"
            fullWidth
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle id="alert-dialog-title">Thêm mới/Cập nhật phiếu giảm giá</DialogTitle>
                <DialogContent className="custom-scroll-content">
                    <Grid container spacing={2}>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Tên phiếu"
                                name='nameVoucher'
                                value={dataState?.nameVoucher}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Mã phiếu"
                                name='code'
                                value={dataState?.code}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Ngày có hiệu lực"
                                name='startDate'
                                type='date'
                                value={dataState?.startDate}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Ngày kết thúc"
                                name='endDate'
                                type='date'
                                value={dataState?.endDate}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Số lượng"
                                name='quantity'
                                type="number"
                                value={dataState?.quantity}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Phần trăm giảm giá"
                                name='percent'
                                type="number"
                                value={dataState?.percent}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Tổng giá áp dụng"
                                name='totalPriceApply'
                                type="number"
                                value={dataState?.totalPriceApply}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/* <Grid item md={9} sm={12} xs={12}>
                            <TextField
                                className='w-full'
                                label="Miêu tả"
                                name='des'
                                value={dataState?.des}
                                onChange={handleChange}
                            />
                        </Grid> */}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ textTransform: "none" }} size='small' color="primary" variant='contained'>
                        Hủy
                    </Button>
                    <Button type='submit' style={{ textTransform: "none" }} size='small' color="secondary" variant='contained'>
                        Lưu
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
