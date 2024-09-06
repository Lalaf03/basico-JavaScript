//objeto

const personaDeReparto = {
  nombre: "el tio Benito",
  mendajeDelTioFuncion: function (mensaje) {
    console.log(`${this.nombre} dijo: ${mensaje}`);
  },
  mensaheConFuncionFlecha: (mensaje) => {
    console.log(`${this.nombre} tambien dijo: ${mensaje}`);
  },
};

personaDeReparto.mendajeDelTioFuncion(
  "Un gran poder, conlleva una gran responsabilidad"
);

personaDeReparto.mensaheConFuncionFlecha("Pilas con el doctor Octopus");
