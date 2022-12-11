// Redireciona o usuário para a página de acordo com o fluxo do sistema

function fluxo(pagina) {
    switch (pagina) {
        case 'mesas':
            window.location.href = "../view/mesas.html";
            break;
        case 'mesa':
            window.location.href = "../view/mesa.html";
            break; 
        case 'pedido':
            window.location.href = "../view/pedido.html";
            break; 
        case 'volta':
            window.history.back()
            break;
    
        default:
            window.location.href = "../view/login.html";
            break;
    }
}

