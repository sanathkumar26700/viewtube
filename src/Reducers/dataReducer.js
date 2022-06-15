const dataReducer = (state, action) =>{
   switch(action.type){
      
      case "LOAD_VIDEOS" :  return {...state, isLoading: action.payload.isLoading, videoData: action.payload.videoData}

      case "LOAD_CATEGORIES" : return {...state, isLoading: action.payload.isLoading, categoryData: action.payload.categoryData}

      case "SORT_BY_CATEGORY" :  return {...state, selectedCategory : action.payload }

      case "SEARCH" : return {...state, searchFor : action.payload}

      default : return state
   }
}

export {dataReducer}