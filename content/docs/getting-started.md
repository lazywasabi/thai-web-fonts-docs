---
title: เริ่มต้นใช้งาน
description: เริ่มใช้งาน CDN ฟอนต์ไทย Thai Web Fonts ใช้ฟรี
weight: 10
---

## ฟอนต์ที่ใช้งานได้ {#available-font}

ใช้ [jsDelivr](https://www.jsdelivr.com/) เพื่อใช้งานฟอนต์ผ่าน CDN

ดูรายชื่อฟอนต์พร้อมข้อมูล และตัวอย่างโค้ดสำหรับใช้บนเว็บไซต์ได้จากเมนูด้านซ้าย

## ไฟล์ฟอนต์ {#font-file}

URL สำหรับไฟล์ฟอนต์

```plaintext
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/ชื่อฟอนต์/ชื่อไฟล์.woff2
```

ดูรายชื่อไฟล์ที่ใช้งานได้ของแต่ละฟอนต์ได้ในหน้าข้อมูลฟอนต์ หรือดูรายชื่อไฟล์พร้อมลิงก์ CDN ได้[ที่นี่](https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/)

ตัวอย่างการใช้งาน:

```css
@font-face {
  font-family: 'Noto Sans Thai';
  src: url('https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/NotoSansThai/NotoSansThai-Regular.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
```

## CSS {#css}

{{< hint info >}}
ไฟล์ CSS รองรับในเวอร์ชัน 6.0.0 ขึ้นไป
{{< /hint >}}

ในหน้าข้อมูลฟอนต์จะมีไฟล์ CSS พร้อมใช้อยู่ โดย CSS นี้จะรองรับเฉพาะฟอนต์ทุกน้ำหนัก เฉพาะตัวปกติ ไม่รวมตัวเอียง ซึ่งครอบคลุมการใช้งานส่วนใหญ่ สามารถฝังไฟล์ CSS (&lt;link&gt;) หรือคัดลอก CSS (@font-face, @import) ไปใช้งานได้เลย

หากต้องการใช้งานน้ำหนักหรือรูปแบบอื่นๆ สามารถปรับแต่ง CSS ได้ด้วยตัวเอง โดยในแต่หน้าข้อมูลฟอนต์จะมีรายชื่อไฟล์ที่ใช้งานได้ทั้งหมดอยู่ครับ

URL สำหรับไฟล์ CSS

```plaintext
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/ชื่อฟอนต์/ชื่อฟอนต์.css
```

ตัวอย่างการใช้งาน

```html
<link href="https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/NotoSansThai/NotoSansThai.css" rel="stylesheet" />
```

### ย่อไฟล์ CSS {#css-minify}

jsDelivr สามารถย่อไฟล์ CSS ให้อัตโนมัติ โดยเติม `.min` ใน URL ไฟล์ CSS

ตัวอย่างไฟล์ CSS ปกติ:  
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/NotoSansThai/NotoSansThai.css

ตัวอย่างไฟล์ CSS หลังย่อ:  
https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@6/fonts/NotoSansThai/NotoSansThai.min.css
