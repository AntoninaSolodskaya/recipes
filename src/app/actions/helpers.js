
export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
  }
};

export const createNewRecipe = ( user, photoURL, recipe ) => {
  return {
    ...recipe,
    createdAt: new Date(),
    author: {  
      [user.uid]: {
        photoURL: photoURL || '/assets/user.png',
        displayName: user.displayName,
        authentication: true,
        joinDate: new Date()
      }
    }
  }
};
