const {createProduct, readProduct, updateProduct,deteleProduct} = require("./crud.js");
const {ObjectId} =require("mongodb")
const express = require('express');

const {connection,disconnection}=require("./database.js")

/*

const newProduct={
    marca: "Asus",
    hd: "500GB",
    ram:"4GB",
    processador:"i3"
}

createProduct(newProduct)
readProduct()

const idProduct = new ObjectId('67d36ed4b91b61ca5f5aee78')

const newData={
    hd:"3TB",
    ram:"122GB"
}

updateProduct(idProduct,newData)


const idProduct = new ObjectId('67d36ed4b91b61ca5f5aee78')
deteleProduct(idProduct)


*/

const app = express();
const port = 3000;
// Rota para obter produtos
app.get('/produtos', async (req, res) => {
  try {
    const collection = await connection();
    const produtos = await collection.find().toArray();
    res.json(produtos);
    disconnection();
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar produtos');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
