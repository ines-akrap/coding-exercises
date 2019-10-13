class MyCalendarThree {
    constructor() {
      this.events = {};
    }
      
    book(start, end) {
      this.events[start] = (this.events[start] || 0) +1;
      this.events[end] = (this.events[end] || 0 ) -1;
      
      let res = 0;
      let cur = 0;
      Object.keys(this.events).forEach((entry) => {
          cur += this.events[entry];
          res = Math.max(res, cur);
      });
      return res;
    }
};