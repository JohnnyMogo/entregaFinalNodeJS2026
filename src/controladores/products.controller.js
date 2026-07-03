import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../servicios/products.service.js";

export const getAllProducts = async (req, res) => {
  res.status(200).json(await getAllProductsService());
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await getProductByIdService(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const createProduct = async (req, res) => {
  const producto = req.body.producto;
  if (!producto) {
    return res
      .status(400)
      .json({ message: "Información del producto es requerida" });
  }
  try {
    const id = await createProductService(producto);
    producto.id = id;
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID del producto es requerido" });
  }

  try {
    await updateProductService(id, data);
    res.status(200).json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "ID del producto es requerido" });
  }

  try {
    await deleteProductService(id);
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};
