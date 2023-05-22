
function addInsumo() {
  const container = document.getElementById("insumosContainer");

  const div = document.createElement("div");
  div.classList.add("insumo");

  const nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.placeholder = "Nome do insumo";

  const qtdInput = document.createElement("input");
  qtdInput.type = "number";
  qtdInput.placeholder = "Quantidade";

  const embalagemInput = document.createElement("input");
  embalagemInput.type = "number";
  embalagemInput.placeholder = "Quantidade por embalagem";

  const valorInput = document.createElement("input");
  valorInput.type = "number";
  valorInput.placeholder = "Valor por embalagem";

  div.appendChild(nomeInput);
  div.appendChild(qtdInput);
  div.appendChild(embalagemInput);
  div.appendChild(valorInput);

  container.appendChild(div);
}

function calcularCustos() {
  const insumos = document.querySelectorAll(".insumo");

  let custoTotal = 0;

  insumos.forEach(insumo => {
    const qtd = parseInt(insumo.querySelector("input:nth-of-type(2)").value);
    const embalagem = parseInt(insumo.querySelector("input:nth-of-type(3)").value);
    const valor = parseFloat(insumo.querySelector("input:nth-of-type(4)").value);

    const necessario = valor / embalagem;
    const custo = Math.ceil(necessario * qtd);

    custoTotal += custo;
  });

  const lucro = document.getElementById("lucro").valueAsNumber;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "Custo total dos insumos: R$" + custoTotal.toFixed(2) + "<br>";

  const valorLucro = custoTotal * (lucro / 100);
  resultado.innerHTML += "Valor do lucro: R$" + valorLucro.toFixed(2) + "<br>";

  resultado.innerHTML += "Preço sugerido para venda de: R$" + Math.ceil(custoTotal + valorLucro).toFixed(2);
}

