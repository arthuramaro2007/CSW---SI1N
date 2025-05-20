function verificarIdade() {
    const idadeInput = document.getElementById('idadeInput').value;
    const idade = parseInt(idadeInput);
    const resultado = document.getElementById('resultado');
  
    // Verifica se é um número válido
    if (idadeInput.trim() === '' || isNaN(idade)) {
      resultado.textContent = 'Não digitou a idade.';
      resultado.style.color = 'red';
      return;
    }
  
    // Classificação com base nos critérios fornecidos
    if (idade < 0) {
      resultado.textContent = 'Idade inválida.';
      resultado.style.color = 'black';
    } else if (idade === 0) {
      resultado.textContent = 'É recém-nascido.';
      resultado.style.color = 'black';
    } else if (idade > 0 && idade <= 9) {
      resultado.textContent = 'Classificação: Criança';
      resultado.style.color = 'black';
    } else if (idade > 9 && idade <= 14) {
      resultado.textContent = 'Classificação: Adolescente';
      resultado.style.color = 'black';
    } else if (idade > 14 && idade <= 24) {
      resultado.textContent = 'Classificação: Jovem';
      resultado.style.color = 'black';
    } else if (idade > 24 && idade <= 59) {
      resultado.textContent = 'Classificação: Adulto';
      resultado.style.color = 'black';
    } else if (idade >= 60) {
      resultado.textContent = 'Classificação: Idoso';
      resultado.style.color = 'black';
    } else {
      resultado.textContent = 'Não digitou idade.';
      resultado.style.color = 'red';
    }
  }