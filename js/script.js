var selectedRow = null;

// Função para envio do formulário
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Função para ler os dados do formulário
function readFormData() {
    var formData = {};
    formData["codProduto"] = document.getElementById("codProduto").value;
    formData["descProduto"] = document.getElementById("descProduto").value;
    formData["Qtd"] = document.getElementById("Qtd").value;
    formData["Valor"] = document.getElementById("Valor").value;
    return formData;
}

// Função para inserir os dados
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.codProduto;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descProduto;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Qtd;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Valor;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Deletar</button>`
}

// Função para editar os dados
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('codProduto').value = selectedRow.cells[0].innerHTML;
    document.getElementById('descProd').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Qtd').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Valor').value = selectedRow.cells[3].innerHTML;
}

// Função atualizar registro
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.codProduto;
    selectedRow.cells[1].innerHTML = formData.descProduto;
    selectedRow.cells[2].innerHTML = formData.Qtd;
    selectedRow.cells[3].innerHTML = formData.Valor;
}

// Função para exclusão dos registros
function onDelete(td) {
    if (confirm('Você deseja realmente excluir este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

// Função para redefinir os registros
function resetForm() {
    document.getElementById('codProduto').value = '';
    document.getElementById('descProd').value = '';
    document.getElementById('Qtd').value = '';
    document.getElementById('Valor').value = '';
}