import { _decorator, Component } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class AnimalManager - Quản lý tất cả động vật trong game
 * Sử dụng Singleton Pattern để đảm bảo chỉ có 1 instance duy nhất
 */
@ccclass('AnimalManager')
export class AnimalManager extends Component {

    @property([Animal])
    // Danh sách tất cả động vật
    protected animals: Animal[] = [];

    protected start(): void {
        let animalCount = this.getAnimalCount();
        console.log("Animal Count: " + animalCount);

        this.makeAllAnimalsSound();
    }

    /**
     * Lấy số lượng động vật
     */
    public getAnimalCount(): number {
        return this.animals.length;
    }

    /**
     * Cho tất cả động vật phát ra tiếng kêu
     */
    public makeAllAnimalsSound(): void {
        console.log('=== Tất cả động vật phát ra tiếng kêu ===');
        this.animals.forEach((animal, index) => {
            console.log(animal.node.name + ": " + animal.getWeight());
            setTimeout(() => {
                animal.makeSound();
            }, index * 100);
        });
    }

    public getAnimals(): Animal[] {
        return this.animals;
    }
}
