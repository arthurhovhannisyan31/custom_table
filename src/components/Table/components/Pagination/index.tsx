// deps
import React from 'react'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
// helpers
import './style.scss'

interface IProps {
  rowsPerPageOptions: number[]
  count: number
  rowsPerPage: number
  page: number
  onPageChange: (val: number) => void
  onRowsPerPageChange: (val: number) => void
  className?: string
}

const Pagination: React.FC<IProps> = ({
  rowsPerPageOptions,
  page,
  rowsPerPage,
  className,
  count,
  onRowsPerPageChange,
  onPageChange,
}) => {
  const options = React.useMemo(
    () =>
      rowsPerPageOptions.map((el) => ({
        value: (el as unknown) as string,
        label: (el as unknown) as string,
      })),
    [rowsPerPageOptions]
  )
  const handleChangeRowsPerPage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onRowsPerPageChange(+event.target.value)
      onPageChange(1)
    },
    [onRowsPerPageChange, onPageChange]
  )

  const handleChangePage = React.useCallback(
    (actionType: string) => () =>
      onPageChange(actionType === 'increment' ? page + 1 : page - 1),
    [onPageChange, page]
  )

  const decrementDisabled = page === 1
  const incrementDisabled = page === Math.ceil(count / rowsPerPage)

  return (
    <div className={clsx('pagination-container', className)}>
      <div>Rows per page</div>
      <TextField
        id="standard-select-currency"
        className="textField"
        select
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
        InputProps={{
          className: 'textFieldInput',
          disableUnderline: true,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div>
        {Math.max(1, (page - 1) * rowsPerPage)}-
        {Math.min(page * rowsPerPage, count)} of {count}
      </div>
      <div>
        <IconButton
          classes={{
            disabled: 'buttonDisabled',
          }}
          onClick={handleChangePage('decrement')}
          disabled={decrementDisabled}
        >
          <ChevronLeftIcon className="icon" />
        </IconButton>
        <span>{page}</span>
        <IconButton
          classes={{
            disabled: 'buttonDisabled',
          }}
          onClick={handleChangePage('increment')}
          disabled={incrementDisabled}
        >
          <ChevronRightIcon className="icon" />
        </IconButton>
      </div>
    </div>
  )
}

export default Pagination
