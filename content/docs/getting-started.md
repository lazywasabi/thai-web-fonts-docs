---
title: เริ่มต้นใช้งาน
description: เริ่มใช้งาน CDN ฟอนต์ไทย Thai Web Fonts ใช้ฟรี
toc: true
menu:
  sidebar:
    parent: docs
    weight: 100
---

ใช้ [jsDelivr](https://www.jsdelivr.com/) เพื่อใช้งานฟอนต์ผ่าน CDN

## ไฟล์ฟอนต์ {#font-file}

URL สำหรับไฟล์ฟอนต์

```plaintext
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/ชื่อฟอนต์/ชื่อไฟล์.woff2
```

ทุกฟอนต์รองรับเฉพาะไฟล์ชนิด WOFF2 ดูรายชื่อไฟล์ที่ใช้งานได้ของแต่ละฟอนต์ได้ใน[หน้าข้อมูลฟอนต์](/fonts/) หรือดูรายชื่อทั้งหมดไฟล์พร้อมลิงก์ CDN ได้บน [jsDelivr](https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/)

ตัวอย่างการใช้งาน:

```css
@font-face {
  font-family: 'Noto Sans Thai';
  src: url('https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/NotoSansThai/NotoSansThai-Regular.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
```

## CSS {#css}

ในหน้าข้อมูลฟอนต์จะมีโค้ดพร้อมใช้อยู่ โค้ดนี้จะรองรับฟอนต์ทุกน้ำหนัก เฉพาะรูปแบบปกติ ซึ่งครอบคลุมการใช้งานส่วนใหญ่ สามารถฝังไฟล์ CSS (`<link>`) หรือคัดลอก CSS (`@font-face` หรือ `@import`) ไปใช้งานได้เลย

ถึงโค้ดพร้อมใช้จะรองรับฟอนต์ทุกน้ำหนัก แต่เบราว์เซอร์จะโหลดไฟล์ฟอนต์เฉพาะที่จำเป็นต้องใช้เท่านั้น ทำให้ไม่ส่งผลต่อประสิทธิภาพของเว็บไซต์

สำหรับผู้ที่ต้องการใช้งานฟอนต์รูปแบบอื่นๆ หากฟอนต์นั้นรองรับ เช่น ตัวเอียง (italic) สามารถปรับแต่ง CSS ได้ด้วยตัวเอง โดยในแต่หน้าข้อมูลฟอนต์จะมีรายชื่อไฟล์ที่ใช้งานได้ทั้งหมดอยู่

URL สำหรับไฟล์ CSS

```plaintext
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/ชื่อฟอนต์/ชื่อฟอนต์.css
```

ตัวอย่างการใช้งาน

```html
<link href="https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/NotoSansThai/NotoSansThai.css" rel="stylesheet" />
```

### ย่อไฟล์ CSS {#css-minify}

jsDelivr สามารถย่อไฟล์ CSS ให้อัตโนมัติ โดยเติม `.min` ใน URL ไฟล์ CSS

ตัวอย่างไฟล์ CSS ปกติ:  
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/NotoSansThai/NotoSansThai.css

ตัวอย่างไฟล์ CSS หลังย่อ:  
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@{{< twfversion major >}}/fonts/NotoSansThai/NotoSansThai.min.css
