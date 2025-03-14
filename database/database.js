const { MongoClient } = require("mongodb");

const uri="mongodb+srv://joseDesen:jlra@josedesen.myi4e.mongodb.net/?retryWrites=true&w=majority&appName=joseDesen";

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