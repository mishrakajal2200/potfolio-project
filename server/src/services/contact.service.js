
import Contact from "../models/Contact.models.js";

export const createContact = async (contactData) => {
  const contact = await Contact.create(contactData);

  return contact;
};
