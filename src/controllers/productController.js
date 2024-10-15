const prisma = require("../prismaClient");

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        userId: req.userId, // Using JWT to associate user
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const product = await prisma.product.findMany();
    console.log(product);

    res.json(product);
  } catch (error) {
    console.log("error", error);

    res.status(500).json({ message: "Error gets product", error });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error getting product by Id", error });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        price,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error editing product", error });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};
// Implement other CRUD operations similarly
