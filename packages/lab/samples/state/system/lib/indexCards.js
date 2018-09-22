// @flow
import * as R from 'ramda'

export const indexCards: (Card[]) => {[string]: Card} = R.indexBy(
  R.prop('id')
)