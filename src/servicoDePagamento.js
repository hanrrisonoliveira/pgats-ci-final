export default class ServicoDePagamento {
    #pagamentos // Propriedade Privada

    
    constructor() { // Primeiro método a ser executando quando usar a Classe
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) { // Método

        let categoria = 'padrão';

        if (valor > 100) {
            categoria = 'cara';
        }

        const pagamento = {
            codigoBarras,
            empresa,
            valor,
            categoria
        };

        this.#pagamentos.push(pagamento);

        return pagamento;
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}