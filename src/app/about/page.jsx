"use client"
import React from "react";
import styles from "./aboutstyle.module.css";
import Menu from "@/components/Menu";
import { useSearchParams } from "next/navigation";

const page = ({ searchParams }) => {
  // const page = ({searchParams}) => {

   const params = useSearchParams();

  return (
    <div className={styles.myText}>
      <Menu />

      <h1>THis is an about page</h1>

      {/* <h2>{searchParams.name}</h2>
      <h2>{searchParams.price}</h2> */}


      <h2>{params.get('name')}</h2>
      <h2>{params.get("price")}</h2>
    </div>
  );
};

export default page;
