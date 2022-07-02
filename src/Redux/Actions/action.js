export const addContact = (data) => {
  return {
    type: "ADD_CONTACT",
    payload: data,
  };
};

export const updateContact = (id) => {
  return {
    type: "UPDATE_CONTACT",
    payload: id,
  };
};

export const deleteContact = (idDelete) => {
  return {
    type: "DELETE_CONTACT",
    payload: idDelete,
  };
};
