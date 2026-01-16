window.onload = function() {
    console.log('Página carregada');
    var body = document.querySelector('body');
    console.log('Estilos do body:', window.getComputedStyle(body).backgroundImage);

    const form = document.getElementById('form-ia');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const texto = document.getElementById('texto').value;
        try {
            const response = await fetch('/api/ia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ texto })
            });
            const data = await response.json();
            resultadoDiv.innerHTML = `<strong>Resultado:</strong> ${data.resultado}`;
        } catch (error) {
            resultadoDiv.innerHTML = '<span style="color:red">Erro ao processar texto.</span>';
        }
    });
};

window.onload = function() {
    console.log('Página carregada');
    var body = document.querySelector('body');
    console.log('Estilos do body:', window.getComputedStyle(body).backgroundImage);
};
