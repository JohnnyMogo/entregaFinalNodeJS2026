import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../data/firebase.data.js";

/**FUNCION LEER TODOS LOS DOCS
 * Lee todos los documentos de una colección.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @returns {Promise<Array<Object>>} Lista de documentos con id y datos.
 */
export async function readDocuments(collectionName) {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}

/**FUNCION LEER DOC
 * Lee un solo documento por id.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @returns {Promise<Object|null>} Documento con id y datos, o null si no existe.
 */
export async function readDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return { id: docSnap.id, ...docSnap.data() };
}

/**FUNCION CREAR DOC
 * Crea un documento nuevo en la colección.
 * Firestore genera el id automáticamente.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {Object} data Objeto con los campos del documento.
 * @returns {Promise<string>} Id del documento creado.
 */
export async function createDocument(collectionName, data) {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, data);
  return docRef.id;
}

/** FUNCION ACTUALIZAR DOC
 * Actualiza campos de un documento existente.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @param {Object} data Campos a actualizar.
 * @returns {Promise<void>}
 */
export async function updateDocument(collectionName, id, data) {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
}

/**FUNCION ELIMINAR DOC
 * Elimina un documento por id.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @returns {Promise<void>}
 */
export async function deleteDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}
