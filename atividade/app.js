const express=require("express")
const exphbs= require("express-handlebars")
const mysql2= require("mysql2")
const app= express()
function extrairData(data){
    // Convertendo a string para um objeto Date
    const data2 = new Date(data);
    // Extraindo apenas a parte da data (ano, mês, dia)
    return data2.toISOString().split('T')[0];
}
const connection = mysql2.createConnection({
    host: "localhost" , 
    user: "root" , 
    database: "sapatinhodecristal",
    password: "280223"


})
app.engine('handlebars', exphbs.engine({defaultLayout:'default'}));
app.set('view engine', 'handlebars');
app.set('views', './views');
console.log("fds")
connection.connect((err)=>{
    if (err) {
        console.log(err)

    }

    else{
        console.log("conectado com sucesso") 
    }
} )

app.get("/" , (req, res) => {
    connection.query(`SELECT v.id_venda, v.data_venda, pg.valor, p.nome_pessoa, ROUND((pg.valor * f.taxa_comissao), 2) AS comissao_venda
FROM venda v ,pagamento pg ,pessoa p ,funcionario f ,cargo c
WHERE p.cpf_pessoa = f.pessoa_cpf_pessoa and f.pessoa_cpf_pessoa = v.funcionario_pessoa_cpf_pessoa1 and 
f.cargo_id_cargo = c.id_cargo and v.id_venda = pg.venda_id_venda;`, (err,result)=>{
    for(let i =0; i<result.length;i++){
        result[i].data_venda=extrairData(result[i].data_venda)
    }
    console.log(result)
    res.render("atividade",{dados:result})
})
   
})
app.listen(8080)