import React, {useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const [newPage, setNewPage] = useState(1)
    const [newCount, setNewCount] = useState(4)

    const lastPage = Math.ceil(totalCount/itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        setNewPage(page)
        console.log(page)
       // onChange(page, 7 )
        onChange(newPage, newCount)
        console.log(event)
    }

    const onChangeSelect = (event: any) => {
        console.log(event)
        setNewCount(event)
        onChange(newPage, newCount)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}  //active page
                count={lastPage}  //total pages
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                //onChange={onChangeSelect}
                onChangeOption={onChangeSelect}

            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
