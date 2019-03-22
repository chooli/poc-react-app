export const CMActionTypes = {
  NEW_CONTENT: 'NEW_CONTENT',
};

export const addContent = (content) => {
  return {
    type: CMActionTypes.NEW_CONTENT,
    content: content,
  };
};
