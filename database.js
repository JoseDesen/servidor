
const { MongoClient } = require("mongodb");

const uri="mongodb+srv://joseDesen:jlrajlra@josedesen.myi4e.mongodb.net/?retryWrites=true&w=majority&appName=joseDesen";

const client = new MongoClient(uri);

const databaseName="loja";

const collectionName="produtos";

async function connection() {
    try{
        await client.connect();
        
        const db = client.db(databaseName);
        
        const collection=db.collection(collectionName);
        
        console.log("conectado ao MongoDB");
        
        return collection;
    }catch(error){
        console.error("Erro na conexão ao MongoDB:", error);
    }
}
async function disconnection() {
    try {
        await client.close();
        
        console.log("conexão encerrada");
        
    } catch (error) {
        console.error("Erro na desconexão:", error);
    }
}
module.exports={
    connection,
    disconnection
}
/*

// verifica a conexao

const { MongoClient } = require("mongodb");

const uri="mongodb+srv://joseDesen:jlrajlra@josedesen.myi4e.mongodb.net/?retryWrites=true&w=majority&appName=joseDesen";

const client = new MongoClient(uri);

async function connetion() {
    try{
        await client.connect();
        console.log("Conectado ao MongoDB");
    }catch(error){
        console.error("Erro na conexão ao MongoDB"+error);
    }finally{
        await client.close()
        console.log("conexão encerada");
    }
}

connetion();

*/
