// deps
import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
// components
import { TableContext } from '_/components/Table'
// helpers
import { ICellProps, EFilterOrder } from '_/components/Table/types'
import DragControl from '_/components/Table/components/DragControl'
import Draggable from '_/components/Table/components/Draggable'
import './style.scss'

const TableHeadCell: React.FC<ICellProps> = ({ value, name, column }) => {
  // useContext
  const { sort, handleSetSort } = React.useContext(TableContext)
  const order = sort?.name === column ? sort?.order : EFilterOrder.asc

  const handleChange = React.useCallback(() => {
    const newSort =
      sort.name === column
        ? {
            ...sort,
            order:
              order === EFilterOrder.desc
                ? EFilterOrder.asc
                : EFilterOrder.desc,
          }
        : {
            name: column as string,
            order,
          }
    handleSetSort(newSort as Record<string, string | EFilterOrder>)
  }, [handleSetSort, column, sort, order])

  // todo fix default values

  return (
    <th>
      <DragControl id={name || ''} column={column || ''} head>
        <div className="tableHeadCell">
          <Button size="small" className="button" onClick={handleChange}>
            <Draggable id={name || ''} column={column || ''} draggable>
              {value}
            </Draggable>
            <ArrowDownwardIcon
              fontSize="small"
              className={clsx('arrow', {
                'arrow-hide': column !== sort?.name,
                'arrow-revert': order === EFilterOrder.desc,
              })}
            />
          </Button>
        </div>
      </DragControl>
    </th>
  )
}

export default TableHeadCell
