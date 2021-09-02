const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.get('/pedidos', function(req,res){
    res.send('Pedido foi feito');
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/totalpedidos', async(req,res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedido){
        res.json({pedido})
    });
});


app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        order: [['nome', 'DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get('/listaclientesantig', async(req,res)=>{
    await cliente.findAll({
        order: [['createdAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

app.get('   ', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico=>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estabilizadas';
        servico.save();
        return res.json({servico});
    });
}); 

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/listaclientes:id', async(req, res)=>{
    await servico.findByPk({
        where: {ClienteId: req.params.id}
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listapedidos/:id', async(req, res)=>{
    await pedido.findByPk({where: {ClienteId: [req.params.id]}})
    .then(function(pedidos){
        res.json(pedidos)
    });
    console.log(pedidos,valor,ClienteId)
});

app.get('/excluircliente', async(req, res)=>{
    cliente.destroy({
        where: {id: 2}
    });
});

app.delete('.apagarcliente/:id', (req, res)=>{
    cliente.destroy({
        where:{id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente for excluido com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Não foi possivel excluir o cliente."
        });
    });
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});