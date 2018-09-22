// @flow

import type {Effect} from '../../types'

import {
  call,
  put,
  all,
} from 'redux-saga/effects'

import {fetchCards} from '../lib/fetchCards'
import {indexCards} from '../lib/indexCards'
import {fetchBoardColumn} from '../lib/fetchBoardColumns'
import {indexColumns} from '../lib/indexColumns'
import {fetchCustomFieldsFromCardList} from '../lib/fetchCustomFieldsFromCardList'
import {fetchCustomField} from '../lib/fetchCustomField'
import {createProjectsFromCustomFieldOptionList} from '../lib/createProjectsFromCustomFieldOptionList'
import {indexProjects} from '../lib/indexProjects'
import {createIdOrder} from '../lib/createIdOrder'
import {createProjectCardMap} from '../lib/createProjectCardMap'

import trello from '../../trello'

import {systemActions} from '../actions'

export function* initEffect(): Effect {
  const focusBoardId = '5b2137cadba550c83f9dd243'
  const {cards, columns, projectCustomField}: {
    cards: Card[],
    columns: BoardColumn[],
    projectCustomField: CustomField,
  } = yield all({
    cards: call(fetchCards, focusBoardId),
    columns: call(fetchBoardColumn, focusBoardId),
    projectCustomField: call(fetchCustomField, trello.projectCustomFieldId),
  })

  const indexedCards: {[string]: Card} = yield call(indexCards, cards)
  yield put(systemActions.setCards(indexedCards))

  const indexedColumns: {[string]: BoardColumn} = yield call(indexColumns, columns)
  yield put(systemActions.setColumns(indexedColumns))

  const projectList: Project[] = yield call(createProjectsFromCustomFieldOptionList, projectCustomField.options)
  const indexedProjects: {[string]: Project} = yield call(indexProjects, projectList)
  const projectOrder: string[] = yield call(createIdOrder, projectList)
  yield put(systemActions.setProjects(indexedProjects, projectOrder))

  const customFields: CardCustomField[] = yield call(fetchCustomFieldsFromCardList, cards)
  const projectCards: {[string]: string[]} = yield call(createProjectCardMap, customFields)
  yield put(systemActions.setProjectCards(projectCards))
}
