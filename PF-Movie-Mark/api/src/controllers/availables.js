let availables = [
  {
    name: "The Batman",
    funciones: [
      {
        date: "Jueves 17 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Sábado 19 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Scream",
    funciones: [
      {
        date: "Miércoles 16 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Viernes 18 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Kimi",
    funciones: [
      {
        date: "Martes 15 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Domingo 20 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "Nightmare Alley",
    funciones: [
      {
        date: "Jueves 17 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Miércoles 23 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "My Hero Academia: World Heroes' Mission",
    funciones: [
      {
        date: "Martes 15 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Lunes 21 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Pursuit",
    funciones: [
      {
        date: "Martes 15 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Domingo 20 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "Hotel Transylvania: Transformania",
    funciones: [
      {
        date: "Martes 15 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Domingo 20 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "The Requin",
    funciones: [
      {
        date: "Sábado 19 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Miércoles 23 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Sing 2",
    funciones: [
      {
        date: "Miércoles 16 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Sábado 19 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Uncharted",
    funciones: [
      {
        date: "Martes 16 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Jueves 24 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "Marry Me",
    funciones: [
      {
        date: "Viernes 18 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Lunes 21 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "The Hunting",
    funciones: [
      {
        date: "Miércoles 16 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Lunes 21 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "Resident Evil: Welcome to Raccoon City",
    funciones: [
      {
        date: "Jueves 17 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Domingo 20 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "The 355",
    funciones: [
      {
        date: "Viernes 18 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Martes 22 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Clifford the Big Red Dog",
    funciones: [
      {
        date: "Jueves 17 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Miércoles 23 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "One Shot",
    funciones: [
      {
        date: "Sábado 19 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Martes 22 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Moonfall",
    funciones: [
      {
        date: "Martes 22 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Jueves 24 3",
        hour: "21",
        hall: "1",
        tickets: "48",
      },
    ],
  },
  {
    name: "Wrath of Man",
    funciones: [
      {
        date: "Miércoles 23 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Jueves 24 3",
        hour: "19",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "Halloween Kills",
    funciones: [
      {
        date: "Viernes 18 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
      {
        date: "Martes 22 3",
        hour: "22",
        hall: "2",
        tickets: "48",
      },
    ],
  },
  {
    name: "The Sky Is Everywhere",
    funciones: [
      {
        date: "Lunes 21 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
      {
        date: "Jueves 24 3",
        hour: "18",
        hall: "1",
        tickets: "48",
      },
    ],
  },
];

module.exports = { availables };
