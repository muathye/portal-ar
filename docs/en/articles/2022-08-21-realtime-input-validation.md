---
layout: doc
title: Realtime input validation
description: Sometimes we need to make a powerful validation like Laravel validation but it works in the backend and we want it to be in font-end specially on the `input` itself.
---

# Realtime input validation

<span style="color:gray">Updated 21 Aug 2022</span>

Sometimes we need to make a powerful validation like Laravel validation but it works in the backend and we want it to be in font-end specially on the `input` itself.

I created a package that makes input validation easy yet like Laravel validation.

Install the package by using composer:

```bat
composer require yemeni-open-source/blade-realtime-input
```

## Basic Usage

The `<input>` tag:

```blade
<x-realtime-input::strings name="username" rules="required|min:5" />
```

The `<select>` tag:

```blade
<x-realtime-input::options 
    rules="in:usd,yer"
    class="btn btn-default custom-select"
    name="currency" id="currency"
    >
    <option value="usd">USD</option>
    <option value="yer" selected>YER</option>
    <option value="sar">SAR</option>
</x-realtime-input::options>
```
You can add array names like following:

```blade
<x-realtime-input::strings
    name="username[]"
    rules="required|min:5"
    id="user"
    class="form-control"
    />
```

If you find the package helpful , give it a [star](https://github.com/Yemeni-Open-Source/blade-realtime-input) on github that encourage open source community to make it better.