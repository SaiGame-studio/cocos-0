import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyScript2')
export class MyScript2 extends Component {

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
    isCatAlive: boolean = true;


    // 4. NODE - Tham chiếu đến đối tượng trong game
    @property(Node)
    enemy: Node = null;

    // 5. ARRAY - Mảng/danh sách nhiều giá trị
    @property([Node])
    items: Node[] = [];

    start() {
        // ========== 1. TOÁN TỬ SỐ HỌC (Arithmetic) ==========
        let a: number = 10;
        let b: number = 3;
        let c: number = 0;

        console.log("=== Toán tử số học ===");

        c = a + b;  // Cộng
        console.log("a + b = " + c);  // 13
        
        c = a - b;  // Trừ
        console.log("a - b = " + c);  // 7

        c = a * b;  // Nhân
        console.log("a * b = " + c);  // 30

        c = a / b;  // Chia
        console.log("a / b = " + c);  // 3.333...

        c = a % b;  // Chia lấy dư
        console.log("a % b = " + c);  // 1

        // ========== 2. TOÁN TỬ SO SÁNH (Comparison) ==========
        let x: number = 5;
        let y: number = 10;
        let z: boolean = false;

        console.log("=== Toán tử so sánh ===");
        z = x > y;   // Lớn hơn
        console.log("x > y: " + z);   // false

        z = x < y;   // Nhỏ hơn
        console.log("x < y: " + z);   // true

        z = x >= 5;  // Lớn hơn hoặc bằng
        console.log("x >= 5: " + z);  // true

        z = x <= y;  // Nhỏ hơn hoặc bằng
        console.log("x <= y: " + z);  // true

        z = x === 5; // Bằng
        console.log("x === 5: " + z); // true

        z = x !== y; // Khác
        console.log("x !== y: " + z); // true

        // ========== 3. TOÁN TỬ GÁN (Assignment) ==========
        let score: number = 100;

        console.log("=== Toán tử gán ===");

        console.log("score ban đầu: " + score);

        score += 10;  // score = score + 10
        console.log("score += 10: " + score);  // 110

        score -= 5;   // score = score - 5
        console.log("score -= 5: " + score);   // 105

        score *= 2;   // score = score * 2
        console.log("score *= 2: " + score);   // 210

        score /= 3;   // score = score / 3
        console.log("score /= 3: " + score);   // 70

        score++;      // score = score + 1
        console.log("score++: " + score);      // 71

        score--;      // score = score - 1
        console.log("score--: " + score);      // 70

        // ========== ÁP DỤNG VÀO GAME ==========
        console.log("=== Áp dụng vào game ===");

        this.playerHP = this.playerHP - 50;  // Mất 50 máu 
        console.log("HP sau khi bị đánh: " + this.playerHP);//950

        if (this.playerHP <= 0) {
            this.isCatAlive = false;  // Chết
        }else{
            this.isCatAlive = true;
        }

        this.score += 100;  // Cộng 100 điểm
        console.log("Điểm sau khi cộng: " + this.score);

        this.bossCount--;   // Giảm 1 boss
        console.log("Số boss còn lại: " + this.bossCount);
    }

    update(deltaTime: number) {
        
    }
}


