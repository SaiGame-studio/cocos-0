import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Class Animal cơ bản - Lớp cha cho tất cả động vật
 * Đây là ví dụ về Abstract class trong TypeScript
 */
@ccclass('Animal')
export abstract class Animal extends Component {
    
    @property
    protected _name: string = '';

    @property
    protected _age: number = 0;

    @property
    protected _energy: number = 100;

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
        
    }

    /**
     * Getter và Setter - Cách đóng gói dữ liệu
     */
    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
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
        console.log(`${this._name} đang ăn ${food}. Năng lượng: ${this._energy}`);
    }

    public sleep(): void {
        this._energy += 20;
        console.log(`${this._name} đang ngủ. Năng lượng: ${this._energy}`);
    }

    public move(): void {
        this._energy -= 5;
        console.log(`${this._name} đang di chuyển. Năng lượng: ${this._energy}`);
    }

    /**
     * Phương thức hiển thị thông tin
     */
    public getInfo(): string {
        return `Tên: ${this._name}, Tuổi: ${this._age}, Năng lượng: ${this._energy}`;
    }
}
