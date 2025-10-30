import exprees from 'express';
//Instância do express para começar a trabalhar. 
const app =  exprees(); 

//Onde o servidor vai rodar 
const PORT = 3000;

app.get('/health',( req , res,)=>{// PARSER JSON
res.json({message: "Servidor OK"});



})

app.listen(PORT, ()=> {    
    console.log("Servidor rodando na Porta 3000");
}); 

// nodemon

