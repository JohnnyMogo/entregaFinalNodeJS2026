import {
  readDocuments,
  readDocument,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../modelos/firestore.models.js";

export const getAllProductsService = async () => {
  return await readDocuments("productos");
};

export const getProductByIdService = async (id) => {
  return await readDocument("productos", id);
};

export const createProductService = async (producto) => {
  return await createDocument("productos", producto);
};

export const updateProductService = async (id, data) => {
  return await updateDocument("productos", id, data);
};

export const deleteProductService = async (id) => {
  return await deleteDocument("productos", id);
};
