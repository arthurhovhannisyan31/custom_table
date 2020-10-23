// deps
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import Table from '_/components/Table'
import Loading from '_/components/Loading'
import ErrorMessage from '_/components/ErrorMessage'
// helpers
import { revisionsSelector } from '_/pages/Main/helpers'
import { columns, rowsPerPageOptions } from '_/components/Table/helpers'
import { getRevisionsThunk } from '_/store/revisions/thunks'
import {
  TRevisionKeys,
  IRevisionsFilterProps,
  ERevisionTypes,
} from '_/store/revisions/types'
import { EFilterOrder } from '_/store/types'
import './style.scss'

const Main: React.FC = () => {
  const rowsPerPageDefaultOption = rowsPerPageOptions[0]
  // react-redux
  const { loading, data, error, total } = useSelector(revisionsSelector)

  const dispatch = useDispatch()
  // useMemo
  const columnsInitOrder = React.useMemo(() => columns.map((el) => el.name), [])

  // useState
  const [page, setPage] = React.useState<number>(1)
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    rowsPerPageDefaultOption
  )
  const [sort, setSort] = React.useState<Record<string, string | EFilterOrder>>(
    {}
  )
  // useCallback
  const handleChangeColumnsOrder = React.useCallback(
    (arr: string[]) => setColumnsOrder(arr),
    []
  )
  const handleSetPage = React.useCallback((val: number) => setPage(val), [])
  const handleSetRowsPerPage = React.useCallback(
    (val: number) => setRowsPerPage(val),
    []
  )
  const handleSetSort = React.useCallback(
    (val: Record<string, string | EFilterOrder>) => setSort(val),
    []
  )
  const offset = React.useMemo(() => Math.max(0, (page - 1) * rowsPerPage), [
    page,
    rowsPerPage,
  ])
  const limit = React.useMemo(
    () =>
      total > 0
        ? Math.min(page * rowsPerPage, total)
        : rowsPerPageDefaultOption,
    [page, rowsPerPageDefaultOption, rowsPerPage, total]
  )

  // useMemo
  const filter = React.useMemo<IRevisionsFilterProps>(
    () => ({
      offset,
      limit,
      sort: {
        ...sort,
        type: ERevisionTypes?.[sort.name as TRevisionKeys],
      },
    }),
    [offset, limit, sort]
  )

  const rows = React.useMemo(() => data?.[`${offset}-${limit}`], [
    data,
    offset,
    limit,
  ])

  React.useEffect(() => {
    if (!rows || filter.sort?.name) dispatch(getRevisionsThunk(filter))
    // eslint-disable-next-line
  }, [filter])

  return (
    <div className="main-container">
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <Table
        loading={loading}
        columnsOrder={columnsOrder}
        onChangeColumnsOrder={handleChangeColumnsOrder}
        rows={rows || []}
        columns={columns}
        rowsPerPageOptions={rowsPerPageOptions}
        count={total}
        page={page}
        onPageChange={handleSetPage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleSetRowsPerPage}
        sort={sort}
        handleSetSort={handleSetSort}
      />
    </div>
  )
}

export default Main
