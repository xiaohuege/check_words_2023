import idiom from 'cnchar-idiom'
import { pinyin } from 'pinyin-pro';

Page({
  data: {
    input: '',
    words: []
  },
  bindSearch(e) {
    const str = e.detail.value.trim();
    if (!str) return;
    const words = [];
    const list = idiom(str.split(''))
    list.forEach((item) => {
      words.push({
        name: item,
        pinyin: pinyin(item)
      })
    })
    this.setData({ words, input: str })
  },
  onShareAppMessage() {}
});