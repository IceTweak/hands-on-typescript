namespace InterfaceInheritance {
    interface Thing {
        name: string;
        getFullName: () => string;
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor (name: string) {
            // no super for interfaces
            this.name = name;
        }
        updateWheelCount (newWheelCount: number): void {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
        showNumberOfWheels (): void {
            console.log(`moved Motorcycle ${this.wheelCount}`);
        }
        getFullName (): string {
            return "MC-" + this.name;
        }
    }

    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
}