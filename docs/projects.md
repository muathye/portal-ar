---
layout: doc
---

<style>
    span {
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
      justify-content: left;
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
    }

    .title {
      line-height: 64px;
      font-size: 56px;
      color: var(--vp-c-yellow);
    }
</style>


<h1 class="title">Projects</h1>

<div class="card project-list text-center">
  <span>Not released</span>
  <a href="https://open-sale.muathye.com" target="_blank">OpenSale [under construction]</a>
  <p>An open source e-commerce platform built with Laravel and flutter.</p>
  <p>We've already crafted the store for web sailors just like you — freeing you to shop without walking in malls.</p>
  <div class="project-logo"><img src="/projects/OpenSale/open-sale.svg"/></div>
</div>

<div class="card project-list text-center">
  <span>Dec 2022</span>
  <a href="https://eazycare.app" target="_blank">eazycare.app</a>
  <p>Searching and booking for laboratory tests and radiology imaging.</p>
  <div class="project-logo"><img src="/projects/eazycare.app/new-logo.svg"/></div>
</div>

<div class="card project-list text-center">
  <span>Nov 2021</span>
  <a href="https://sdelivery.co" target="_blank">sdelivery.co</a>
  <p>A delivery platform reservation of hotels, event halls and various services.</p>
  <div class="project-logo"><img src="/projects/sdelivery.co/light.png"/></div>
</div>

<div class="card project-list text-center">
  <span>Dec 2020</span>
  <a href="https://booking-a.com" target="_blank">booking-a.com</a>
  <p>A booking platform for reservation of hotels, event halls and various services.</p>
  <div class="project-logo"><img src="/projects/booking-a.com/booking-a-logo.jpg"/></div>
</div>

<div class="card project-list text-center">
  <span>July 2019</span>
  <a href="https://mokasweets.com" target="_blank">mokasweets.com</a>
  <p>An e-commerce platform for a famous bakery in Yemen</p>
  <ul>
    <li>Built the platform website using Laravel Framework.</li>
    <li>Built Laravel framework Backend.</li>
    <li>API support for flutter applications.</li>
    <li>Used svn to manage source code.</li>
    <li>Used VPS server for hosting the project.</li>
  </ul>
  <div class="project-logo"><img src="/projects/mokasweets.com/mokasweets-logo.svg"/></div>
</div>

