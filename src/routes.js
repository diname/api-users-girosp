import express from 'express'
import { controllerUsuario } from '../src/controllers/controllerUsuario.js'
import { controllerConsultor } from '../src/controllers/controllerConsultor.js'
import { controllerCliente } from './controllers/controllerCliente.js'
import { controllerCategoria } from './controllers/controllerCategoria.js'
import { controllerProduto } from './controllers/controllerProduto.js'
import { controllerProposta } from './controllers/controllerProposta.js'
import { controllerProdutosProposta } from './controllers/controllerProdutosProposta.js'
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Página inicial')
})
routes.get('/usuarios', new controllerUsuario().listaUsuarios)
routes.post('/usuario', new controllerUsuario().adicionaUsuario)

routes.get('/consultores', new controllerConsultor().listaConsultores)
routes.post('/consultor', new controllerConsultor().adicionaConsultor)

routes.get('/clientes', new controllerCliente().listaClientes)
routes.post('/cliente', new controllerCliente().adicionaCliente)

routes.get('/categorias', new controllerCategoria().listaCategorias)

routes.get('/produtos', new controllerProduto().listaProdutos)

routes.get('/propostas', new controllerProposta().listaPropostas)

routes.get(
  '/produtos/:proposta',
  new controllerProdutosProposta().listaProdutosProposta
)

export default routes
