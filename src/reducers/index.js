import { 
  CHANGE_LANG, 
  FETCH_TEXT_HOME,
  FETCH_TEXT_CONTACT,
  FETCH_LANG,
} from '../actions/index';

const initialState = {
  homeMessage: {
    'fr': 'Accueil',
    'en': 'Home',
  },
  contactMessage: {
    'fr': 'Contact',
    'en': 'Contact',
  },
  languages: [
    { id: 1, code: 'en', name: 'English' },
    { id: 2, code: 'fr', name: 'Français' }
  ],
  selectedLanguage: "Français",
};

/**
* personal doc JS
* @function reducer
* @param {state} state courant ou a default un objet comme state = initalState
* @param {action} action en fonction de cette action, on va pouvoir changer le state
* @return toujours un state
* 
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case Fetch text props
    case FETCH_TEXT_HOME: 
      return {
        ...state,
        homeMessage: action.message 
      }
    case FETCH_TEXT_CONTACT: 
      return {
        ...state,
        contactMessage: action.message 
      }
    // case Fetch lang props
    case FETCH_LANG: 
      return {
        ...state,
        languages: action.lang
      }
    // case CHANGE lang props
    case CHANGE_LANG:
      return {
        ...state,
         selectedLanguage: action.lang
        };
    default: return state;
  }
};
export default reducer;
