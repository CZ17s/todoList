export const state = () => ({
    listCheck:[],

})

// ---------------------------------------------------------------------------------------------------

export const getters = {
  checkTrue(state){
    if(state.listCheck.length > 0){
      const checkTrue =  state.listCheck.filter((item) =>{
      return item.status === true
      })
      return checkTrue
    }
    else{
      return []
    }
    },
  sortList(state){
    if(state.listCheck.length > 0){
      const sortList =  [...state.listCheck].sort((a,b) =>{
      return a.status-b.status
      })
      return sortList
    }
    else{
      return []
    }
    },
  checkDate(state){
    return state.listCheck.length > 0 ? true : false
  }
   
}

// ---------------------------------------------------------------------------------------------------

export const mutations = {

setData(state, payload) {
  state.listCheck.push(payload)
},
setStatus(state, item) {
  const index = state.listCheck.findIndex((element) => element.id === item)
  state.listCheck[index].status = !state.listCheck[index].status
}

}

// ---------------------------------------------------------------------------------------------------