import { _decorator, Component, Node } from 'cc';
import { AnimalManager } from './AnimalManager';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

@ccclass('AnimalSorting')
export class AnimalSorting extends Component {

    @property(AnimalManager)
    protected manager: AnimalManager;

    @property(Animal)
    protected minAnimal: Animal;

    protected start(): void {
        this.findMin();
    }

    protected findMin() {
        this.manager.getAnimals().forEach((animal) => {
                if(this.minAnimal == null){
                    this.minAnimal = animal;
                    return;
                }

                if(animal.getWeight() < this.minAnimal.getWeight()){
                    this.minAnimal = animal;
                }
        })


        
    }
}


