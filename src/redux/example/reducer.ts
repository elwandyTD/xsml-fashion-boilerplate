import * as actionTypes from "./actionTypes";
import { ExampleAction, ExampleState, IExample } from "./model";

const initialState: ExampleState = {
  articles: [],
  counter: 0,
  loading: false
}

const exampleReducer = (state: ExampleState = initialState, action: ExampleAction): ExampleState => {
  switch (action.type) {
    case actionTypes.SET_LOADING: 
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.SET_STATE:
      return {
        ...state,
        ...action.state
      }

    case actionTypes.ADD_EXAMPLE: 
      const newArticle: IExample = {
        id: Math.random(),
        title: action?.article?.title || '',
        body: action?.article?.body || ''
      }

      return {
        ...state,
        articles: state.articles.concat(newArticle)
      }
    case actionTypes.REMOVE_EXAMPLE:
      const updateArticles: IExample[] = state.articles.filter(article => article.id !== action?.article?.id);

      return {
        ...state,
        articles: updateArticles
      }
    
    case actionTypes.INC_COUNTER: 
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
  }

  return state;
}

export default exampleReducer;