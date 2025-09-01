// src/js/data.js
export const CATEGORIAS = [
  { id: 'uramaki', nombre: 'Sushi en Rollo (Uramaki)' },
  { id: 'maki', nombre: 'Maki (alga por fuera)' },
  { id: 'brochetas', nombre: 'Brochetas' },
  { id: 'arroz', nombre: 'Arroz' },
  { id: 'pokebola', nombre: 'Pokebola' },
  { id: 'otros', nombre: 'Otros' }
];

export const MENU = {
  uramaki: [
    { id: 'calif-veg', nombre: 'California Vegetariano', precio: 94 },
    { id: 'calif-platano', nombre: 'California Plátano macho', precio: 96 },
    { id: 'calif-cangrejo', nombre: 'California Cangrejo', precio: 98 },
    { id: 'calif-camaron', nombre: 'California Camarón', precio: 100 },
    { id: 'calif-salmon', nombre: 'California Salmón', precio: 102 },
    { id: 'phila-veg', nombre: 'Philadelphia Vegetariano', precio: 98 },
    { id: 'phila-platano', nombre: 'Philadelphia Plátano macho', precio: 100 },
    { id: 'phila-cangrejo', nombre: 'Philadelphia Cangrejo', precio: 102 },
    { id: 'phila-camaron', nombre: 'Philadelphia Camarón', precio: 104 },
    { id: 'phila-salmon', nombre: 'Philadelphia Salmón', precio: 106 },
    { id: 'avo-veg', nombre: 'Avocado Vegetariano', precio: 105 },
    { id: 'avo-platano', nombre: 'Avocado Plátano macho', precio: 107 },
    { id: 'avo-cangrejo', nombre: 'Avocado Cangrejo', precio: 109 },
    { id: 'avo-camaron', nombre: 'Avocado Camarón', precio: 111 },
    { id: 'avo-salmon', nombre: 'Avocado Salmón', precio: 113 },
    { id: 'emp-veg', nombre: 'Empanizado Vegetariano', precio: 110 },
    { id: 'emp-platano', nombre: 'Empanizado Plátano macho', precio: 112 },
    { id: 'emp-cangrejo', nombre: 'Empanizado Cangrejo', precio: 114 },
    { id: 'emp-camaron', nombre: 'Empanizado Camarón', precio: 116 },
    { id: 'emp-salmon', nombre: 'Empanizado Salmón', precio: 118 }
  ],
  maki: [
    { id: 'maki-platano', nombre: 'Maki Plátano macho', precio: 99 },
    { id: 'maki-cangrejo', nombre: 'Maki Cangrejo', precio: 101 },
    { id: 'maki-camaron', nombre: 'Maki Camarón', precio: 103 },
    { id: 'maki-salmon', nombre: 'Maki Salmón', precio: 105 },
    { id: 'maki-veg', nombre: 'Maki Vegetariano', precio: 107 }
  ],
  brochetas: [
    { id: 'k-queso', nombre: 'Kushiage de Queso (3p)', precio: 84 },
    { id: 'k-ebi', nombre: 'Kushiage Ebi (3p camarón + queso)', precio: 96 }
  ],
  arroz: [
    { id: 'gohan', nombre: 'Gohan (arroz al vapor)', precio: 65 },
    { id: 'gohan-ebi', nombre: 'Gohan Furikake Ebi', precio: 75 },
    { id: 'gohan-mix', nombre: 'Gohan c/philadelphia, aguacate y cangrejo', precio: 82 },
    { id: 'yakimeshi', nombre: 'Yakimeshi (arroz frito res+camarón)', precio: 82 },
    { id: 'yakimeshi-mix', nombre: 'Yakimeshi c/philadelphia, aguacate y cangrejo', precio: 92 }
  ],
  pokebola: [
    { id: 'poke', nombre: 'Pokebola (onigiri empanizado)', precio: 74 }
  ],
  otros: [
    { id: 'chipotle', nombre: 'Salsa de chipotle', precio: 16 },
    { id: 'anguila', nombre: 'Salsa de anguila', precio: 20 },
    { id: 'soya', nombre: 'Salsa de soya extra', precio: 9 },
    { id: 'tampico-ch', nombre: 'Ensalada Tampico chica (surimi)', precio: 16 },
    { id: 'tampico-gr', nombre: 'Ensalada Tampico grande', precio: 58 }
  ]
};

export const MODS = [
  { id: 'spicy', nombre: 'Spicy', precio: 5 },
  { id: 'empanizado', nombre: 'Empanizado extra', precio: 10 },
  { id: 'sin-alga', nombre: 'Sin alga', precio: 0 }
];
