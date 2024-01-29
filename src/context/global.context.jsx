import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import { GLOBAL_API } from "../utils/constants";

const initialState = {
  URL_API: GLOBAL_API,
  team: []
}

const ContextGlobal = createContext('')

const reducer = (state, action) => {
  switch (action.type){
    case 'setTeam':
      return  {...state, team: [...state.team, ...action.payload]}
    default:
      throw new Error('action type error')
  }
}


const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  


  
  useEffect(() =>{
    const env = import.meta.env
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}team-members`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.sort((a, b) => {
          const titleA = a.title.rendered.toUpperCase();
          const titleB = b.title.rendered.toUpperCase();
        
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
        dispatch({type: 'setTeam', payload: json})
      });
  },[])
  
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}