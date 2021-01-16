const data = {
  shopOnlineMenus: [
    [
      {title: 'マカロン', link: '#1'},
      {title: 'パティスリー（生ケーキ）', link: '#2'},
      {title: 'チョコレート', link: '#3'},
      {title: 'パウンドケーキ・焼き菓子', link: '#4'}
    ],
    [
      {title: 'サブレ・クッキー', link: '#5'},
      {title: 'キャンディー菓子', link: '#6'},
      {title: '紅茶・その他飲料', link: '#7'},
      {title: 'コンフィチュール（ジャム）', link: '#8'},
    ],
    [
      {title: 'ヴィエノワズリー（菓子パン）', link: '#9'},
      {title: 'アイスクリーム・ソルベ', link: '#10'},
      {title: '詰合せギフトセット', link: '#11'},
      {title: '本・グッズ', link: '#12'},
    ]
  ],
  shoppingGuideMenus: [
    [
      {title: 'ご利用ガイド', link: '#1'},
      {title: '配送・送料について', link: '#2'},
      {title: 'お支払い方法', link: '#3'},
      {title: 'よくあるご質問', link: '#4'},
      {title: 'お問い合わせ', link: '#5'}
    ]
  ],
  ourBrandMenus: [
    [
      {title: 'ピエール・エルメについて', link: '#1'},
      {title: 'ブランドヒストリー', link: '#2'},
      {title: '法人のお客様へ', link: '#3'},
      {title: 'ライセンスプロダクト', link: '#4'}
    ]
  ],
  aboutUsMenus: [
    [
      {title: '会社概要', link: '#1'},
      {title: 'プレスリリース', link: '#2'},
      {title: '採用情報', link: '#3'},
      {title: 'ニュースレター登録', link: '#4'}
  ]
  ],
  boutiquesMenus: [
    [
      {title: 'TOKYO AOYAMA', link: '#1'},
      {title: 'Heaven', link: '#2'},
      {title: 'ホテルニューオータニ', link: '#3'},
      {title: 'ザ・リッツ・カールトン', link: '#4'},
      {title: 'パーク ハイアット ニセコ HANAZONO', link:  '#5'}
    ],
    [
      {title: '伊勢丹新宿', link: '#6'},
      {title: '日本橋三越', link: '#7'},
      {title: '大丸東京', link: '#8'},
      {title: '西武池袋', link: '#9'},
      {title: '渋谷ヒカリエ', link: '#10'}
    ],
    [
      {title: '松屋銀座', link: '#11'},
      {title: '大丸神戸', link: '#12'},
      {title: 'そごう横浜', link: '#13'},
      {title: '名古屋栄三越', link: '#14'},
      {title: 'ジェイアール京都伊勢丹', link: '#15'}
    ]
  ]
}

export default data
export type Column = {
  title: string;
  link: string;
}
export type Columns = Array<Column>
export type Menu = Array<Columns>