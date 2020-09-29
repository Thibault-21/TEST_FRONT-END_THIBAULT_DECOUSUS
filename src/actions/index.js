// ACTIONS TYPES
export const FETCH_TEXT_HOME = 'FETCH_TEXT_HOME';
export const FETCH_TEXT_CONTACT = 'FETCH_TEXT_CONTACT';
export const FETCH_LANG = 'FETCH_LANG';
export const CHANGE_LANG = 'CHANGE_LANG';

//ACTIONS CREATORS
export const fetchTextHome = () => ({
  type: FETCH_TEXT_HOME,
})

export const fetchTextContact = () => ({
  type: FETCH_TEXT_CONTACT,
})

export const fetchLang = () => ({
  type: FETCH_LANG,
})

export const changeLang = (lang) => ({
  type: CHANGE_LANG,
  lang,
})
