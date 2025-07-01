function agregar(valor) {
      document.getElementById("resultado").value += valor;
    }

    function limpiar() {
      document.getElementById("resultado").value = "";
    }

    function calcular() {
      try {
        document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
      } catch (e) {
        document.getElementById("resultado").value = "Error";
      }
    }