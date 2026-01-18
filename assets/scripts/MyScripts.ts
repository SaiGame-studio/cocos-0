import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyScripts')
export class MyScripts extends Component {

    // 1. NUMBER - Kiểu số (điểm, máu, tiền, tốc độ...)
    @property
    score: number = 0;
    bossCount: number = 100;
    playerHP: number = 1000;
    //Biến

    // 2. STRING - Kiểu chuỗi (tên, thông báo...)
    @property
    playerName: string = "Sai Game";
    myNumber: string = "100";

    // 3. BOOLEAN - Kiểu đúng/sai (sống/chết, bật/tắt...)
    @property
    isCatAlive: boolean = false;


    // 4. NODE - Tham chiếu đến đối tượng trong game
    @property(Node)
    enemy: Node = null;

    // 5. ARRAY - Mảng/danh sách nhiều giá trị
    @property([Node])
    items: Node[] = [];

    start() {
        console.log("Điểm: " + this.score);
        console.log("Tên: " + this.playerName);
        console.log("Còn sống: " + this.isCatAlive);
    }

    update(deltaTime: number) {
        
    }
}


