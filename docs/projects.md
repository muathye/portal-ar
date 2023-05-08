---
layout: doc
---

<style>
    .project-list span {
      background: var(--vp-c-brand)
    }
    .project-list {
      padding-bottom: 1rem;
      padding-top: 1rem;
      border: 1px solid var(--vp-c-divider-light);
      border-radius: 5px;
      margin: 5px 0;
      padding: 5px;
      
    }
    .project-list:hover {
      box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    }
    .project-list span {
      background: rgb(120,255,214);
      background: linear-gradient(200deg, rgba(120,255,214,1) 0%, rgba(168,255,120,0) 60%);
    }
    .project-list .project-logo {
      margin: -5px;
      background: linear-gradient(90deg, rgba(255,255,255,1) 23%, rgba(255,255,255,0%) 98%) !important;
      position: relative;
      left: 5px;
    }
    .project-list .project-logo img {
      height: 30px !important;
      background-size: contain !important;
      background-repeat: no-repeat !important;
      background-position-y: bottom !important;
      background-position-x: right !important;
      border-radius:0;
      border-bottom-left-radius: 5px;
      padding: 2px;
      background: white;
      /* background: linear-gradient(145deg, rgba(120,255,214,1) 0%, rgba(168,255,120,0) 57%) !important; */
      position: relative;
      left: -5px;
    }
    
    .project-list a {
      display: flex;
      justify-content: center;
      font-size: 20px;
    }

    .border-t {
      border-top: solid 0.5px #bbb;
    }

    .project-list span {
      float: right;
      font-size: 12px;
      padding: 0 5px;
      border-radius: 0;
      margin: -5px;
      border-top-right-radius: 5px;
      position: absolute;
      right: 5px;
    }

    .title {
      line-height: 64px;
      font-size: 56px;
      color: var(--vp-c-yellow);
    }
    .module-border-wrap {
      max-width: 100vw;
      margin: -11px;
      position: relative;
      /* background: linear-gradient(to right, red, purple); */
      background: linear-gradient(0deg, rgba(120,255,214,1) 0%, rgba(168,255,120,0) 60%);
      padding: 10px;
      border-radius: 10px;
      background-clip: padding-box;
      border: solid 5px transparent;
    }

    .module {
      background: #fff;
      padding: 10px;
      width: 100vw;
      height: auto;
    }

    .list {
      margin: 0 30px !important
    }
</style>


<h1 class="title">المشاريع</h1>

<div class="card project-list text-center">
  <span>لم بتم النشر</span>
  <a class="title-center" href="https://open-sale.muathye.com" target="_blank">OpenSale [تحت التطوير]</a>
  <p>منصة تجارة إلكترونية مفتوحة المصدر مبنية ب Laravel و Flutter.</p>
  <p>لقد صممنا المتجر بالفعل للبحارة على شبكة الإنترنت مثلك - مما يتيح لك التسوق دون الحاجة إلى المشي في المراكز التجارية.</p>
  <div class="module-border-wrap">
    <img class ="module" src="/projects/OpenSale/open-sale.svg"/>
  </div>
</div>

<div class="card project-list text-center">
  <span>ديسمبر 2022</span>
  <a class="title-center" href="https://eazycare.app" target="_blank">eazycare.app</a>
  <p>البحث والحجز لإجراء الفحوصات المخبرية والصور الشعاعية.</p>
  <div class="module-border-wrap">
    <img class ="module" src="/projects/eazycare.app/new-logo.svg"/>
  </div>
</div>

<div class="card project-list text-center">
  <span>نوفمبر 2021</span>
  <a class="title-center" href="https://sdelivery.co" target="_blank">sdelivery.co</a>
  <p>منصة توصيل الحجوزات للمطاعم والصيدليات والخدمات المختلفة.</p>
  <div class="module-border-wrap">
    <img class ="module" src="/projects/sdelivery.co/light.png"/>
  </div>
</div>

<div class="card project-list text-center">
  <span>ديسمبر 2020</span>
  <a class="title-center" href="https://booking-a.com" target="_blank">booking-a.com</a>
  <p>منصة حجوزات لحجز الفنادق وقاعات الأحداث والخدمات المختلفة.</p>
  <div class="module-border-wrap">
    <img class ="module" src="/projects/booking-a.com/booking-a-logo.jpg"/>
  </div>
</div>

<div class="card project-list text-center">
  <span>يوليو 2019</span>
  <a class="title-center" href="https://mokasweets.com" target="_blank">mokasweets.com</a>
  <p>منصة تجارية إلكترونية لمتجر مشهور باليمن</p>
  <ul class="list">
    <li>تم بناء موقع المنصة باستخدام إطار عمل لارافيل Laravel.</li>
    <li>تم بناء الجزء الخلفي Backend باستخدام إطار عمل لارافيل Laravel.</li>
    <li>دعم API لتطبيقات Flutter.</li>
    <li>تم استخدام SVN لإدارة الشفرة المصدرية.</li>
    <li>تم استخدام خادم VPS لاستضافة المشروع.</li>
  </ul>
  <div class="module-border-wrap">
    <img class ="module" src="/projects/mokasweets.com/mokasweets-logo.svg"/>
  </div>
</div>

