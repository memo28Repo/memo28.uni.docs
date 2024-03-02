---
outline: deep
---

# Apis




## radius

### drawRoundBackground

```ts
/**
 *
 * 绘制圆角背景
 *
 *
 * @param ctx
 * @param x
 * @param y
 * @param width
 * @param height
 * @param radiusTL
 * @param radiusTR
 * @param radiusBL
 * @param radiusBR
 * @param bgColor
 *
 * @public
 *
 */
export declare function drawRoundBackground(ctx: UniNamespace.CanvasContext, x: number, y: number, width: number, height: number, radiusTL: number, radiusTR: number, radiusBL: number, radiusBR: number, bgColor: string): void;
```

### drawRoundImage

```ts
/**
 *
 * 绘制圆角图片的函数
 *
 * @param ctx canvas 上下文
 * @param img 从getImageInfo获取的 img.path
 * @param x x坐标
 * @param y y坐标
 * @param width 宽
 * @param height 高
 * @param radiusTL 左上角圆角
 * @param radiusTR 右上角圆角
 * @param radiusBL 左下角圆角
 * @param radiusBR 右下角圆角
 *
 * @public
 */
export declare function drawRoundImage(ctx: UniNamespace.CanvasContext, img: string, x: number, y: number, width: number, height: number, radiusTL: number, radiusTR: number, radiusBL: number, radiusBR: number): void;

```
