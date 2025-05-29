import Image from "next/image"; 
import styles from "./header.module.css";
import Link from "next/link";

export default function Home() { 
  return ( 
    <div className={styles.header}>  
        <div className={styles.logo}> 
          <Image src="/image/naruto.jpg" alt="Logo" width={1905} height={1000} />
        </div> 
       <nav className={styles.nav}> 
        <ul>  
          <li><a href="#home">Trang chủ</a></li> 
          <li><a href="#cart">Giỏ Hàng</a></li> 
          <li><a href="#products">Sản phẩm</a></li> 
          <li><a href="#services">Dịch Vụ</a></li> 
          <li><a href="#contact">Liên Hệ</a></li>
        </ul> 
      </nav>
    </div>
  );
}