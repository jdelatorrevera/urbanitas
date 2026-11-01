// Urbanitas — scripts comunes

// Fecha en la cabecera
(function () {
  var el = document.getElementById('fecha-hoy');
  if (!el) return;
  var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var hoy = new Date();
  el.textContent = hoy.getDate() + ' de ' + meses[hoy.getMonth()] + ' de ' + hoy.getFullYear();
})();

// Formulario de contacto (Quién soy): abre el correo del visitante, sin exponer la dirección en el HTML
(function () {
  var form = document.getElementById('contacto');
  if (!form) return;
  var dest = 'buzon.urbanitas' + '@' + 'gmail.com';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = form.nombre.value, correo = form.correo.value, mensaje = form.mensaje.value;
    var asunto = encodeURIComponent('Mensaje desde Urbanitas — ' + nombre);
    var cuerpo = encodeURIComponent('Nombre: ' + nombre + '\nCorreo: ' + correo + '\n\n' + mensaje);
    window.location.href = 'mailto:' + dest + '?subject=' + asunto + '&body=' + cuerpo;
    form.hidden = true;
    var ok = document.getElementById('contacto-ok');
    if (ok) ok.hidden = false;
  });
})();
