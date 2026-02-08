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

    // Danh sách động vật đã được sắp xếp theo trọng lượng
    @property([Animal])
    protected sortedAnimals: Animal[] = [];

    protected start(): void {
        this.findMin();
        // this.sortBubbleAnimals();
        this.sortAnimalsWithBuiltInMethod();
    }

    protected findMin() {
        this.manager.getAnimals().forEach((animal) => {
            if (this.minAnimal == null) {
                this.minAnimal = animal;
                return;
            }

            if (animal.getWeight() < this.minAnimal.getWeight()) {
                this.minAnimal = animal;
            }
        })
    }

    /**
     * Sắp xếp tất cả động vật theo trọng lượng (tăng dần) - Bubble Sort
     */
    protected sortBubbleAnimals(): void {
        // Copy mảng animals từ manager
        this.sortedAnimals = [...this.manager.getAnimals()];

        // Thuật toán Bubble Sort
        const n = this.sortedAnimals.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // So sánh 2 phần tử kế tiếp
                if (this.sortedAnimals[j].getWeight() > this.sortedAnimals[j + 1].getWeight()) {
                    // Hoán đổi nếu phần tử trước lớn hơn phần tử sau
                    const temp = this.sortedAnimals[j];
                    this.sortedAnimals[j] = this.sortedAnimals[j + 1];
                    this.sortedAnimals[j + 1] = temp;
                }
            }
        }

        console.log('=== Danh sách động vật đã sắp xếp theo trọng lượng ===');
        this.sortedAnimals.forEach((animal, index) => {
            console.log(`${index + 1}. ${animal.node.name}: ${animal.getWeight()}kg`);
        });
    }

    /**
     * Sắp xếp động vật bằng method sort có sẵn
     * @returns Mảng động vật đã sắp xếp theo trọng lượng tăng dần
     */
    public sortAnimalsWithBuiltInMethod(): void {
        this.sortedAnimals = [...this.manager.getAnimals()];
        this.sortedAnimals.sort((a, b) => b.getWeight() - a.getWeight());

        console.log('=== Sắp xếp bằng method sort() ===');
        this.sortedAnimals.forEach((animal, index) => {
            console.log(`${index + 1}. ${animal.node.name}: ${animal.getWeight()}kg`);
        });
    }
}


