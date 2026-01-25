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
    public animals: Animal[] = [];

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
        this.animals.forEach(animal => {
            animal.makeSound();
        });
    }

    /**
     * Lấy thông tin tất cả động vật
     */
    public getAllAnimalsInfo(): string {
        let info = `=== Danh sách ${this.animals.length} động vật ===\n`;
        this.animals.forEach((animal, index) => {
            info += `${index + 1}. ${animal.getInfo()}\n`;
        });
        return info;
    }
}
