---
title: Noto Sans Thai Looped
description: CDN ฟอนต์ Noto Sans Thai Looped ใช้ฟรี และ CDN ฟอนต์ไทยอื่นๆ
menu:
  sidebar:
    parent: fonts
font:
  title: Noto Sans Thai Looped
  titleThai: โนโต แซนส์ ไทย ลูป
  namespace: NotoSansThaiLooped
  type: sans-serif
  author: Google
  thaifaces: https://thaifaces.com/specimen/noto-sans-thai-looped/
  website: https://fonts.google.com/noto/specimen/Noto+Sans+Thai+Looped
  source: https://github.com/notofonts/thai
  license: '[SIL Open Font License, version 1.1](https://github.com/notofonts/thai/blob/main/OFL.txt)'
  previewFile: full/OTF/NotoSansThaiLooped-Regular.otf
  weight:
    weight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  variable:
    weight:
      min: 100
      max: 900
    width:
      min: 62.5
      max: 100
tags:
- มีหัว
badge:
  text: อัปเดต
  class: text-bg-success
---

<div class="alert alert-success mt-3" role="alert">
  <h5 class="alert-heading">ฟอนต์อัปเดตใหม่</h5>
  <p class="mb-0">
    ฟอนต์นี้มีการปรับรูปลักษณ์ใหม่ในอัปเดตล่าสุด <a class="alert-link collapse-expand" data-bs-toggle="collapse" href="#collapseNotoLooped" aria-expanded="false" aria-controls="collapseNotoLooped">ดูข้อมูลเพิ่มเติม</a>
  </p>
  <div class="collapse" id="collapseNotoLooped">
    <div class="mt-3 pt-3 border-top border-success">
      <p>
        ฟอนต์ Noto Sans Thai Looped เพิ่มการรองรับ Variable Fonts และมีการปรับรูปลักษณ์ฟอนต์ใหม่
      </p>
      <p>
        ดูการเปรียบเทียบฟอนต์เวอร์ชันใหม่ (บน) และเก่า (ล่าง) ได้ด้านล่างนี้ หากต้องการใช้เวอร์ชันเก่า สามารถ<a class="alert-link" href="/docs/versioning/">กำหนดเลขเวอร์ชัน</a>ใน URL เป็น<a class="alert-link" href="https://cdn.jsdelivr.net/gh/lazywasabi/thai-web-fonts@7.3.0/fonts/NotoSansThaiLooped/" target="_blank" rel="noopener noreferrer">เวอร์ชัน 7.3.0</a> โปรดทราบว่าเวอร์ชันเก่าไม่รองรับ Variable Fonts
      </p>
      {{< noto-sans-thai-looped-compare >}}
    </div>
  </div>
</div>
<script>
  window.onload = (event) => {
    if (location.hash === "#expand-whatsnew") {
      document.querySelector(".collapse-expand").click();
    }
  };
</script>