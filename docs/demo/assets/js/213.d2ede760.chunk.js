(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{724:function(n,t,s){"use strict";s.r(t),t.default="class Vector2D extends Array {\n  constructor(x = 1, y = 0) {\n    super(x, y);\n  }\n\n  set x(v) {\n    this[0] = v;\n  }\n\n  set y(v) {\n    this[1] = v;\n  }\n\n  get x() {\n    return this[0];\n  }\n\n  get y() {\n    return this[1];\n  }\n\n  get length() {\n    return Math.hypot(this.x, this.y);\n  }\n\n  get dir() {\n    return Math.PI + Math.atan2(this.y, this.x);\n  }\n\n  copy() {\n    return new Vector2D(this.x, this.y);\n  }\n\n  add(v) {\n    this.x += v.x;\n    this.y += v.y;\n    return this;\n  }\n\n  scale(a) {\n    this.x *= a;\n    this.y *= a;\n    return this;\n  }\n\n  cross(v) {\n    return this.x * v.y - v.x * this.y;\n  }\n\n  dot(v) {\n    return this.x * v.x + v.y * this.y;\n  }\n\n  normalize() {\n    return this.scale(1 / this.length);\n  }\n\n  rotate(rad) {\n    const c = Math.cos(rad),\n      s = Math.sin(rad);\n    const [x, y] = this;\n\n    this.x = x * c + y * -s;\n    this.y = x * s + y * c;\n\n    return this;\n  }\n}\n\nconst container = document.getElementById('stage');\nconst scene = new spritejs.Scene({\n  container,\n  width: 1200,\n  height: 1200,\n});\n\nconst points = [new Vector2D(0, 200)];\nfor(let i = 1; i <= 4; i++) {\n  const p = points[0].copy().rotate(i * Math.PI * 0.4);\n  points.push(p);\n}\n\nconst layer = scene.layer();\nlayer.canvas.style.background = '#fff';\n\nconst polyline = new spritejs.Polyline({\n  points: [\n    points[0],\n    points[2],\n    points[4],\n    points[1],\n    points[3],\n  ],\n  fillColor: 'red',\n  fillRule: 'evenodd',\n  x: 600,\n  y: 600,\n});\nlayer.append(polyline);"}}]);