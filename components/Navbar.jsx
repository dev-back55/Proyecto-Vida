'use client'
import { useState } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
      <div className={style.container}>
        <div className={style.logo}>
          <div className={style.callButton}>
            
            <Image
              src="/image/V-removebg.png"
              width={50}
              height={50}
              
              alt="logo proyecto vida"
            />
          </div>
          <div className={style.title}>  
            <Link href="/" passHref>Proyecto Vida</Link>
          </div>  
        </div>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link href="/about">QUIENES SOMOS</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/">MISIÓN</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/">PROYECTOS</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/">BLOG</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/" passHref>CONTACTO</Link>
          </li>
        </ul>
        <div className={style.hamburger} onClick={() => setOpen(!open)}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.line} />
        </div>
        <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
          <li className={style.menuItem}>
            <Link href="/" passHref>INICIO</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/about">QUIENES SOMOS</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/mision">MISIÓN</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/">PROYECTOS</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/blog">BLOG</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/contact" passHref>CONTACTO</Link>
          </li>
        </ul>
      </div>
    );
  };