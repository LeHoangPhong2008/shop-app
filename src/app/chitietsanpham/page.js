import Image from 'next/image';

import styles from "./chitietsanpham.module.css";
export default function ChiTietSanPham() {
    return (
        <div className={styles.chitietsanpham}>
            <div className={styles.mainContent}>
            <div className={styles.productGrid}>
            <div className={styles.productCard}>
               <Image src="/image/1.jpg" alt="Product 1" width={500} height={500} />
            </div>
            </div>
            </div>
               <div className={styles.hinhanh}></div>
               <h3>Áo khoác naruto</h3>
              
              <button className={styles.buyButton}>Mua Ngay</button>
              <p>100.000vnđ</p>
               <div className={styles.mota}></div>
               Biến hóa phong cách cùng áo [loại sản phẩm] anime [tên anime]!
Thiết kế nổi bật với hình ảnh nhân vật [tên nhân vật] sắc nét,<br />
in chất lượng cao trên chất liệu cotton/mix co giãn thoáng mát.<br />
Dành riêng cho các fan chân chính của [tên anime], <br />
chiếc áo không chỉ là trang phục, mà còn là cách bạn thể hiện đam mê!<br />

✔️ Vải mềm mại, thoáng khí – thoải mái cả ngày<br />
✔️ In sắc nét, không phai sau nhiều lần giặt<br />
✔️ Phù hợp đi chơi, đi học, cosplay nhẹ<br />

Phong cách đậm chất Otaku – Chất riêng không lẫn vào đâu được!<br />
               
               
       </div>
 );
}