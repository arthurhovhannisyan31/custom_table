// deps
import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
// components
import DragControl from '_/components/Table/components/DragControl'
import { TableContext } from '_/components/Table'
// helpers
import { ICellProps } from '_/components/Table/types'
import './style.scss'

// todo fix types
const TableHeadCell: React.FC<ICellProps> = ({ value, name, column }) => {
  // useContext
  const { filter, handleUpdateFilter } = React.useContext(TableContext)

  const filterValueIdx = filter.sort.findIndex((el) => el.name === column)
  const sorted = filter.sort[filterValueIdx]?.value || 'desc'

  const handleChange = React.useCallback(() => {
    const newSort = [...filter.sort]
    if (filterValueIdx !== -1) {
      newSort[filterValueIdx] = {
        name: column as string,
        value: sorted === 'asc' ? 'desc' : 'asc',
      }
    } else {
      newSort.push({ name: column as string, value: 'asc' })
    }

    handleUpdateFilter({
      sort: newSort,
    })
  }, [handleUpdateFilter, column, filter.sort, filterValueIdx, sorted])

  return (
    <th>
      <div className="tableHeadCell">
        <Button size="small" className="button" onClick={handleChange}>
          <DragControl id={name || ''} column={column || ''} draggable>
            {value}
          </DragControl>
          <ArrowDownwardIcon
            fontSize="small"
            className={clsx('arrow', {
              'arrow-hide': sorted !== 'asc',
              'arrow-revert': sorted === 'asc',
            })}
          />
        </Button>
      </div>
    </th>
  )
}

export default TableHeadCell
