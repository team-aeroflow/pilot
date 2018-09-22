// @flow
import * as R from 'ramda'

export const indexColumns: (BoardColumn[]) => {[string]: BoardColumn} = R.indexBy(
  R.prop('id')
)