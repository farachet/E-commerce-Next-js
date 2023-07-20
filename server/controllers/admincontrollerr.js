const { admin } = require("../database/models/admin");
const { seller } = require("../database/models/seller");
const { client } = require("../database/models/client");
const { Products } = require("../database/models/products");
const { category } = require("../database/models/category");
module.exports = {
  //Users
  //GetAll
  getAllSellers(req, res) {
    
console.log("hello")
    seller
      .findAll()
      .then((sellers) => {
        res.status(200).json(sellers);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get sellers" });
      });
  },
  getAllClients(req, res) {
    client
      .findAll()
      .then((clients) => {
        res.status(200).json(clients);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get clients" });
      });
  },
  deleteClient(req, res) {
    const { clientid } = req.params;

    client
      .destroy({ where: { id: clientid } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: `client not found` });
        }
        res.status(200).json({ message: `client deleted successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to delete client` });
      });
  },
  deleteSeller(req, res) {
    console.log("fgh");
    const { id } = req.params;
    console.log(id);

    seller
      .destroy({ where: { id: id } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: `seller not found` });
        }
        res.status(200).json({ message: `seller deleted successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to delete seller` });
      });
  },
  deleteProduct(req, res) {
    
    const {id} = req.params;
    console.log("fffffff",id)

    Products
      .destroy({ where: { id:id } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: `product not found` });
        }
        res.status(200).json({ message: `product deleted successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to delete product` });
      });
    },


  getAllProducts(req, res) {
    Products.findAll({})
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get products" });
      });
  },
  getAllProds(req, res) {
    Products.findAll({
      where: {
        approved: 0
      }
    })
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get products" });
      });
  },
  updateProds(req, res) {

    const id= req.params.id;

    Products
      .update({ approved:1}, { where: { id: id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to update product" });
      });
  },

  //Get one product
  getProduct(req, res) {
    const { id } = req.params;

    Products.findByPk(id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get product" });
      });
    //Categories
    //Get all categories
  },
  getAllCategories(req, res) {
    category
      .findAll({})
      .then((categorie) => {
        res.status(200).json(categorie);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to get Categories" });
      });
    //get one categories
  },
  getCategory(req, res) {
    const { id } = req.params;

    category
      .findByPk(id)
      .then((category) => {
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
        res.status(500).json({ error: "Failed to get category" });
      });
  },
  //add categories
  addCategories(req, res) {
    const { categoryname } = req.body;
    category
      .create({
        categoryname,
      })
      .then((categorie) => {
        res.status(201).json(categorie);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err });
      });
  },
  //update categories
  updateCategories(req, res) {
    const { categoryname } = req.body;
    const categoryId = req.params.id;

    category
      .update({ categoryname }, { where: { id: categoryId } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to update categories" });
      });
  },

  deleteCategory(req, res) {
    const { id } = req.params;

    category
      .destroy({ where: { id: id } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: `Category not found` });
        }
        res.status(200).json({ message: `Category deleted successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to delete category` });
      });
  },
};
