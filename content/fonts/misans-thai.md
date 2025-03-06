---
title: MiSans Thai
description: ฟอนต์ MiSans Thai ใช้ฟรี และ CDN ฟอนต์ไทยอื่นๆ
menu:
  sidebar:
    parent: fonts
font:
  title: MiSans Thai
  titleThai: หมี่แซนส์ ไทย
  namespace: MiSansThai
  type: sans-serif
  author: Xiaomi Inc.
  thaifaces: https://thaifaces.com/specimen/misans-thai/
  website: https://hyperos.mi.com/font/en/details/thai/
  license: '[MiSans Font Intellectual Property License Agreement (PDF)](https://hyperos.mi.com/font-download/MiSans%E5%AD%97%E4%BD%93%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE.pdf)'
  download: https://hyperos.mi.com/font/en/details/thai/
  external: true
  previewFile: /files/MiSansThaiVF.woff2
  weight:
    weight: [150, 200, 250, 305, 330, 380, 450, 520, 630, 700]
  variable:
    weight:
      min: 150
      max: 700
tags:
- ไม่มีหัว
---

<div class="alert alert-info mt-3" role="alert">
  <h5 class="alert-heading">การใช้งานฟอนต์ MiSans Thai</h5>
    <ul class="mb-0">
      <li>ฟอนต์ MiSans Thai อนุญาตให้ใช้งานเชิงพาณิชย์ได้ฟรี (<a href="https://hyperos.mi.com/font/en/faq/" class="alert-link fw-normal" target="_blank" rel="noopener noreferrer">ดูคำถามที่พบบ่อย</a>)</li>
      <li>เนื่องด้วยสัญญาอนุญาตของฟอนต์ MiSans Thai ไม่อนุญาตให้เผยแพร่ฟอนต์ได้ ฟอนต์นี้จึงไม่อยู่บน GitHub ของ Thai Web Fonts และไม่สามารถใช้งานผ่าน CDN ของ jsDelivr ได้เหมือนฟอนต์อื่น ๆ</li>
      <li>หากต้องการใช้งานฟอนต์นี้ กรุณาดาวน์โหลดฟอนต์จากเว็บไซต์ของ Xiaomi โดยคลิกปุ่มดาวน์โหลดด้านล่างนี้</li>
      <li>ฟอนต์นี้รองรับเฉพาะตัวอักษรไทย หากต้องการใช้ตัวอักษรละติน แนะนำให้ใช้คู่กับ<a href="https://hyperos.mi.com/font/en/details/latin/" class="alert-link fw-normal" target="_blank" rel="noopener noreferrer">ฟอนต์ MiSans Latin</a></li>
      <li>ฟอนต์นี้รองรับ Variable Fonts ปรับน้ำหนัก (weight) ได้ระหว่าง 150 - 700</li>
    </ul>
</div>

<style>
@font-face {
  font-family: 'MiSans Thai';
  src: url('/files/MiSansThaiVF.woff2') format('woff2');
  font-style: normal;
  font-weight: 150 700;
  font-display: swap;
}

@font-face {
  font-family: 'MiSans Latin';
  src: url('/files/MiSansLatinVF.woff2') format('woff2');
  font-style: normal;
  font-weight: 150 700;
  font-display: swap;
}

.font-preview-content {
  font-family: 'MiSans Thai', 'MiSans Latin', sans-serif !important;
}

.twf-font-single-download-links .col-6,
.twf-font-preview-settings-weight-dropdown,
.twf-font-single-usage {
  display: none;
}
</style>
