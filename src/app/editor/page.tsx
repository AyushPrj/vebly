"use client"; // This is a client component 👈🏽

import Image from "next/image";

import WebBuilder from '../../components/WebBuilder';
import 'grapesjs/dist/css/grapes.min.css';

export default function Home() {

 return (
  <main>
    <WebBuilder />
  </main>
);
}
