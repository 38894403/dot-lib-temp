export default class TimeManager {
    ids;
    list = new Set();
    static _instance;
  
    constructor() {}
  
    static get instance() {
      if (!TimeManager._instance)
        Object.defineProperty(TimeManager, "_instance", {
          // 将TimeManager的_instance属性的值设置为TimeM一个实例化对象anager的，并且该属性是不可修改、不可枚举、不可修改或删除描述对象的
          value: new TimeManager(),
        });
  
      return TimeManager._instance;
    }
  
    add(elem) {
      this.list.add(elem);
      if (this.list.size > 0 && !this.ids)
        this.ids = setInterval(() => this.update(), 16);
    }
  
    remove(elem) {
      this.list.delete(elem);
      if (this.list.size === 0 && this.ids) {
        clearInterval(this.ids);
        this.ids = undefined;
      }
    }
  
    update() {
      this.list.forEach((item) => {
        if (item.update) item.update();
      });
    }
  }
  
  