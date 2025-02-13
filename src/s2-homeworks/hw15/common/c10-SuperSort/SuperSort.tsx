import React from 'react'
import downIconSvg from './down_icon.svg'
import upIconSvg from './up_icon.svg'
import noneIconSvg from './up_down_icon.svg'


// добавить в проект иконки и импортировать
const downIcon = downIconSvg
const upIcon = upIconSvg
const noneIcon = noneIconSvg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...


    let  a = sort.charAt(0)

 if (a ==='') {return up}
   if (a ==='0') {return down}
   if (a ==='1') {return ''}



    return up // исправить

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{marginLeft: "5px"}}
        >
            {value}

            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
