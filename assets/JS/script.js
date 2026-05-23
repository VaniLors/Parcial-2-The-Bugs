/* =====================================================================
   SISTEMA DE ACTIVOS FIJOS - script.js
   ===================================================================== */

// ---- MAPA: id del boton -> id de la ventana ----
const mapaVentanas = {
    'btn-activos-fijos':    'ventana-activos-fijos',              // Rayman
    'btn-grupos':           'ventana-grupo-contable',             // Vanilors
    'btn-oficinas':         'ventana-oficinas',                   // Gustavo
    'btn-reportes':         'ventana-seguridad',                                 // pendiente
    'btn-administradores':  'ventana-administracion-recursos',    // Alex
    'btn-sesion':           null,                                 // pendiente
    'btn-respaldos':        'ventana-transferencia',              // Vlady
    'btn-unidad':           'ventana-admin-unidad',               // Hugo
    'btn-localizar':        'ventana-grupo-contable',             // Vanilors
};

// ---- Abre una ventana y muestra el overlay ----
function abrirVentana(idVentana) {
    if (!idVentana) {
        alert('Esta seccion esta en desarrollo.');
        return;
    }
    var ventana = document.getElementById(idVentana);
    var overlay = document.getElementById('overlay');
    if (ventana) {
        ventana.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// ---- Cierra una ventana especifica ----
// Se llama desde los botones Salir/Cancelar con onclick="cerrarVentana('id')"
function cerrarVentana(idVentana) {
    var ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.style.display = 'none';
    }
    // Oculta el overlay solo si no quedan otras ventanas abiertas
    var abiertas = document.querySelectorAll('.ventana[style*="display: block"]');
    if (abiertas.length === 0) {
        document.getElementById('overlay').style.display = 'none';
    }
}

// ---- Clic en el overlay cierra todas las ventanas ----
document.getElementById('overlay').addEventListener('click', function () {
    document.querySelectorAll('.ventana').forEach(function (v) {
        v.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none';
});

// ---- Conecta cada boton del menu con su ventana ----
Object.keys(mapaVentanas).forEach(function (idBoton) {
    var boton = document.getElementById(idBoton);
    if (boton) {
        boton.addEventListener('click', function () {
            abrirVentana(mapaVentanas[idBoton]);
        });
    }
});

// ---- Boton X y boton Si del dialogo FoxPro ----
var foxCerrar = document.querySelector('.fox-cerrar');
if (foxCerrar) {
    foxCerrar.addEventListener('click', function () {
        var dialogo = document.querySelector('.dialogo-foxpro');
        if (dialogo) dialogo.style.display = 'none';
    });
}

var btnFoxSi = document.querySelector('.btn-fox-activo');
if (btnFoxSi) {
    btnFoxSi.addEventListener('click', function () {
        var dialogo = document.querySelector('.dialogo-foxpro');
        if (dialogo) dialogo.style.display = 'none';
    });
}