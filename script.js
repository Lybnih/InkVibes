document.addEventListener('DOMContentLoaded', function () {
    const range = document.querySelector('#range');
    const imagemNovidade = document.getElementById('imagemNovidade');
    const informacoesNovidade = document.getElementById('informacoes_novidade');

    range.addEventListener('input', function () {
        const value = this.value / 100;
        imagemNovidade.style.opacity = value;
        informacoesNovidade.style.opacity = value;
    });
});