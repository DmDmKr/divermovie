export const MOVIES = Object.freeze({
  DIVER: 'diver',
  DRUNK_NOTES: 'drunk-notes',
  LINES_OF_CONTACT: 'lines-of-contact'
})

// Pre-built Set for O(1) validation in useSelectedMovie — avoids allocating
// a new array on every render via Object.values()
export const VALID_MOVIES = new Set(Object.values(MOVIES))

// Single source of truth for all movie display strings.
export const movieTitles = Object.freeze({
  [MOVIES.DIVER]: 'Ныряльщик',
  [MOVIES.DRUNK_NOTES]: 'Записки по пьяни',
  [MOVIES.LINES_OF_CONTACT]: 'Линии соприкосновения'
})
