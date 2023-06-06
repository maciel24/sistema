const form = document.querySelector("#infos-prod");
const tabela = document.querySelector("#tbody");
let idx= form.idx.value;

const atualizarLocalStorage1 = (products)=> {localStorage.getItem('products', JSON.stringify(products))};

const recuperarLocalStorage1 = ()=> JSON.parse(localStorage.getItem('products') || '[]');

const salvarProduct = (e)=>{
  e.preventDefault()
  const nome = form.nome.value;
  const preco =Number(form.preco.checked);
  }

  if(idx=='new'){
    const products = recuperarLocalStorage();
    products.push({id:products.length + 1, nome,preco,prime});
    atualizarLocalStorage(products);
    preencherTabela();
    form.reset();
  }else{
    let product = {id: idx,nome,preco,prime}
    atualizarProduct(idx,product);
    preencherTabela();
    form.reset();
    idx='new'
  }

const preencherTabela1 = () => {
  const products  = recuperarLocalStorage();
  tabela.innerHTML ='';
  for(const product of products){
    tabela.innerHTML += `
    <tr>
    <th scope = "row">${product.id}</th>
    <td>${product.nome}</td>
    <td>R$ ${product.preco},00</td>
    <td>${product.prime ? "sim":"não"}</td>
    
    </tr>
    `;
  }
}
const removerproduct = (id) =>{
  const products = recuperarLocalStorage();
  const indexProduct = products.findIndex((product)=> product.id === id)
  if(indexProduct <0)return;
  products.splice(indexProduct, 1);
  atualizarLocalStorage(products);
  alert('product removed')
  preencherTabela();
}
const editProduct = (id)=>{
  const products =recuperarLocalStorage();
  const indexProduct= products.findIndex((product)=> product.id ==id)
  form.nome.value = product[indexProduct].nome;
  form.preco.value = product[indexProduct].preco;
  form.prime.checked = product[indexProduct].prime;
  idx=id;
}

const atualizarProduct  =(id)=>{
  const products =recuperarLocalStorage();
  const indexProduct= products.findIndex((product)=> product.id ==id)
  products[indexProduct]=product;
  atualizarLocalStorage(products);
}

form.addEventListener = ('submit',saveProduct);
document.addEventListener("DOMContentLoaded" ,preencherTabela);

document.querySelector("#sair").addEventListener("click" ,()=>{
  location.href ="index.html"
})

