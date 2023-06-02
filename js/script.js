document.getElementById('cadastroformu').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var birth = document.getElementById('birth').value;
    var id = document.getElementById('id').value;
    var endereco = document.getElementById('endereço').value;
    var rua = document.getElementById('rua').value;
    var cep = document.getElementById('cep').value;
    var vendedor = document.getElementById('vendedor').value;
    var limite = document.getElementById('limite').value;
    var tipoCliente = document.querySelector('input[name="type"]:checked');
  
    if (!name || !birth || !id || !endereco || !rua || !cep || !vendedor || !limite || !tipoCliente) {
      document.getElementById('errormessage').textContent = 'Por favor, preencha todos os campos.';
      document.getElementById('successmessage').textContent = '';
    } else {
      document.getElementById('errormessage').textContent = '';
      document.getElementById('successmessage').textContent = 'Cadastro realizado com sucesso!';
  

      document.cookie = 'name=' + encodeURIComponent(name);
      document.cookie = 'birth=' + encodeURIComponent(birth);
      document.cookie = 'id=' + encodeURIComponent(id);
      document.cookie = 'endereço=' + encodeURIComponent(endereco);
      document.cookie = 'rua=' + encodeURIComponent(rua);
      document.cookie = 'cep=' + encodeURIComponent(cep);
      document.cookie = 'vendedor=' + encodeURIComponent(vendedor);
      document.cookie = 'limite=' + encodeURIComponent(limite);
      document.cookie = 'tipoCliente=' + encodeURIComponent(tipoCliente.value);
    }
  });
  
  