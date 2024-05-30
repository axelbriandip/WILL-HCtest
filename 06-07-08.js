/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento
      
      // Tu código aca:
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;
    }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:      
      this.amigos.push({ nombre, edad })
    }
    
    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.
      
      // Tu código aca:
      this.hobbies.push(hobby)
    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
      var friends = [];
      for (let i = 0; i < this.amigos.length; i++) {
        friends.push(this.amigos[i].nombre)
      }
      return friends;
    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
      return this.hobbies;
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
      var sumaEdad = 0;
      var cantidadAmigos = 0;
      for (let i = 0; i < this.amigos.length; i++) {
        cantidadAmigos++;
        sumaEdad = sumaEdad + this.amigos[i].edad;
      }
      var prom = sumaEdad / cantidadAmigos;
      return prom;
    }
  };

  return Persona;
}

// class Persona {
//   constructor(nombre, edad, hobbies, amigos) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.hobbies = hobbies;
//     this.amigos = amigos;
//   }

//   addFriend(nombre, edad) {
//     this.amigos.push({ nombre, edad })
//   }

//   addHobby(hobby) {
//     this.hobbies.push(hobby)
//   }
//   getFriends() {
//     var friends = [];
//     for (let i = 0; i < this.amigos.length; i++) {
//       friends.push(this.amigos[i].nombre)
//     }
//     return friends;
//   }
//   getHobbies() {
//     return this.hobbies;
//   }
//   getPromedioEdad() {
//     var sumaEdad = 0;
//     var cantidadAmigos = 0;
//     for (let i = 0; i < yo.amigos.length; i++) {
//       cantidadAmigos++;
//       sumaEdad = sumaEdad + yo.amigos[i].edad;
//     }
//     var prom = sumaEdad / cantidadAmigos;
//     return prom;
//   }
// }

// var yo = new Persona("Brian", 29, ["Futbol", "Tenis"], [{nombre:"Mauri", edad:25}, {nombre:"Daiana", edad:13}]);
// console.log(yo.getPromedioEdad());

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona