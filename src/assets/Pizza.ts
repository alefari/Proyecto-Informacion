

export class Pizza {
    nombre: string;
    ingredientes: string;
    precio: number;

    constructor(nombre: string, ingredientes: string, precio: number) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }

    getNombre() {
        return this.nombre;
    }
    getIngredientes() {
        return this.ingredientes;
    }
    getPrecio() {
        return this.precio;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    setIngredientes(ingredientes: string) {
        this.ingredientes = ingredientes;
    }
    setPrecio(precio: number) {
        this.precio = precio;
    }


}
