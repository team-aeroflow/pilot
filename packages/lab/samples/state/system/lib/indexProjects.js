// @flow
import * as R from 'ramda'

export const indexProjects: (Project[]) => {[string]: Project} = R.indexBy(
  R.prop('id')
)
