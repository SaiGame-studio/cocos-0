import { _decorator, Component, Node, Label, randomRange, randomRangeInt } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Class Animal cơ bản - Lớp cha cho tất cả động vật
 * Đây là ví dụ về Abstract class trong TypeScript
 */
@ccclass('Animal')
export abstract class Animal extends Component {
    
    @property
    protected nameAnimal: string = '';

    @property
    protected _age: number = 0;

    @property
    protected _energy: number = 100;

    @property
    protected weight: number = 0;

    /**
     * Constructor - Hàm khởi tạo
     */
    constructor() {
        super();
    }

    /**
     * Phương thức khởi tạo khi component được load
     */
    start() {
        this.randomWeight();
    }

    protected randomWeight(){
        this.weight = randomRangeInt(1,70);
    }

    /**
     * Getter và Setter - Cách đóng gói dữ liệu
     */
    public getName(): string {
        return this.nameAnimal;
    }

    public setName(name: string): void {
        this.nameAnimal = name;
    }

    public getAge(): number {
        return this._age;
    }

    public setAge(age: number): void {
        this._age = age;
    }

    public getEnergy(): number {
        return this._energy;
    }

    /**
     * Phương thức abstract - Các class con bắt buộc phải implement
     */
    public abstract makeSound(): void;

    /**
     * Phương thức có thể override - Có implementation mặc định
     */
    public eat(food: string): void {
        this._energy += 10;
        console.log(`${this.nameAnimal} đang ăn ${food}. Năng lượng: ${this._energy}`);
    }

    public sleep(): void {
        this._energy += 20;
        console.log(`${this.nameAnimal} đang ngủ. Năng lượng: ${this._energy}`);
    }

    public move(): void {
        this._energy -= 5;
        console.log(`${this.nameAnimal} đang di chuyển. Năng lượng: ${this._energy}`);
    }

    /**
     * Phương thức hiển thị thông tin
     */
    public getInfo(): string {
        return `Tên: ${this.nameAnimal}, Tuổi: ${this._age}, Năng lượng: ${this._energy}`;
    }
}
