// deps
import { IColumn, TRow } from '_/components/Table/types'

// eslint-disable-next-line
export const cellPropsSelector = (row: TRow, columns: IColumn[]) =>
  Object.entries(row).map(([name, value]) => {
    let formatValue = value
    const formatFn = columns.find((column) => column.name === name)?.format
    if (formatFn) formatValue = formatFn(formatValue)
    return {
      name,
      value: formatValue as string,
    }
  })
