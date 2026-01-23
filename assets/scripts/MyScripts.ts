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
    isCatAlive: boolean = true;

    // 4. NODE - Tham chiếu đến đối tượng trong game
    @property(Node)
    enemy: Node = null;

    // 5. ARRAY - Mảng/danh sách nhiều giá trị
    @property([Node])
    items: Node[] = [];

    start() { //Method, Function
        // Gọi các hàm ví dụ

        console.log("MyScripts Start");
        // this.viDuToanTuSoHoc();
        //this.viDuToanTuSoSanh();
        //this.viDuToanTuGan();
        //this.viDuApDungGame();
        this.checkCat(100, 10);

        // this.countToTen();
        // this.printFruits();
    }

    // ========== 1. TOÁN TỬ SỐ HỌC (Arithmetic) ==========
    viDuToanTuSoHoc() {
        let a: number = 10;
        let b: number = 5;
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

        // c = this.tinhToanPhucTap(1, 10);  // Cộng
        // console.log("a + b = " + c);

        // c = this.tinhToanPhucTap(5, 1);  // Cộng
        // console.log("a + b = " + c);
    }

    congHaiSo(a: number, b: number): number {
        return a + b;
    }

    // Hàm thực hiện chuỗi các phép tính cộng trừ phức tạp
    tinhToanPhucTap(a: number, b: number): number {
        // Bước 1: Cộng a và b
        let buoc1 = a + b;
        console.log("Bước 1 (a + b): " + buoc1);

        // Bước 2: Trừ đi tích của a và b
        let buoc2 = buoc1 - (a * b);
        console.log("Bước 2 (buoc1 - a*b): " + buoc2);

        // Bước 3: Cộng với bình phương của a
        let buoc3 = buoc2 + (a * a);
        console.log("Bước 3 (buoc2 + a²): " + buoc3);

        // Bước 4: Trừ đi bình phương của b
        let buoc4 = buoc3 - (b * b);
        console.log("Bước 4 (buoc3 - b²): " + buoc4);

        // Bước 5: Cộng với tổng của a và b nhân 2
        let buoc5 = buoc4 + ((a + b) * 2);
        console.log("Bước 5 (buoc4 + (a+b)*2): " + buoc5);

        // Bước 6: Trừ đi hiệu của a và b
        let buoc6 = buoc5 - (a - b);
        console.log("Bước 6 (buoc5 - (a-b)): " + buoc6);

        // Bước 7: Cộng với trung bình của a và b
        let buoc7 = buoc6 + ((a + b) / 2);
        console.log("Bước 7 (buoc6 + (a+b)/2): " + buoc7);

        // Bước 8: Kết quả cuối cùng - trừ đi 10
        let ketQua = buoc7 - 10;
        console.log("Kết quả cuối cùng: " + ketQua);

        return ketQua;
    }

    // ========== 2. TOÁN TỬ SO SÁNH (Comparison) ==========
    viDuToanTuSoSanh() {
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
    }

    // ========== 3. TOÁN TỬ GÁN (Assignment) ==========
    viDuToanTuGan() {
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
    }

    // ========== 4. ÁP DỤNG VÀO GAME ==========
    viDuApDungGame() {
        console.log("=== Áp dụng vào game ===");

        this.playerHP = this.playerHP - 50;  // Mất 50 máu 
        console.log("HP sau khi bị đánh: " + this.playerHP);//950

        if (this.playerHP <= 0) {
            this.isCatAlive = false;  // Chết
        } else {
            this.isCatAlive = true;
        }

        this.score += 100;  // Cộng 100 điểm
        console.log("Điểm sau khi cộng: " + this.score);

        this.bossCount--;   // Giảm 1 boss
        console.log("Số boss còn lại: " + this.bossCount);
    }

    update(deltaTime: number) {

    }

    // ========== VÍ DỤ VỀ IF VÀ FOR ==========

    // Ví dụ về IF: Kiểm tra mèo sống hay chết dựa vào máu
    checkCat(currentHealth: number, damage: number) {
        console.log("=== Check Cat ===");
        console.log("Máu ban đầu: " + currentHealth);
        console.log("Sát thương: " + damage);

        // Trừ máu
        let healthAfterDamage = currentHealth - damage;
        console.log("Máu sau khi bị tấn công: " + healthAfterDamage);

        // Kiểm tra mèo còn sống không
        if (healthAfterDamage > 0) {
            console.log("Mèo vẫn còn sống!");
            this.isCatAlive = true;
        } else {
            console.log("Mèo đã chết!");
            this.isCatAlive = false;
        }

        return healthAfterDamage;
    }

    // Ví dụ về vòng lặp FOR
    countToTen() {
        console.log("=== Đếm từ 1 đến 10 ===");
        for (let i = 1; i <= 10; i++) {
            console.log("Số thứ " + i);
        }
    }

    // Ví dụ FOR với mảng
    printFruits() {
        console.log("=== Danh sách trái cây ===");
        const fruits = ["Táo", "Cam", "Chuối", "Xoài"];

        for (let i = 0; i < fruits.length; i++) {
            console.log("Trái cây thứ " + (i + 1) + ": " + fruits[i]);
        }
    }
}


