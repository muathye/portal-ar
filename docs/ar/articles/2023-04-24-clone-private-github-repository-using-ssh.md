---
# outline: deep
layout: doc
dir: rtl
title: استنساخ مستودع قتهب خاص باستخدام SSH
description: إذا كان لديك مستودع خاص في قتهب وتريد استنساخ هذا المستودع في سيرفر أو جهازك الشخصي عن طريق SSH تابع هذه المقالة
date: 2023-04-24
---

# أستنساخ مستودع قتهب خاص باستخدام SSH

إذا كان لديك مستودع خاص في قتهب وتريد استنساخ هذا المستودع في سيرفر أو جهازك الشخصي عن طريق SSH تابع هذه المقالة.

::: warning تنبيه
تأكد من تثبيت `git` وضبط اسم المستخدم والإيميل.
```sh
git config --global user.name "YOUR NAME"
git config --global  user.email "YOUR EMAIL"
```
:::

## الخطوة 1: انتج مفتاح SSH

لكي تنشئ مفتاح SSH جديد في السيرفر أو في جهازك الشخصي ، قم بتسجيل الدخول إلى حسابك في السيرفر - في حالة السيرفر - ثم افتح الطرفية terminal وقم بتنفيذ الأمر الآتي:

```sh
cd ~/.ssh && ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"
```

::: tip  تلميح
قد لا تنجح الطريقة بسبب عدم توفر مجلد `.ssh` ، قم بإنشاء المجلد بنفسك كما يلي:
```sh
mkdir ~/.ssh
```
:::

ادخل اسم المفتاح وليكن مثلا `id_ecdsa_github`:

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/home/muathye/.ssh/id_ecdsa): id_ecdsa_github
```

يمكنك ترك كلمة المرور فارغة لكي لا تحتاج لكتابتها عن تنفيذ أي أمر من أوامر SSH:

::: tip تلميح
قتهب تنصح بعمل كلمة مرور.
:::

```
Enter passphrase (empty for no passphrase):
```

هذا ما ستجده بعد الانتهاء من انشاء مفتاح جديد:

```
[muathye@cp25-ga ~]$ cd ~/.ssh && ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"
Generating public/private ecdsa key pair.
Enter file in which to save the key (/home/muathye/.ssh/id_ecdsa): id_ecdsa_github
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in id_ecdsa_github.
Your public key has been saved in id_ecdsa_github.pub.
The key fingerprint is:
SHA256:QX44K9z1/5aKs2tHeNYtC55GUCthePilotH2G2a/b4A your_email@example.com
The key's randomart image is:
+---[ECDSA 521]---+
|   0o+.=o        |
|    0o.+o.       |
|     o .= o      |
|    ..o+o* .     |
|     o-SM . .    |
|    . =E=+ . .   |
|       0o.+   . .|
|        .*.+.  o.|
|        .+O+o....|
+----[SHA256]-----+
[muathye@cp25-ga .ssh]$
```

## الخطوة 2 : منح الصلاحيات للمفتاح

بعد إنشاء المفتاح سيتوجب علينا منح صلاحيات معينة باستخدام الأوامر التالية:

```sh
eval `ssh-agent -s`
```

```sh
ssh-add ~/.ssh/id_ecdsa_github
```

## الخطوة 3: تسجيل المفتاح في قتهب

بعد إنشاء المفتاح ، سنقوم بنسخ المفتاح العام إلى حساب قتهب أو المستودع وذلك بحسب الحاجة
ولكي تتمكن من نسخ المفتاح قم بتنفيذ الأمر الآتي: ثم انسخ محتوى المفتاح العام

```sh
cat ~/.ssh/id_ecdsa_github.pub
```

هذا مثال لما ستجده من تنفيذ الأمر السابق

```
[muathye@cp25-ga ~]$ cat ~/.ssh/id_ecdsa_github.pub
ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdTItbmlMjEAABAGKIkR0re+PrCLRGl0yBWYIHuq9aErCLRGl0jIDAEjY+WsENmnwtQ8cyBwE7aV2heKTtfwE7aV2h7NnJ61ZXqeKTtfwEsr4R+L/qHL0GbeIVCuZXf67Krr7KrrYB3ybjudWu7xgqZgrr59cq9aErCLRCOis/ICojHy67cp9OCnCFLD1MJPg== your_email@example.com
```

أذهب إلى `settings` المستودع أو `settings` الحساب الشخصي ، ثم اختر من القائمة الجانبية `Deploy Keys` وقم بإضافة مفتاح جديد بالنقر على `Add deploy key` أعلى يمين الصفحة كما بالصورة التالية:

![An image](/articles/2023-04-24/deploy-keys.png)

::: info ملاحظة
إذا أردت أن تربط مستودع واحد بالسيرفر قم بتطبيق الخطوات في إعدادات المستودع نفسه ، أما إذا أردت أن تربط حسابك مع السيرفر بحيث تكون جميع مستودعاتك مربوطة بالسيرفر فقم بتطبيق الخطوات السابقة في إعدادات الحساب الشخصي.
:::


املئ الحقول كالتالي:

- `Title` : اسم المفتاح ويفضل أن يكون معبرًا كي تتذكر وظيفته سنسميه مثلا `muathye_shared_host`.
- `Key` : قم بلصق محتوى المفتاح العام الذي قمنا بنسخه بالخطوة السابقة `id_ecdsa_github.pub`.
- `Allow write access` : قم بالتحديد على هذا الخيار لكي تتمكن من رفع التعديلات من السيرفر إلى المستودع، فبدون هذا الخيار ستتمكن من سحب التعديلات من المستودع إلى السيرفر ولن تستطيع رفع أي تعديلات إلى المستودع.

![An image](/articles/2023-04-24/add-deploy-key.png)

قم بتأكيد حسابك بإدخال كلمة المرور أو رمز OTP ، وستجد المفتاح قد تم إنشائه:

![An image](/articles/2023-04-24/deploy-key.png)

::: info ملاحظة
إلى هنا نكون قد أنهينا ربط المستودع بالسيرفر.
:::

## الخطوة 4 : أستنساخ المستودع إلى السيرفر

لعمل نسخة من المستودع في السيرفر سنحتاج إلى رابط المستودع لكي نقوم باستخدامه في عملية النسخ ، وللحصول على الرابط نذهب إلى الصفحة الرئيسية للمستودع ثم ننسخ الرابط الخاص ب SSH والذي سيكون مشابه لـ`git@github.com:open-sale/open-sale-web.git` انظر الصورة التالية:

![An image](/articles/2023-04-24/ssh-clone-url.png)

بعد نسخ رابط المستودع الخاص بـ SSH سنقوم بعمل الاستنساخ في السيرفر بالأوامر التالية:

::: info ملاحظة
قم بتغيير اسم المفتاح `id_ecdsa_github` إلى الاسم الذي استخدمته عند انشاء المفتاح في الخطوة الأولى.

قم بتغيير رابط المستودع `git@github.com:open-sale/open-sale-web.git` إلى الرابط الذي قمت بنسخة في الخطوة الرابعة.
:::

```sh
eval `ssh-agent -s`;
```

```sh
ssh-add ~/.ssh/id_ecdsa_github
```

```sh
git clone git@github.com:open-sale/open-sale-web.git
```

قم بكاتبة كلمة `yes` لأول مرة وذلك عند السؤال عن github host كي تضيفه إلى ما يسمى بال `known hosts`

```
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

هذا ما ستجده في نهاية المطاف

```
[muathye@cp25-ga ~]$ eval `ssh-agent -s`
Agent pid 2663399
[muathye@cp25-ga ~]$ ssh-add ~/.ssh/id_ecdsa_github
Identity added: /home/muathye/.ssh/id_ecdsa_github (your_email@example.com)
[muathye@cp25-ga ~]$ git clone git@github.com:open-sale/open-sale-web.git
Cloning into 'dr-offer'...
The authenticity of host 'github.com (140.82.112.4)' can't be established.
ECDSA key fingerprint is SHA256:QX44K9z1/5aKs2tHeNYtC55GUCthePilotH2G2a/b4A.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,140.82.112.4' (ECDSA) to the list of known hosts.
remote: Enumerating objects: 4549, done.
remote: Counting objects: 100% (4549/4549), done.
remote: Compressing objects: 100% (2849/2849), done.
remote: Total 4549 (delta 1619), reused 4549 (delta 1619), pack-reused 0
Receiving objects: 100% (4549/4549), 16.18 MiB | 12.17 MiB/s, done.
Resolving deltas: 100% (1619/1619), done.
Updating files: 100% (6085/6085), done.
[muathye@cp25-ga ~]$
```

الآن يمكنك أن تقوم باستنساخ أي تحديثات من المسودع إلى السيرفر وذلك بالدخول إلى المشروع ثم نسخ التعديلات كالتالي:

```sh
cd open-sale-web
```

```sh
git pull
```

::: tip تلميح
قد تواجهك المشكلة الآتية:
```
Warning: Permanently added the ECDSA host key for IP address '140.82.113.4' to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
قم بتنفيذ الأمرين الآتيين لحل المشكلة:

```sh
eval `ssh-agent -s`;

ssh-add ~/.ssh/id_ecdsa_github
```

قم بتغيير اسم المفتاح `id_ecdsa_github` إلى الاسم الذي استخدمته عند انشاء المفتاح في الخطوة الأولى.
:::

في هذه المقالة تعرفنا على طريقة ربط السيرفر بمستودع خاص في قتهب وذلك كي نتمكن من جلب التعديلات من المستودع إلى السيرفر. الخطوات السابقة يمكن تطبيقها لربط الجهاز الشخصي بالحساب الشخصي في قتهب.

## أهم الأوامر في المقالة السابقة.

```sh
cd ~/.ssh && ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"
```

```sh
eval `ssh-agent -s`;
```

```sh
ssh-add ~/.ssh/id_ecdsa_github
```

```sh
cat ~/.ssh/id_ecdsa_github.pub
```

```sh
git clone git@github.com:open-sale/open-sale-web.git
```

```sh
git pull
```
