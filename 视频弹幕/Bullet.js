import TimeManager from "./TimeManager.js";

export default class Bullet {
  elem;
  rect;
  width;

  x = 0;
  speed = 2;

  constructor(txt) {
    this.elem = this.createElem(txt);
  }

  // 根据传入的内容生成弹幕的内容
  createElem(txt) {
    if (this.elem) return this.elem;
    let div = document.createElement("div");
    Object.assign(div.style, {
      // 防止弹幕刚进入视频显示区域时出现换行的情况
      whiteSpace: "nowrap",
      position: "absolute",
    });
    div.textContent = txt;
    return div;
  }

  appendTo(parent) {
    if (typeof parent === "string") parent = document.querySelector(parent);
    parent.appendChild(this.elem);

    // 获取父容器的宽高及位置等属性
    this.rect = parent.getBoundingClientRect();
    Object.assign(this.elem.style, {
      // 限制弹幕到容器顶部的距离为父容器高度的1/4范围内
      top: (Math.random() * this.rect.height) / 4 + "px",
      left: this.rect.width + "px",
    });
    this.x = this.rect.width;
    this.width = this.elem.offsetWidth;
    // 将当前实例化的弹幕对象添加到TimeManager.instance所对应的list集合中
    TimeManager.instance.add(this);
  }

  update() {
    if (!this.width) return;

    this.x -= this.speed;
    this.elem.style.left = this.x + "px";
    // 如果当前实例弹幕对象已经完全移出了视频区域，则将其从TimeManager.instance的list集合中删除，并且将其对应的DOM元素从内存中完全删除
    if (this.x < -this.width) {
      TimeManager.instance.remove(this);
      this.elem.remove();
      this.elem = null;
    }
  }
}

