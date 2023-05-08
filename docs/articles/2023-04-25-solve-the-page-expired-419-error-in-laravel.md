---
# outline: deep
layout: doc
dir: rtl
title: حل مشكلة انتهاء الصحفة 419 في مشروع لارافيل
description: طريق حل مشكلة انتهاء الصفحة 419 في مشاريع لارافيل بسبب الجلسات
date: 2023-04-25
---

![An image](/articles/2023-04-25/419-page-expired.png)

# حل مشكلة انتهاء الصحفة 419 في مشاريع لارافيل

أحيانًا تصادفنا مشكلة (419 | PAGE EXPIRED) عند محاولة تسجيل الدخول أو زيارة أي رابط من نوع POST وذلك كله بسبب csrf token.

في هذه المقالة سنحاول التعرف على المشاكل الشائعة لمشكلة انتهاء الصفحة في لارافيل وطريق التعامل معها وحلها.

## دعنا نتعرف على csrf وأهيتها

رمز CSRF هو قيمة فريدة سرية و لا يمكن التنبؤ بها يتم إنشاؤها بواسطة تطبيق على السيرفر و يتم إرسالها إلى العميل (client) بحيث يتم تضمينها في اي طلب HTTP request تالٍ مرسل من العميل (client).

تكمن أهمية CSRF في أنها تمنع تزوير الطلب عبر المواقع (الإنجليزية: CSRF  / one-click attack / session riding) وهو أحد أنواع الاختراقات على مواقع الإنترنت، بحيث يتم إرسال معلومات خبيثة من المستخدم إلى موقع الإنترنت.

في مشاريع لارافيل Laravel إذا لم تستخدم أو تقوم بضبط إعدادت CSRF جيدًا ستظهر لك مشكلة انتهاء الصفحة 419 وفيما يلي طرق شائعة لحل المشكلة.

## طريق حل مشكلة Page Expired | 419

عند حدوث المشكلة بعد إرسال طلب من نوع POST ، قم بمراجعة الاستمارة FORM وتأكد من وضع `@csrf` كما يلي:

```blade
<form method="POST" action="{{route('login')}}">
    @csrf {{-- add @csrf field on your form --}}
    ...
</form>
```

وتأكد أيضًا من تواجد الرمز CSRF في وسم HEAD لتجنب ظهور المشكلة عند استدعاء AJAX كما يلي:

```blade
<!DOCTYPE html>
<html>
    <head>
        {{-- add csrf_token() field on your csrf-token meta tag under head tag --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

ففي حالة ظهور المشكلة في استدعاء AJAX لا تنسى أن تضمن رمز CSRF في الـheader الخاصة بالطلب كما يلي:

```javascript
$.ajaxSetup({
   headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
   }
});
```

قد يكون حل المشكلة في تغيير صلاحيات ملف `storage` كما يلي:

```sh
chmod -R 755 storage
```

يوصى بحذف التخزين المؤقت وذلك لتجنب مشاكل نحن في غنى عنها وذلك بالأمر الآتي:

```sh
php artisan cache:clear
```

تأكد من ضبط الـ `session` بحسب الحاجة وذلك في حالات نادرة لأن الإعدادات الإفتراضية بلارافيل جيدة. قم بتجربة تعديل القيم الآتية في ملف  `.env` :

```bash
APP_URL=https://muathye.com # The url of the website
SESSION_DRIVER=file # Or other supported drivers
SESSION_DOMAIN=muathye.com # The doamin without http
SESSION_SECURE_COOKIE=false # Or true
```

هناك حل لا أحبذه ولا أنصح به إلا أني سأذكره ، وهو إضافة استثناء على روابط مخصصة كي لا يتم التحقق من رمز CSRF عن طلب الوصول إليها من نوع POST.
قم بإضافة الروابط المستثناه في ملف `VerifyCsrfToken.php` كما في المثال الآتي:

```php
<?php
// App\Http\Middleware\VerifyCsrfToken.php
namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
  protected $except = [
    'payment/*', // routes group
    'specific-route', // specific route
  ];
}
```

وآخر حل أستخدمته شخصياً لحل المشكلة في بعض السيرفرات هو استخدام دالة `ob_start()` في أول سطر بملف `public/index.php` كما يلي:

```php
<?php
// public/index.php

ob_start();

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// ...
```

::: tip تلميح
```php
/** 
 * This function will take the contents of the output buffer
 * and returns a string that is to be sent to the browser for rendering
 * and removes the spaces or line breaks you put before starting PHP.
 */
ob_start();
```
:::
