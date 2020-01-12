---
title: 'Aenean magna neque'
date: '2019-02-07'
tags: 'frontend'
preview: 'Proin at mattis eros, eu pharetra metus. Proin in iaculis urna. Nullam arcu nulla, lobortis eu rutrum vel, sollicitudin id sapien. In justo est, laoreet sed pellentesque venenatis, malesuada eget sem. Aenean magna neque, lobortis eget imperdiet rutrum, molestie ullamcorper lacus.'
---

Proin at mattis eros, eu pharetra metus. Proin in iaculis urna. Nullam arcu nulla, lobortis eu rutrum vel, sollicitudin id sapien. In justo est, laoreet sed pellentesque venenatis, malesuada eget sem. Aenean magna neque, lobortis eget imperdiet rutrum, molestie ullamcorper lacus.

Duis id dignissim purus. Suspendisse eu lectus lobortis, bibendum dui non, egestas urna. Aliquam auctor libero posuere lorem ultricies mollis. Curabitur mollis vitae neque volutpat dictum. Integer vestibulum accumsan lectus sed tempor. Donec et malesuada turpis. Donec at lacinia felis.

## Proin tempus

Nullam a venenatis dolor. Proin eleifend nulla in convallis egestas. Ut fringilla quam et lectus porttitor, vel eleifend purus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst.

### Sed fermentum cursus

Nam eleifend, est vel maximus accumsan, augue velit sagittis odio, nec laoreet leo turpis sollicitudin odio. Sed fermentum cursus urna vel sodales. Proin tempus dictum lacus eget vestibulum. Sed gravida et ante in molestie. Aenean id scelerisque turpis, a laoreet leo.

```javascript
if (!Object.create) {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

### Mauris consequat

Mauris consequat, ante id laoreet molestie, mauris massa rutrum mi, non malesuada quam mi sit amet erat. Nulla efficitur erat at euismod maximus.

```javascript
var magicSort = function(arr) {
  var temp = 0;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 2; j++) {
      if (j % 2 === 0 && arr[j] < arr[j + 2]) {
        temp = arr[j];
        arr[j] = arr[j + 2];
        arr[j + 2] = temp;
      } else if (j % 2 === 1 && arr[j] > arr[j + 2]) {
        temp = arr[j];
        arr[j] = arr[j + 2];
        arr[j + 2] = temp;
      }
    }
  }
  return arr;
}
```