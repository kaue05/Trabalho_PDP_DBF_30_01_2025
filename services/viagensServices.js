const { Viagem } = require('../models/viagens'); // Ajustar o caminho para o seu modelo

const criarViagem = async (dadosViagem) => {
    try {
        const novaViagem = await Viagem.create(dadosViagem);
        return novaViagem;
    } catch (error) {
        console.error('Erro ao criar viagem:', error);
        throw error;
    }
};

const alterarViagem = async (id, dadosAtualizados) => {
    try {
        const viagem = await Viagem.findByPk(id);
        if (!viagem) {
        throw new Error('Viagem não encontrada');
        }
        await viagem.update(dadosAtualizados);
        return viagem;
    } catch (error) {
        console.error('Erro ao alterar viagem:', error);
        throw error;
    }
};

const excluirViagem = async (id) => {
    try {
        const viagem = await Viagem.findByPk(id);
        if (!viagem) {
        throw new Error('Viagem não encontrada');
        }
        await viagem.destroy();
        return { message: 'Viagem excluída com sucesso' };
    } catch (error) {
        console.error('Erro ao excluir viagem:', error);
        throw error;
    }
};

module.exports = {criarViagem, alterarViagem, excluirViagem};