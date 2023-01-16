import wordConfig from '../config/words';
import { pinyin } from 'pinyin-pro';
import _ from 'underscore';
import init, { format, encrypt } from '../pkg/ch2';

const DURTION = 1000;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    step: 0,
    word: '',
    words: [],
    total: 0,
    idx: 0,
    socre: 0,
    curPinyin: '',
    time: 0,
  },
  async onLoad() {
    await init('/pkg/ch2_bg.wasm');
    console.log(111, format('tiger'), encrypt('tiger') )
  },
  bindChooseRange(e) {
    const dataset = e.currentTarget.dataset;
    const { total } = dataset;
    const words = _.shuffle(wordConfig[total]);
    this.setData({
      step: 1,
      total: words.length,
      words,
      word: words[0],
      idx: 0,
      score: 0,
    })
  },
  bindGame(e) {
    if (this.timer) return;
    const dataset = e.currentTarget.dataset;
    const { type } = dataset;
    const { idx, score, words } = this.data;
    const tmpObj = {}
    if (idx < words.length - 1) {
      // 未结束
      tmpObj['idx'] = idx + 1;
      tmpObj['word'] = words[idx + 1];
      if (type == 1) {
        tmpObj['score'] = score + 1;
      }
    } else {
      // 已结束
    }
    this._showPinyin(tmpObj);
  },
  _showPinyin(obj) {
    clearInterval(this.timer);
    const { word } = this.data;
    this.setData({
      curPinyin: pinyin(word),
      time: 2
    })
    this.timer = setInterval(() => {
      const { time } = this.data;
      if (time <= 1) {
        this.setData({
          ...obj,
          curPinyin: '',
          time: 0
        });
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.setData({
          time: time - 1
        });
      }
    }, DURTION);
  },
  bindFinish() {
    wx.showModal({
      title: '提示',
      content: "确定结束游戏",
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          this.setData({
            step: 0
          })
        }
      }
    })
  },
  bindSearch() {
    wx.navigateTo({
      url: './chengyu',
    });
  },
  onShareAppMessage() {}
})