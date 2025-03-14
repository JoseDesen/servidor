const {connection,disconnection}=require("./database.js")

async function createProduct(newProduct) {
    const collection=await connection();
    const result= await collection.insertOne(newProduct);
    console.log("Produto inserido:",result.insertedId);
    disconnection();
}

async function readProduct() {
    const collection=await connection();
    const result= await collection.find().toArray();
    console.log("Produtos enconcontrados:",result);
    disconnection();
    return result
}

async function updateProduct(id,newDate) {
    const collection=await connection();
    await collection.updateOne({_id:id},{$set:newDate})
    console.log("Produto atualizado:",id,newDate);
    disconnection();
}

async function deteleProduct(id) {
    const collection=await connection();
    await collection.deleteOne({_id:id})
    console.log("Produto excluído:",id);
    disconnection();
}


module.exports={
    createProduct,
    readProduct,
    updateProduct,
    deteleProduct

}