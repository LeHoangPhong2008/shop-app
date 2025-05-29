"use client";
import Image from "next/image";
import styles from "./maincontent.module.css"
import Link from "next/link";

export default function Maincontent() {
  return (
    <main className={styles.mainContent}> 
        <section className={styles.content}> 
          <h1>Chào Mừng Bạn Đến Với Shop Làng Lá Của Chúng Tôi</h1>
          <p>Ở Đây Chúng Tôi Có Đủ Đồ Cho Bạn</p>
        </section>
        <section id="products" className={styles.productSection}>
          <h2>Sản Phẩm Của Làng Lá</h2>
         <Link href={`/chitietsanpham`}>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <Image src="/image/áo khoác naruto.jpg" alt="Product 1" width={300} height={300} />
              <h3>Áo khoác naruto</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo khoác akatsuki.jpg" alt="Product 2" width={300} height={300} />
              <h3>Áo khoác akatsuki</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo sơ mi akatsuki.jpg" alt="Product 3" width={300} height={300} />
              <h3>Áo sơ mi akatsuki</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo thun uchiha.jpg" alt="Product 1" width={300} height={300} />
              <h3>Áo thun uchiha</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo thun cửu vĩ.jpg" alt="Product 1" width={300} height={300} />
              <h3>Áo thun cửu vĩ</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo khoác kakashi.jpg" alt="Product 1" width={300} height={300} />
              <h3>Áo khoác kakashi</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
        
          </div>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <Image src="/image/quần akatsuki.jpg" alt="Product 1" width={300} height={300} />
              <h3>Quần akatsuki</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/quần ngắn naruto.jpg" alt="Product 2" width={300} height={300} />
              <h3>Quần ngắn naruto</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/quần ngắn rock lee.jpg" alt="Product 3" width={300} height={300} />
              <h3>Quần ngắn rock lee</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/trang phục jiraiya.jpg" alt="Product 1" width={300} height={300} />
              <h3>Trang phục jiraiya</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/trang phục sasuke.jpg" alt="Product 1" width={300} height={300} />
              <h3>Trang phục sasuke</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/áo choàng hokage.jpg" alt="Product 1" width={300} height={300} />
              <h3>Áo choàng hokage</h3>
              <p>100.000vnđ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
        
          </div>
          </Link>
        </section>

        
        
      </main> 
  );
}
