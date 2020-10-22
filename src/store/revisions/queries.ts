// helpers
import { IRevisionsFilterProps } from '_/store/revisions/types'
import { handlePagination, handleSort } from '_/store/revisions/helpers'

// eslint-disable-next-line
export const fetchTestData = async ({
  limit,
  offset,
  sort,
}: IRevisionsFilterProps) => {
  // async call
  const {
    default: { content, total },
  } = await import('_/static/testData.json')

  // handle pagination
  let newContent = handlePagination(content, offset, limit)
  // handle sort
  if (sort.name) {
    newContent = handleSort(newContent, sort)
  }
  return {
    data: newContent,
    total,
  }
}
