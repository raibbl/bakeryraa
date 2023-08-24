import Head from "next/head";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/menu");
  }, []);
  return <></>;
}
