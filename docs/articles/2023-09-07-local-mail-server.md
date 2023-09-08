---
# outline: deep
layout: doc
dir: rtl
title: اختبر رسائل البريد الإلكتروني أثناء العمل على "localhost" باستخدام "Mailhog"
description: مشكلة شائعة أثناء تطوير مواقع  على سبيل المثال  بـ"Laravel" في "localhost" باستخدام "WAMP Server" أو أدوات مماثلة هو أنك لا تستطيع إرسال أو اختبار وظيفة البريد الإلكتروني. بالمصادفة وجدت خيار سهل وسلس جدًا لتتمكن من إرسال الرسائل الإلكترونية ومن ثم يمكنك التحقق منها مباشرة في المتصفح.
date: 2023-09-07
---

![An image](/articles/2023-09-07/local-mail-server.png)

# اختبر رسائل البريد الإلكتروني أثناء العمل على "localhost" باستخدام "Mailhog"

مشكلة شائعة أثناء تطوير مواقع  على سبيل المثال  بـ"Laravel" في "localhost" باستخدام "WAMP Server" أو أدوات مماثلة هو أنك لا تستطيع إرسال أو اختبار وظيفة البريد الإلكتروني. بالمصادفة وجدت خيار سهل وسلس جدًا لتتمكن من إرسال الرسائل الإلكترونية ومن ثم يمكنك التحقق منها مباشرة في المتصفح.

::: info بإختصار
سنستخدم "[Mailhog](https://github.com/mailhog/MailHog)" (لإرسال/استقبال الرسائل الإلكترونية) و "Laravel’s Tinker" (لاختبار وظيفة البريد).
:::

### أولاً وقبل كل شيء تثبيت "Mailhog":

قم بتنزيل "MailHog" من صفحة [صفحة  الإصدارات الخاصة بـ Mailhog](https://github.com/mailhog/MailHog/releases) لنظام التشغيل المناسب لك.

ثم اضبط إعدادات خادم SMTP الصادر outgoing server كالتالي:

```txt
MAIL_DRIVER=smtp
MAIL_HOST=0.0.0.0
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

وعليه ستتمكن من إرسال بريد إلكتروني عن طريق Laravel's tinker بتنفيذ الأوامر التالي في سطر الأوامر:

- لتشغيل Laravel tinker

```sh
php artisan tinker
```

لإرسال بريد إلكتروني جديد في سطر الأوامر بداخل tinker:

```sh
Mail::raw('welcome email', function ($message) { $message->to('any@mail.com')->subject('Test email is working!'); });
```

وعليه ستتمكن من عرض البريد المرسل في المتصفح عن طريق زياردة الرابط [الخاص بعرض البريد الوارد لـ Mailhog](http://0.0.0.0:8025) ، انظر الى الصورة لمعاينة محتوى الإيميل

![Laravel Mailhog Test Email](/articles/2023-09-07/laravel-mailhog-test-email.png)

::: tip ملاحظة
قد لا يعمل رابط عرض البريد المرسل [0.0.0.0:8025](http://0.0.0.0:8025) لذلك قم بزيارة الرابط [127.0.0.1:8025](http://127.0.0.1:8025)
:::
