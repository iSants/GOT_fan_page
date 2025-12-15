document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    function hideAllTabs () {
        tabs.forEach(t => t.classList.remove('about__content--is--active'));
    }

    function desactiveButton () {
        buttons.forEach(b => b.classList.remove('about__tab__button--is--active'))
    }

// Adiciona listeners em cada botão
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        // Use currentTarget para garantir que é o botão (independente de onde dentro dele clicaram)
        const btn = event.currentTarget;

        // pega o valor correto do data-attr
        const abaAlvo = btn.dataset.tabButton;

        // protege caso não tenha valor
        if (!abaAlvo) return console.warn('Botão sem dataset.tabButton', btn);

        // seleciona a aba alvo (com aspas no seletor)
        const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

        if (!aba) {
            console.warn('Aba alvo não encontrada para:', abaAlvo);
            return;
        }

        hideAllTabs();
        desactiveButton();

        aba.classList.add('about__content--is--active');
        btn.classList.add('about__tab__button--is--active');
    });
});
});