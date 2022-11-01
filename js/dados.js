// const produto = [
//     {id:1, nome:'Pizza Baianna', img:'<img src="../img/pizza-baiana.png " alt="">', valor: 30.00},
//     {id:2, nome:'Pizza Calabresa', img:'<img src="../img/pizza-calabresa.jpg " alt="" >', valor:25.00},
//     {id:3, nome:'Pizza Portuguesa', img:'<img src="../img/pizza-portuguesa.jpg " alt="" >', valor:25.00},
//     {id:4, nome:'Suco Laranja', img:'<img src="../img/suco-laranja.jpg " alt="" >', valor:39.00},
//     {id:5, nome:'Açai Tradicional', img:'<img src="../img/acai=tradicional.jpg " alt="" >', valor:39.00}
// ]


class Categoria {
    constructor(){
        this.id = 1;
        this.arrayCategoria = [];
    }

    salvar(){
        let categoria = this.lerDados();
        
        if (this.validaCampos(categoria)) {
            this.adicionar(categoria);
            this.apaga_campos();
        }
        console.log(this.arrayCategoria);
        this.lista_categoria(categoria);
    }

    adicionar(categoria){
        this.arrayCategoria.push(categoria);
        this.id++;
    }


    lerDados(){
        let categoria ={}
        categoria.id_categoria = this.id;
        categoria.nomeCategoria = document.getElementById('nome_categoria').value;
        categoria.destino = document.getElementById('destino_categoria').value;
        return categoria;
    }
    validaCampos(categoria){
        let msg = '';
        if (categoria.nomeCategoria == '') {
            msg += '- Informe Nome da categoria \n';
        }
        if (categoria.destino == '') {
            msg += '- Informe o Destino \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    lista_categoria(categoria){
            $(document).ready(function() {                
                $('#conteudo_cadastrado').append('<div class="dados_produto"><div class="arm_bloco1"><label for="">Categoria: '+ categoria.nomeCategoria +'</label><br></div><div class="arm_bloco2"><label for="">Destino: '+ categoria.destino +'</label></div><div class="arm_bloco3"><button " class="btn_conteudo_cadastrado" onclick="categoria.excluir('+ categoria.id_categoria +')">Excluir</button></div></div>');
            });
    }

    apaga_campos(){ 
        let input_nome_categoria = document.querySelector('#nome_categoria');
        let input_destino_categoria = document.querySelector('#destino_categoria');
        input_nome_categoria.value = "";
        input_destino_categoria.value = "";
    }
    
    excluir(id_deleta){
        console.log(id_deleta);
        console.log(categoria);
        categoria.splice(id_deleta, 1);
        console.log(categoria)
    };


};

var categoria = new Categoria();

