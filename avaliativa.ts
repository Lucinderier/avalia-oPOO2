//Maria Eduarda Santos Saldanha

abstract class Item {
    protected nome: string;
    protected descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }

    abstract aplicarBeneficios(personagem: Personagem): void;
    abstract removerBeneficios(personagem: Personagem): void;

    getItemNome(): string {
        return this.nome;
    }

    getItemDescricao(): string {
        return this.descricao;
    }
}

class ItemInventario {
    private quantidade: number;
    private item: Item;

    constructor(quantidade: number, item: Item) {
        this.quantidade = quantidade;
        this.item = item;
    }

    getItem(): Item {
        return this.item;
    }

    getQuantidade(): number {
        return this.quantidade;
    }
}

class Arma extends Item {
    constructor(nome: string, descricao: string) {
        super(nome, descricao);
    }

    aplicarBeneficios(personagem: Personagem): void {

    }

    removerBeneficios(personagem: Personagem): void {

    }
}

class Pocao extends Item {
    constructor(nome: string, descricao: string) {
        super(nome, descricao);
    }

    aplicarBeneficios(personagem: Personagem): void {

    }

    removerBeneficios(personagem: Personagem): void {

    }
}

class Inventario {
    private itensInventario: ItemInventario[];
    private quantidadeMaximaItens: number;

    constructor(itensInventario: ItemInventario[], quantidadeMaximaItens: number) {
        this.itensInventario = itensInventario;
        this.quantidadeMaximaItens = quantidadeMaximaItens;
    }

    adicionarItem(itemInventario: ItemInventario): void {
        if (this.itensInventario.length < this.quantidadeMaximaItens) {
            this.itensInventario.push(itemInventario);
        } else {
            console.log('Inventário cheio');
        }
    }

    getItens(): ItemInventario[] {
        return this.itensInventario;
    }
}

class ItemMenu {
    private opcao: string;
    private textoOpcao: string;

    constructor(opcao: string, textoOpcao: string) {
        this.opcao = opcao;
        this.textoOpcao = textoOpcao;
    }

    getOpcao(): string {
        return this.opcao;
    }

    getTextoOpcao(): string {
        return this.textoOpcao;
    }
}

class Menu {
    private itensMenu: ItemMenu[];

    constructor() {
        this.itensMenu = [
            new ItemMenu("1", "Equipar arma"),
            new ItemMenu("2", "Tomar poção"),
            new ItemMenu("3", "Adicionar arma ao inventário"),
            new ItemMenu("4", "Adicionar poção ao inventário"),
            new ItemMenu("5", "Imprimir info"),
            new ItemMenu("6", "Desequipar arma"),
            new ItemMenu("0", "Sair")
        ];
    }

    imprimirMenu(): string {
        this.itensMenu.forEach(item => {
            console.log(`${item.getOpcao()} - ${item.getTextoOpcao()}`);
        });

        const opcao = prompt("Digite o número que represente sua ação: ");
        return opcao ?? '';
    }
}

class Personagem {
    private nome: string;
    private ataque: number;
    private defesa: number;
    private hp: number;
    private mp: number;
    private inventario: Inventario;
    private arma: Arma;

    constructor(nome: string, ataque: number, defesa: number, hp: number, mp: number, inventario: Inventario, arma: Arma) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.hp = hp;
        this.mp = mp;
        this.inventario = inventario;
        this.arma = arma;
    }

    abrirInventario(): void {
        const itens = this.inventario.getItens();
        itens.forEach((item, index) => {
            console.log(`${index} - ${item.getItem().getItemNome()} (${item.getQuantidade()})`);
        });
        console.log(`Total: ${itens.length}/${this.inventario.getItens().length}`);
    }

    usarItem(item: Item): void {
        item.aplicarBeneficios(this);
    }
}
