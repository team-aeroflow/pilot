// @flow

export type SystemState = {|
  cards: {[string]: Card},
  columns: {[string]: BoardColumn}, 
  projects: {[string]: Project},
  projectOrder: string[],
  projectCards: {[string]: string[]},
|}
