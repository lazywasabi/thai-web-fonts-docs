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
  previewFile: https://fonts-files.shabu.dev/fonts/MiSansThaiVF.woff2
  weight:
    weight: [150, 200, 250, 305, 330, 380, 450, 520, 630, 700]
    default: 330
  variable:
    weight:
      min: 150
      max: 700
contentPlacement: usage
tags:
- ไม่มีหัว
---

## การใช้งาน
{class="mt-4"}

* หากต้องการใช้งานฟอนต์นี้ ดาวน์โหลดฟอนต์โดยตรงจากเว็บไซต์ของ Xiaomi โดยคลิกปุ่มดาวน์โหลดด้านบน
* สัญญาอนุญาตของฟอนต์ MiSans Thai ไม่อนุญาตให้เผยแพร่ไฟล์ฟอนต์ได้ ฟอนต์นี้จึงไม่อยู่ใน Thai Web Fonts บน GitHub และไม่มี CDN ให้ใช้งานเหมือนฟอนต์อื่น ๆ
* ฟอนต์ MiSans Thai อนุญาตให้ใช้งานเชิงพาณิชย์ได้ฟรี [ดูคำถามที่พบบ่อย](https://hyperos.mi.com/font/en/faq/) หรืออ่านสัญญาอนุญาตฉบับเต็มได้ที่ลิงก์ด้านล่าง
* ฟอนต์นี้รองรับเฉพาะตัวอักษรไทย หากต้องการใช้ตัวอักษรละติน แนะนำให้ใช้คู่กับ[ฟอนต์ MiSans Latin](https://hyperos.mi.com/font/en/details/latin/)
* ฟอนต์นี้รองรับ Variable Fonts ปรับน้ำหนัก (weight) ได้ระหว่าง 150 - 700
* การกำหนดน้ำหนักฟอนต์จะไม่เหมือนฟอนต์อื่น ๆ โดยมีรายชื่อน้ำหนักดังนี้
  * 150: Thin
  * 200: ExtraLight
  * 250: Light
  * 305: Normal
  * 330: Regular
  * 380: Medium
  * 450: DemiBold
  * 520: SemiBold
  * 630: Bold
  * 700: Heavy

<style>
@font-face {
  font-family: 'MiSans Thai';
  src: url('https://fonts-files.shabu.dev/fonts/MiSansThaiVF.woff2') format('woff2');
  font-style: normal;
  font-weight: 150 700;
  font-display: swap;
}

@font-face {
  font-family: 'MiSans Latin';
  src: url('https://fonts-files.shabu.dev/fonts/MiSansLatinVF.woff2') format('woff2');
  font-style: normal;
  font-weight: 150 700;
  font-display: swap;
}

.font-preview-content {
  font-family: 'MiSans Thai', 'MiSans Latin', sans-serif !important;
}

.twf-font-single-download-links .col-6,
.twf-font-single-usage {
  display: none;
}
</style>

<script>
  
  const miSansWeightDropdown = document.querySelectorAll(".twf-font-preview-settings-weight-dropdown .dropdown-item");
  const miSansWeightMap = {
    150: "Thin",
    200: "ExtraLight",
    250: "Light",
    305: "Normal",
    330: "Regular",
    380: "Medium",
    450: "DemiBold",
    520: "SemiBold",
    630: "Bold",
    700: "Heavy"
  };

  miSansWeightDropdown.forEach(button => {
    const dataValue = parseInt(button.dataset.value);
    if (miSansWeightMap[dataValue]) {
      button.textContent = miSansWeightMap[dataValue] + " (" + dataValue + ")";
    } else {
      button.textContent = dataValue;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    setWeight(330);
  });
</script>
