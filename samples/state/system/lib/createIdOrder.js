// @flow
import * as R from 'ramda'

export const createIdOrder: <T>(T[]) => string[] = R.pluck('id')