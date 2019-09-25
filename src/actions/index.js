export const ADD_STUFF = "ADD_STUFF";
export const REMOVE_STUFF = "REMOVE_STUFF";
export const TOTAL_UPDATE = "TOTAL_UPDATE";

export function addStuff(newstuff) {
    console.log("newstuff", newstuff)
    return {
      type: ADD_STUFF,
      payload: newstuff
    };
  }

  export function removeStuff(lesstuff) {
    console.log("removestuff", lesstuff)
    return {
      type: REMOVE_STUFF,
      payload: lesstuff
    };
  }


  export function totalUpdate(update){

    console.log("totalUpdate", update)
    return{
      type:TOTAL_UPDATE,
      payload: update
    };
  }