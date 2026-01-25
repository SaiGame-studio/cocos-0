import { _decorator } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class Dog - Kế thừa từ Animal
 * Ví dụ về inheritance (kế thừa) và method overriding
 */
@ccclass('Dog')
export class Dog extends Animal {

    @property
    private isTrained: boolean = false;

    /**
     * Constructor với tham số
     */
    constructor() {
        super(); // Gọi constructor của class cha
        this._name = 'Chó';
    }

    /**
     * Override phương thức start
     */
    start() {
        super.start(); // Gọi phương thức start của class cha
        console.log(`${this._name} đã sẵn sàng!`);
    }

    /**
     * Implement phương thức abstract từ class cha
     */
    public makeSound(): void {
        console.log(`${this._name} kêu: Gâu gâu! 🐕`);
        this._energy -= 2;
    }

    /**
     * Override phương thức eat với hành vi riêng
     */
    public eat(food: string): void {
        super.eat(food); // Gọi phương thức eat của class cha
        console.log(`${this._name} vẫy đuôi vui vẻ!`);

    }

    /**
     * Phương thức riêng của Dog
     */
    public bark(): void {
        this.makeSound();
    }

    public fetch(): void {
        if (this.isTrained) {
            console.log(`${this._name} chạy đi lấy bóng!`);
            this._energy -= 10;
        } else {
            console.log(`${this._name} chưa được huấn luyện!`);
            this._energy -= 5;
        }
    }

    public train(): void {
        this.isTrained = true;
        console.log(`${this._name} đã được huấn luyện!`);
    }

    /**
     * Override phương thức getInfo
     */
    public getInfo(): string {
        return `${super.getInfo()}, Đã huấn luyện: ${this.isTrained ? 'Có' : 'Không'}`;
    }
}
