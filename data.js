// Auto-generated from src/data/level01.json ~ level25.json
// Contains all level data for LearnChinese app

window.TOTAL_LEVELS = 25;

window.LEVEL_TITLES = {
  1: "인사 & 자기소개",
  2: "숫자 & 날짜",
  3: "가족 소개",
  4: "식당에서 주문",
  5: "길 묻기 & 방향",
  6: "쇼핑하기",
  7: "택시 & 대중교통",
  8: "시간 표현",
  9: "전화번호 & 주소",
  10: "음식 & 맛 표현",
  11: "감정 표현",
  12: "약속 잡기",
  13: "옷 & 외모",
  14: "날씨 & 계절",
  15: "취미 & 여가",
  16: "전화 통화",
  17: "은행 & 환전",
  18: "병원 & 약국",
  19: "공항 & 비행기",
  20: "호텔 체크인/아웃",
  21: "관광 & 사진",
  22: "긴급 상황",
  23: "직장 & 업무",
  24: "문화 & 명절",
  25: "종합 회화"
};

window.LEVEL_ICONS = [
  '👋', '🔢', '👨‍👩‍👧', '🍜', '🗺️', '🛍️', '🚕', '⏰', '📞', '🍕',
  '😊', '📅', '👔', '🌤️', '🎮', '📱', '🏦', '🏥', '✈️', '🏨',
  '📸', '🚨', '💼', '🎎', '🎓'
];

window.LEVEL_DATA = {
  1: {
    "level": 1,
    "title": "인사 & 자기소개",
    "titleCn": "打招呼和自我介绍",
    "description": "중국어로 인사하고 자기소개하는 기본 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好！",
        "pinyin": "Nǐ hǎo!",
        "korean": "안녕하세요!"
      },
      {
        "speaker": "B",
        "chinese": "你好！你叫什么名字？",
        "pinyin": "Nǐ hǎo! Nǐ jiào shénme míngzi?",
        "korean": "안녕하세요! 이름이 뭐예요?"
      },
      {
        "speaker": "A",
        "chinese": "我叫姜永敏。你呢？",
        "pinyin": "Wǒ jiào Jiāng Yǒngmǐn. Nǐ ne?",
        "korean": "저는 강영민이라고 해요. 당신은요?"
      },
      {
        "speaker": "B",
        "chinese": "我叫王明。你是哪国人？",
        "pinyin": "Wǒ jiào Wáng Míng. Nǐ shì nǎ guó rén?",
        "korean": "저는 왕밍이에요. 어느 나라 사람이에요?"
      },
      {
        "speaker": "A",
        "chinese": "我是韩国人。你是中国人吗？",
        "pinyin": "Wǒ shì Hánguó rén. Nǐ shì Zhōngguó rén ma?",
        "korean": "저는 한국 사람이에요. 당신은 중국 사람이에요?"
      },
      {
        "speaker": "B",
        "chinese": "是的，我是中国人。认识你很高兴！",
        "pinyin": "Shì de, wǒ shì Zhōngguó rén. Rènshi nǐ hěn gāoxìng!",
        "korean": "네, 저는 중국 사람이에요. 만나서 반갑습니다!"
      },
      {
        "speaker": "A",
        "chinese": "认识你我也很高兴！",
        "pinyin": "Rènshi nǐ wǒ yě hěn gāoxìng!",
        "korean": "저도 만나서 반갑습니다!"
      }
    ],
    "vocabulary": [
      {
        "chinese": "你好",
        "pinyin": "nǐ hǎo",
        "korean": "안녕하세요"
      },
      {
        "chinese": "名字",
        "pinyin": "míngzi",
        "korean": "이름"
      },
      {
        "chinese": "哪国人",
        "pinyin": "nǎ guó rén",
        "korean": "어느 나라 사람"
      },
      {
        "chinese": "韩国人",
        "pinyin": "Hánguó rén",
        "korean": "한국 사람"
      },
      {
        "chinese": "认识",
        "pinyin": "rènshi",
        "korean": "알다, 알게 되다"
      },
      {
        "chinese": "高兴",
        "pinyin": "gāoxìng",
        "korean": "기쁘다, 반갑다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "你叫什么名字？",
        "options": [
          "이름이 뭐예요?",
          "어느 나라 사람이에요?",
          "만나서 반갑습니다",
          "안녕하세요"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "저는 한국 사람이에요.",
        "options": [
          "我是中国人。",
          "我是韩国人。",
          "我叫韩国。",
          "你是韩国人。"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "认识你很___！",
        "options": [
          "高兴",
          "名字",
          "韩国",
          "什么"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "认识你很高兴！",
        "options": [
          "이름이 뭐예요?",
          "어느 나라 사람이에요?",
          "만나서 반갑습니다!",
          "저는 중국 사람이에요."
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "안녕하세요!",
        "options": [
          "再见！",
          "谢谢！",
          "对不起！",
          "你好！"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "你是哪国人？",
        "options": [
          "이름이 뭐예요?",
          "어느 나라 사람이에요?",
          "저는 중국 사람이에요.",
          "만나서 반갑습니다!"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我叫王明。",
        "options": [
          "저는 왕밍이에요.",
          "당신은 왕밍이에요.",
          "왕밍을 알아요.",
          "왕밍은 중국 사람이에요."
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "你是中国人吗？",
        "options": [
          "당신은 한국 사람이에요?",
          "당신은 중국 사람이에요?",
          "저는 중국 사람이에요.",
          "중국 사람을 알아요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "是的，我是中国人。",
        "options": [
          "아니요, 저는 한국 사람이에요.",
          "네, 저는 한국 사람이에요.",
          "네, 저는 중국 사람이에요.",
          "네, 당신은 중국 사람이에요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "你呢？",
        "options": [
          "당신은요?",
          "누구예요?",
          "뭐예요?",
          "어디예요?"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "认识你我也很高兴！",
        "options": [
          "만나서 반갑습니다!",
          "저도 만나서 반갑습니다!",
          "이름이 뭐예요?",
          "저는 기뻐요!"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "이름이 뭐예요?",
        "options": [
          "你是谁？",
          "你叫什么名字？",
          "你是哪国人？",
          "你好吗？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "만나서 반갑습니다!",
        "options": [
          "你好！",
          "谢谢你！",
          "认识你很高兴！",
          "再见！"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "어느 나라 사람이에요?",
        "options": [
          "你叫什么名字？",
          "你是哪国人？",
          "你是中国人吗？",
          "你好吗？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "저는 중국 사람이에요.",
        "options": [
          "我是韩国人。",
          "你是中国人。",
          "我是中国人。",
          "我叫中国人。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "저도 만나서 반갑습니다!",
        "options": [
          "认识你很高兴！",
          "认识你我也很高兴！",
          "你好！",
          "我也是韩国人！"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "당신은요?",
        "options": [
          "你好吗？",
          "你是谁？",
          "你呢？",
          "你叫什么？"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你叫___名字？",
        "options": [
          "什么",
          "哪国",
          "几个",
          "多少"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "我是___人。",
        "options": [
          "中文",
          "韩语",
          "韩国",
          "名字"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你是___人吗？",
        "options": [
          "韩国",
          "中国",
          "名字",
          "高兴"
        ],
        "answer": 1
      }
    ]
  },
  2: {
    "level": 2,
    "title": "숫자 & 날짜",
    "titleCn": "数字和日期",
    "description": "중국어 숫자와 날짜 표현을 배워봅시다. 생일과 요일도 함께 익혀요.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "今天几月几号？",
        "pinyin": "Jīntiān jǐ yuè jǐ hào?",
        "korean": "오늘 몇 월 며칠이에요?"
      },
      {
        "speaker": "B",
        "chinese": "今天三月十五号。",
        "pinyin": "Jīntiān sān yuè shíwǔ hào.",
        "korean": "오늘은 3월 15일이에요."
      },
      {
        "speaker": "A",
        "chinese": "今天星期几？",
        "pinyin": "Jīntiān xīngqī jǐ?",
        "korean": "오늘 무슨 요일이에요?"
      },
      {
        "speaker": "B",
        "chinese": "今天星期三。你的生日是几月几号？",
        "pinyin": "Jīntiān xīngqī sān. Nǐ de shēngrì shì jǐ yuè jǐ hào?",
        "korean": "오늘은 수요일이에요. 생일이 몇 월 며칠이에요?"
      },
      {
        "speaker": "A",
        "chinese": "我的生日是五月二十号。你呢？",
        "pinyin": "Wǒ de shēngrì shì wǔ yuè èrshí hào. Nǐ ne?",
        "korean": "제 생일은 5월 20일이에요. 당신은요?"
      },
      {
        "speaker": "B",
        "chinese": "我的生日是十月八号。",
        "pinyin": "Wǒ de shēngrì shì shí yuè bā hào.",
        "korean": "제 생일은 10월 8일이에요."
      },
      {
        "speaker": "A",
        "chinese": "你今年多大了？",
        "pinyin": "Nǐ jīnnián duō dà le?",
        "korean": "올해 몇 살이에요?"
      },
      {
        "speaker": "B",
        "chinese": "我今年二十五岁。",
        "pinyin": "Wǒ jīnnián èrshíwǔ suì.",
        "korean": "저는 올해 25살이에요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "今天",
        "pinyin": "jīntiān",
        "korean": "오늘"
      },
      {
        "chinese": "星期",
        "pinyin": "xīngqī",
        "korean": "요일"
      },
      {
        "chinese": "生日",
        "pinyin": "shēngrì",
        "korean": "생일"
      },
      {
        "chinese": "几月几号",
        "pinyin": "jǐ yuè jǐ hào",
        "korean": "몇 월 며칠"
      },
      {
        "chinese": "多大",
        "pinyin": "duō dà",
        "korean": "몇 살 (나이)"
      },
      {
        "chinese": "岁",
        "pinyin": "suì",
        "korean": "살 (나이 단위)"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "今天几月几号？",
        "options": [
          "오늘 무슨 요일이에요?",
          "오늘 몇 월 며칠이에요?",
          "생일이 언제예요?",
          "올해 몇 살이에요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "오늘은 수요일이에요.",
        "options": [
          "今天星期五。",
          "今天星期一。",
          "今天星期三。",
          "今天星期天。"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你的___是几月几号？",
        "options": [
          "星期",
          "今天",
          "名字",
          "生日"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "你今年多大了？",
        "options": [
          "오늘 몇 월 며칠이에요?",
          "올해 몇 살이에요?",
          "생일이 언제예요?",
          "이름이 뭐예요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "제 생일은 5월 20일이에요.",
        "options": [
          "我的生日是五月二十号。",
          "今天五月二十号。",
          "我的生日是二月五号。",
          "你的生日是五月二十号。"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "今天三月十五号。",
        "options": [
          "오늘은 3월 5일이에요.",
          "오늘은 3월 15일이에요.",
          "오늘은 5월 13일이에요.",
          "오늘은 10월 15일이에요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "今天星期几？",
        "options": [
          "오늘 몇 월 며칠이에요?",
          "오늘 무슨 요일이에요?",
          "올해 몇 살이에요?",
          "생일이 며칠이에요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我今年二十五岁。",
        "options": [
          "저는 올해 15살이에요.",
          "저는 올해 20살이에요.",
          "저는 올해 25살이에요.",
          "저는 올해 35살이에요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "我的生日是十月八号。",
        "options": [
          "제 생일은 8월 10일이에요.",
          "제 생일은 10월 18일이에요.",
          "제 생일은 10월 8일이에요.",
          "제 생일은 8월 8일이에요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "今天星期三。",
        "options": [
          "오늘은 월요일이에요.",
          "오늘은 화요일이에요.",
          "오늘은 수요일이에요.",
          "오늘은 목요일이에요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "你的生日是几月几号？",
        "options": [
          "올해 몇 살이에요?",
          "오늘 몇 월 며칠이에요?",
          "생일이 몇 월 며칠이에요?",
          "오늘 무슨 요일이에요?"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "올해 몇 살이에요?",
        "options": [
          "你今年几岁？",
          "你今年多大了？",
          "你几月几号？",
          "你的生日是几号？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "오늘 몇 월 며칠이에요?",
        "options": [
          "今天星期几？",
          "你的生日是几月几号？",
          "今天几月几号？",
          "今年几月？"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "오늘 무슨 요일이에요?",
        "options": [
          "今天几月几号？",
          "今天星期几？",
          "今天几号？",
          "你今年多大了？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "저는 올해 25살이에요.",
        "options": [
          "我今年二十岁。",
          "我今年二十五岁。",
          "你今年二十五岁。",
          "我的生日是二十五号。"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "제 생일은 10월 8일이에요.",
        "options": [
          "我的生日是八月十号。",
          "你的生日是十月八号。",
          "我的生日是十月八号。",
          "今天十月八号。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "당신은요?",
        "options": [
          "你好吗？",
          "你呢？",
          "你是谁？",
          "你几岁？"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "今天___几？",
        "options": [
          "生日",
          "几月",
          "星期",
          "多大"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我今年二十五___。",
        "options": [
          "号",
          "月",
          "年",
          "岁"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "今天三月十五___。",
        "options": [
          "岁",
          "号",
          "年",
          "星期"
        ],
        "answer": 1
      }
    ]
  },
  3: {
    "level": 3,
    "title": "가족 소개",
    "titleCn": "介绍家人",
    "description": "가족 구성원을 중국어로 소개하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "korean": "가족이 몇 명이에요?"
      },
      {
        "speaker": "B",
        "chinese": "我家有四口人。爸爸、妈妈、姐姐和我。",
        "pinyin": "Wǒ jiā yǒu sì kǒu rén. Bàba, māma, jiějie hé wǒ.",
        "korean": "저희 가족은 네 명이에요. 아빠, 엄마, 언니/누나, 그리고 저요."
      },
      {
        "speaker": "A",
        "chinese": "你姐姐做什么工作？",
        "pinyin": "Nǐ jiějie zuò shénme gōngzuò?",
        "korean": "언니/누나는 무슨 일을 해요?"
      },
      {
        "speaker": "B",
        "chinese": "她是老师。你家有几口人？",
        "pinyin": "Tā shì lǎoshī. Nǐ jiā yǒu jǐ kǒu rén?",
        "korean": "그녀는 선생님이에요. 당신 가족은 몇 명이에요?"
      },
      {
        "speaker": "A",
        "chinese": "我家有五口人。爸爸、妈妈、哥哥、弟弟和我。",
        "pinyin": "Wǒ jiā yǒu wǔ kǒu rén. Bàba, māma, gēge, dìdi hé wǒ.",
        "korean": "저희 가족은 다섯 명이에요. 아빠, 엄마, 형/오빠, 남동생, 그리고 저요."
      },
      {
        "speaker": "B",
        "chinese": "你有妹妹吗？",
        "pinyin": "Nǐ yǒu mèimei ma?",
        "korean": "여동생이 있어요?"
      },
      {
        "speaker": "A",
        "chinese": "没有，我没有妹妹。你爸爸妈妈做什么工作？",
        "pinyin": "Méiyǒu, wǒ méiyǒu mèimei. Nǐ bàba māma zuò shénme gōngzuò?",
        "korean": "아니요, 여동생은 없어요. 부모님은 무슨 일을 하세요?"
      },
      {
        "speaker": "B",
        "chinese": "我爸爸是医生，我妈妈是护士。",
        "pinyin": "Wǒ bàba shì yīshēng, wǒ māma shì hùshi.",
        "korean": "아빠는 의사이고, 엄마는 간호사예요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "家",
        "pinyin": "jiā",
        "korean": "집, 가족"
      },
      {
        "chinese": "爸爸",
        "pinyin": "bàba",
        "korean": "아빠"
      },
      {
        "chinese": "妈妈",
        "pinyin": "māma",
        "korean": "엄마"
      },
      {
        "chinese": "哥哥",
        "pinyin": "gēge",
        "korean": "형, 오빠"
      },
      {
        "chinese": "姐姐",
        "pinyin": "jiějie",
        "korean": "언니, 누나"
      },
      {
        "chinese": "弟弟",
        "pinyin": "dìdi",
        "korean": "남동생"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "你家有几口人？",
        "options": [
          "가족이 몇 명이에요?",
          "형제가 있어요?",
          "부모님은 뭐 하세요?",
          "여동생이 있어요?"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "저희 가족은 네 명이에요.",
        "options": [
          "我家有三口人。",
          "我家有五口人。",
          "我家有四口人。",
          "你家有四口人。"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我___是医生。",
        "options": [
          "姐姐",
          "爸爸",
          "妹妹",
          "弟弟"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你有妹妹吗？",
        "options": [
          "언니가 있어요?",
          "남동생이 있어요?",
          "여동생이 있어요?",
          "형이 있어요?"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "엄마는 간호사예요.",
        "options": [
          "妈妈是老师。",
          "妈妈是医生。",
          "妈妈是护士。",
          "姐姐是护士。"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "你姐姐做什么工作？",
        "options": [
          "언니/누나는 어디에 살아요?",
          "언니/누나는 몇 살이에요?",
          "언니/누나는 무슨 일을 해요?",
          "언니/누나가 있어요?"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "她是老师。",
        "options": [
          "그녀는 의사예요.",
          "그녀는 간호사예요.",
          "그녀는 선생님이에요.",
          "그녀는 학생이에요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "我爸爸是医生，我妈妈是护士。",
        "options": [
          "아빠는 간호사이고, 엄마는 의사예요.",
          "아빠는 의사이고, 엄마는 간호사예요.",
          "아빠는 선생님이고, 엄마는 간호사예요.",
          "아빠는 의사이고, 엄마는 선생님이에요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我没有妹妹。",
        "options": [
          "저는 언니가 없어요.",
          "저는 여동생이 있어요.",
          "저는 여동생이 없어요.",
          "저는 남동생이 없어요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "我家有五口人。",
        "options": [
          "저희 가족은 네 명이에요.",
          "저희 가족은 다섯 명이에요.",
          "저희 가족은 세 명이에요.",
          "저희 가족은 여섯 명이에요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你爸爸妈妈做什么工作？",
        "options": [
          "부모님은 어디에 사세요?",
          "부모님은 몇 살이세요?",
          "부모님은 무슨 일을 하세요?",
          "부모님이 계세요?"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "아빠는 의사예요.",
        "options": [
          "爸爸是老师。",
          "爸爸是护士。",
          "爸爸是医生。",
          "哥哥是医生。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "그녀는 선생님이에요.",
        "options": [
          "她是医生。",
          "她是护士。",
          "他是老师。",
          "她是老师。"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "가족이 몇 명이에요?",
        "options": [
          "你有几个人？",
          "你家有几口人？",
          "你有哥哥吗？",
          "你家在哪儿？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여동생이 없어요.",
        "options": [
          "没有姐姐。",
          "没有妹妹。",
          "没有弟弟。",
          "有妹妹。"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "저희 가족은 다섯 명이에요.",
        "options": [
          "我家有四口人。",
          "你家有五口人。",
          "我家有五口人。",
          "我家有六口人。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "언니/누나는 무슨 일을 해요?",
        "options": [
          "姐姐做什么工作？",
          "妹妹做什么工作？",
          "姐姐在哪儿？",
          "姐姐有几口人？"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "你家有几___人？",
        "options": [
          "个",
          "口",
          "只",
          "位"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你___做什么工作？",
        "options": [
          "哥哥",
          "妈妈",
          "姐姐",
          "弟弟"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我___有妹妹。",
        "options": [
          "不",
          "没",
          "没有",
          "是"
        ],
        "answer": 2
      }
    ]
  },
  4: {
    "level": 4,
    "title": "식당에서 주문",
    "titleCn": "在餐厅点菜",
    "description": "식당에서 음식을 주문하고 계산하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "欢迎光临！请坐。",
        "pinyin": "Huānyíng guānglín! Qǐng zuò.",
        "korean": "어서 오세요! 앉으세요."
      },
      {
        "speaker": "B",
        "chinese": "谢谢。请给我菜单。",
        "pinyin": "Xièxie. Qǐng gěi wǒ càidān.",
        "korean": "감사합니다. 메뉴판 주세요."
      },
      {
        "speaker": "A",
        "chinese": "好的，请看菜单。你想吃什么？",
        "pinyin": "Hǎo de, qǐng kàn càidān. Nǐ xiǎng chī shénme?",
        "korean": "네, 메뉴를 보세요. 뭘 드시겠어요?"
      },
      {
        "speaker": "B",
        "chinese": "我要一碗牛肉面，再来一杯啤酒。",
        "pinyin": "Wǒ yào yì wǎn niúròu miàn, zài lái yì bēi píjiǔ.",
        "korean": "소고기 면 한 그릇이랑 맥주 한 잔 주세요."
      },
      {
        "speaker": "A",
        "chinese": "好的。还要别的吗？",
        "pinyin": "Hǎo de. Hái yào bié de ma?",
        "korean": "네. 다른 건 필요하세요?"
      },
      {
        "speaker": "B",
        "chinese": "不用了，谢谢。一共多少钱？",
        "pinyin": "Bú yòng le, xièxie. Yígòng duōshao qián?",
        "korean": "됐어요, 감사합니다. 전부 얼마예요?"
      },
      {
        "speaker": "A",
        "chinese": "一共四十五块。",
        "pinyin": "Yígòng sìshíwǔ kuài.",
        "korean": "전부 45위안이에요."
      },
      {
        "speaker": "B",
        "chinese": "好的，买单。",
        "pinyin": "Hǎo de, mǎidān.",
        "korean": "네, 계산할게요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "菜单",
        "pinyin": "càidān",
        "korean": "메뉴, 메뉴판"
      },
      {
        "chinese": "一碗面",
        "pinyin": "yì wǎn miàn",
        "korean": "면 한 그릇"
      },
      {
        "chinese": "多少钱",
        "pinyin": "duōshao qián",
        "korean": "얼마예요"
      },
      {
        "chinese": "买单",
        "pinyin": "mǎidān",
        "korean": "계산하다"
      },
      {
        "chinese": "啤酒",
        "pinyin": "píjiǔ",
        "korean": "맥주"
      },
      {
        "chinese": "欢迎光临",
        "pinyin": "huānyíng guānglín",
        "korean": "어서 오세요"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "请给我菜单。",
        "options": [
          "계산해 주세요.",
          "메뉴판 주세요.",
          "물 주세요.",
          "맥주 주세요."
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "전부 얼마예요?",
        "options": [
          "这个多少钱？",
          "一共多少钱？",
          "你要什么？",
          "还要别的吗？"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我要一___牛肉面。",
        "options": [
          "杯",
          "个",
          "碗",
          "块"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "还要别的吗？",
        "options": [
          "뭘 드시겠어요?",
          "다른 건 필요하세요?",
          "맛있어요?",
          "전부 얼마예요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "계산할게요.",
        "options": [
          "多少钱。",
          "不用了。",
          "买单。",
          "谢谢。"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "欢迎光临！请坐。",
        "options": [
          "감사합니다! 앉으세요.",
          "어서 오세요! 앉으세요.",
          "안녕하세요! 주문하세요.",
          "어서 오세요! 주문하세요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你想吃什么？",
        "options": [
          "뭘 마시겠어요?",
          "뭘 드시겠어요?",
          "뭘 사겠어요?",
          "뭘 주문하시겠어요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "不用了，谢谢。",
        "options": [
          "필요해요, 감사합니다.",
          "네, 감사합니다.",
          "됐어요, 감사합니다.",
          "주세요, 감사합니다."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "一共四十五块。",
        "options": [
          "전부 35위안이에요.",
          "전부 45위안이에요.",
          "전부 55위안이에요.",
          "전부 40위안이에요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我要一碗牛肉面，再来一杯啤酒。",
        "options": [
          "소고기 면 한 그릇이랑 물 한 잔 주세요.",
          "소고기 면 두 그릇이랑 맥주 한 잔 주세요.",
          "소고기 면 한 그릇이랑 맥주 한 잔 주세요.",
          "돼지고기 면 한 그릇이랑 맥주 한 잔 주세요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "请看菜单。",
        "options": [
          "메뉴를 주세요.",
          "메뉴를 보세요.",
          "메뉴가 있어요.",
          "메뉴가 없어요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "好的，买单。",
        "options": [
          "네, 주문할게요.",
          "네, 감사합니다.",
          "네, 계산할게요.",
          "네, 필요 없어요."
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "어서 오세요!",
        "options": [
          "你好！",
          "欢迎光临！",
          "请坐！",
          "谢谢！"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "메뉴판 주세요.",
        "options": [
          "请看菜单。",
          "请给我菜单。",
          "我要菜单。",
          "菜单在哪儿？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "뭘 드시겠어요?",
        "options": [
          "你要喝什么？",
          "你想吃什么？",
          "你想去哪儿？",
          "你要买什么？"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "맥주 한 잔 주세요.",
        "options": [
          "给我一碗啤酒。",
          "我要一瓶啤酒。",
          "给我一杯啤酒。",
          "再来一杯水。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "됐어요, 감사합니다.",
        "options": [
          "好的，谢谢。",
          "不用了，谢谢。",
          "可以了，谢谢。",
          "没有了，谢谢。"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "___光临！请坐。",
        "options": [
          "你好",
          "谢谢",
          "欢迎",
          "请问"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "再来一___啤酒。",
        "options": [
          "碗",
          "个",
          "块",
          "杯"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "一共___钱？",
        "options": [
          "几",
          "什么",
          "多少",
          "怎么"
        ],
        "answer": 2
      }
    ]
  },
  5: {
    "level": 5,
    "title": "길 묻기 & 방향",
    "titleCn": "问路和方向",
    "description": "길을 묻고 방향을 알려주는 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "请问，地铁站在哪儿？",
        "pinyin": "Qǐngwèn, dìtiě zhàn zài nǎr?",
        "korean": "실례합니다, 지하철역이 어디에 있나요?"
      },
      {
        "speaker": "B",
        "chinese": "地铁站离这儿不远。你一直走。",
        "pinyin": "Dìtiě zhàn lí zhèr bù yuǎn. Nǐ yìzhí zǒu.",
        "korean": "지하철역은 여기서 멀지 않아요. 쭉 직진하세요."
      },
      {
        "speaker": "A",
        "chinese": "然后怎么走？",
        "pinyin": "Ránhòu zěnme zǒu?",
        "korean": "그다음에 어떻게 가요?"
      },
      {
        "speaker": "B",
        "chinese": "到红绿灯往左拐。",
        "pinyin": "Dào hónglǜdēng wǎng zuǒ guǎi.",
        "korean": "신호등에서 왼쪽으로 도세요."
      },
      {
        "speaker": "A",
        "chinese": "往左拐以后呢？",
        "pinyin": "Wǎng zuǒ guǎi yǐhòu ne?",
        "korean": "왼쪽으로 돈 다음에요?"
      },
      {
        "speaker": "B",
        "chinese": "再往右拐，地铁站就在你的右边。",
        "pinyin": "Zài wǎng yòu guǎi, dìtiě zhàn jiù zài nǐ de yòubiān.",
        "korean": "다시 오른쪽으로 돌면, 지하철역이 오른쪽에 있어요."
      },
      {
        "speaker": "A",
        "chinese": "大概要走多长时间？",
        "pinyin": "Dàgài yào zǒu duō cháng shíjiān?",
        "korean": "대략 얼마나 걸려요?"
      },
      {
        "speaker": "B",
        "chinese": "大概五分钟就到了。",
        "pinyin": "Dàgài wǔ fēnzhōng jiù dào le.",
        "korean": "대략 5분이면 도착해요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "请问",
        "pinyin": "qǐngwèn",
        "korean": "실례합니다 (길을 물을 때)"
      },
      {
        "chinese": "怎么走",
        "pinyin": "zěnme zǒu",
        "korean": "어떻게 가요"
      },
      {
        "chinese": "往左拐",
        "pinyin": "wǎng zuǒ guǎi",
        "korean": "왼쪽으로 돌다"
      },
      {
        "chinese": "往右拐",
        "pinyin": "wǎng yòu guǎi",
        "korean": "오른쪽으로 돌다"
      },
      {
        "chinese": "一直走",
        "pinyin": "yìzhí zǒu",
        "korean": "쭉 직진하다"
      },
      {
        "chinese": "在哪儿",
        "pinyin": "zài nǎr",
        "korean": "어디에 있다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "请问，地铁站在哪儿？",
        "options": [
          "실례합니다, 버스 정류장이 어디에 있나요?",
          "실례합니다, 지하철역이 어디에 있나요?",
          "실례합니다, 화장실이 어디에 있나요?",
          "실례합니다, 어떻게 가나요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "쭉 직진하세요.",
        "options": [
          "往左拐。",
          "往右拐。",
          "一直走。",
          "请问。"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "到红绿灯___左拐。",
        "options": [
          "在",
          "往",
          "到",
          "从"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "大概要走多长时间？",
        "options": [
          "어디에 있나요?",
          "얼마예요?",
          "대략 얼마나 걸려요?",
          "어떻게 가요?"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "오른쪽으로 도세요.",
        "options": [
          "往左拐。",
          "一直走。",
          "往前走。",
          "往右拐。"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "地铁站离这儿不远。",
        "options": [
          "지하철역은 여기서 가까워요.",
          "지하철역은 여기서 멀지 않아요.",
          "지하철역은 여기서 멀어요.",
          "지하철역은 저기에 있어요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "然后怎么走？",
        "options": [
          "어디로 가요?",
          "여기서 멀어요?",
          "그다음에 어떻게 가요?",
          "얼마나 걸려요?"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "到红绿灯往左拐。",
        "options": [
          "신호등에서 오른쪽으로 도세요.",
          "신호등에서 직진하세요.",
          "신호등에서 왼쪽으로 도세요.",
          "신호등에서 멈추세요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "地铁站就在你的右边。",
        "options": [
          "지하철역이 왼쪽에 있어요.",
          "지하철역이 앞에 있어요.",
          "지하철역이 오른쪽에 있어요.",
          "지하철역이 뒤에 있어요."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "大概五分钟就到了。",
        "options": [
          "대략 10분이면 도착해요.",
          "대략 5분이면 도착해요.",
          "대략 15분이면 도착해요.",
          "대략 3분이면 도착해요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "往左拐以后呢？",
        "options": [
          "왼쪽으로 가세요.",
          "왼쪽으로 돈 다음에요?",
          "왼쪽에 뭐가 있어요?",
          "왼쪽으로 돌까요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "再往右拐。",
        "options": [
          "다시 왼쪽으로 도세요.",
          "다시 직진하세요.",
          "다시 오른쪽으로 도세요.",
          "다시 돌아가세요."
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "지하철역이 어디에 있나요?",
        "options": [
          "地铁站怎么走？",
          "地铁站在哪儿？",
          "地铁站远吗？",
          "地铁站在右边。"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "왼쪽으로 도세요.",
        "options": [
          "往右拐。",
          "一直走。",
          "往左拐。",
          "往前走。"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "그다음에 어떻게 가요?",
        "options": [
          "然后怎么走？",
          "然后往哪走？",
          "怎么走？",
          "在哪儿？"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "대략 5분이면 도착해요.",
        "options": [
          "大概十分钟就到了。",
          "大概五分钟就到了。",
          "大概三分钟就到了。",
          "五分钟以后到。"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여기서 멀지 않아요.",
        "options": [
          "离这儿很远。",
          "离这儿不远。",
          "在这儿不远。",
          "从这儿不远。"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "실례합니다.",
        "options": [
          "对不起。",
          "谢谢。",
          "请问。",
          "你好。"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "地铁站___这儿不远。",
        "options": [
          "在",
          "从",
          "离",
          "到"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "大概___分钟就到了。",
        "options": [
          "三",
          "五",
          "十",
          "八"
        ],
        "answer": 1
      }
    ]
  },
  6: {
    "level": 6,
    "title": "쇼핑하기",
    "titleCn": "购物",
    "description": "가게에서 물건을 사고 가격을 흥정하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好，我想买一件衣服。",
        "pinyin": "Nǐ hǎo, wǒ xiǎng mǎi yī jiàn yīfu.",
        "korean": "안녕하세요, 옷 한 벌 사고 싶어요."
      },
      {
        "speaker": "B",
        "chinese": "欢迎光临！你想看看什么样的？",
        "pinyin": "Huānyíng guānglín! Nǐ xiǎng kànkan shénme yàng de?",
        "korean": "어서 오세요! 어떤 걸 보고 싶으세요?"
      },
      {
        "speaker": "A",
        "chinese": "这个多少钱？",
        "pinyin": "Zhège duōshao qián?",
        "korean": "이거 얼마예요?"
      },
      {
        "speaker": "B",
        "chinese": "这件两百块。",
        "pinyin": "Zhè jiàn liǎng bǎi kuài.",
        "korean": "이건 200위안이에요."
      },
      {
        "speaker": "A",
        "chinese": "太贵了！能不能便宜一点？",
        "pinyin": "Tài guì le! Néng bu néng piányi yīdiǎn?",
        "korean": "너무 비싸요! 좀 싸게 해줄 수 있어요?"
      },
      {
        "speaker": "B",
        "chinese": "好吧，一百五十块怎么样？",
        "pinyin": "Hǎo ba, yī bǎi wǔshí kuài zěnmeyàng?",
        "korean": "좋아요, 150위안 어때요?"
      },
      {
        "speaker": "A",
        "chinese": "可以试试吗？",
        "pinyin": "Kěyǐ shìshi ma?",
        "korean": "입어볼 수 있을까요?"
      },
      {
        "speaker": "B",
        "chinese": "当然可以，试衣间在那边。",
        "pinyin": "Dāngrán kěyǐ, shìyījiān zài nàbiān.",
        "korean": "물론이요, 탈의실은 저쪽에 있어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "多少钱",
        "pinyin": "duōshao qián",
        "korean": "얼마"
      },
      {
        "chinese": "太贵了",
        "pinyin": "tài guì le",
        "korean": "너무 비싸다"
      },
      {
        "chinese": "便宜",
        "pinyin": "piányi",
        "korean": "싸다, 저렴하다"
      },
      {
        "chinese": "试试",
        "pinyin": "shìshi",
        "korean": "시험해 보다, 입어보다"
      },
      {
        "chinese": "衣服",
        "pinyin": "yīfu",
        "korean": "옷"
      },
      {
        "chinese": "欢迎光临",
        "pinyin": "huānyíng guānglín",
        "korean": "어서 오세요"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "太贵了",
        "options": [
          "너무 싸다",
          "너무 비싸다",
          "아주 좋다",
          "너무 크다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "얼마예요?",
        "options": [
          "怎么样？",
          "多少钱？",
          "是什么？",
          "在哪儿？"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "能不能___一点？(좀 싸게)",
        "options": [
          "贵",
          "便宜",
          "大",
          "好"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "可以试试吗？",
        "options": [
          "살 수 있나요?",
          "볼 수 있나요?",
          "입어볼 수 있나요?",
          "먹어볼 수 있나요?"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "옷",
        "options": [
          "鞋子",
          "裤子",
          "衣服",
          "帽子"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "欢迎光临",
        "options": [
          "안녕히 가세요",
          "어서 오세요",
          "감사합니다",
          "죄송합니다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "这件两百块",
        "options": [
          "이건 100위안이에요",
          "이건 200위안이에요",
          "이건 300위안이에요",
          "이건 150위안이에요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "너무 비싸다",
        "options": [
          "太便宜了",
          "太贵了",
          "太大了",
          "太好了"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "입어보다, 시험해 보다",
        "options": [
          "看看",
          "想想",
          "试试",
          "走走"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我想___一件衣服。(사다)",
        "options": [
          "看",
          "买",
          "试",
          "穿"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你想看看什么样的？",
        "options": [
          "뭘 사고 싶으세요?",
          "어떤 걸 보고 싶으세요?",
          "언제 오셨어요?",
          "어디에서 왔어요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "싸다, 저렴하다",
        "options": [
          "贵",
          "便宜",
          "多",
          "少"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "试衣间在___。(저쪽)",
        "options": [
          "这边",
          "那边",
          "前边",
          "里边"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "一百五十块怎么样？",
        "options": [
          "100위안 어때요?",
          "150위안 어때요?",
          "200위안 어때요?",
          "250위안 어때요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "탈의실",
        "options": [
          "洗手间",
          "试衣间",
          "卧室",
          "教室"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我想买一件衣服",
        "options": [
          "옷 한 벌 입고 싶어요",
          "옷 한 벌 사고 싶어요",
          "옷 한 벌 보고 싶어요",
          "옷 한 벌 빌리고 싶어요"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "___光临！(어서 오세요)",
        "options": [
          "你好",
          "谢谢",
          "欢迎",
          "再见"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "当然可以",
        "options": [
          "안 돼요",
          "물론이요",
          "잠깐만요",
          "모르겠어요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "이거 얼마예요?",
        "options": [
          "这个是什么？",
          "这个在哪儿？",
          "这个多少钱？",
          "这个怎么样？"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "这___两百块。(벌, 건 - 옷 양사)",
        "options": [
          "个",
          "件",
          "条",
          "双"
        ],
        "answer": 1
      }
    ]
  },
  7: {
    "level": 7,
    "title": "택시 & 대중교통",
    "titleCn": "出租车和公共交通",
    "description": "택시와 대중교통을 이용할 때 필요한 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "师傅，我要去火车站。",
        "pinyin": "Shīfu, wǒ yào qù huǒchēzhàn.",
        "korean": "기사님, 기차역으로 가주세요."
      },
      {
        "speaker": "B",
        "chinese": "好的，大概二十分钟到。",
        "pinyin": "Hǎo de, dàgài èrshí fēnzhōng dào.",
        "korean": "네, 대략 20분이면 도착합니다."
      },
      {
        "speaker": "A",
        "chinese": "请问，到天安门怎么走？",
        "pinyin": "Qǐngwèn, dào Tiān'ānmén zěnme zǒu?",
        "korean": "실례합니다, 천안문까지 어떻게 가나요?"
      },
      {
        "speaker": "B",
        "chinese": "你可以坐地铁一号线。",
        "pinyin": "Nǐ kěyǐ zuò dìtiě yī hào xiàn.",
        "korean": "지하철 1호선을 타면 됩니다."
      },
      {
        "speaker": "A",
        "chinese": "下一站是哪里？",
        "pinyin": "Xià yī zhàn shì nǎlǐ?",
        "korean": "다음 역은 어디예요?"
      },
      {
        "speaker": "B",
        "chinese": "下一站是王府井。",
        "pinyin": "Xià yī zhàn shì Wángfǔjǐng.",
        "korean": "다음 역은 왕푸징입니다."
      },
      {
        "speaker": "A",
        "chinese": "我应该在哪一站下车？",
        "pinyin": "Wǒ yīnggāi zài nǎ yī zhàn xià chē?",
        "korean": "몇 번째 역에서 내려야 하나요?"
      },
      {
        "speaker": "B",
        "chinese": "再坐三站就到了。",
        "pinyin": "Zài zuò sān zhàn jiù dào le.",
        "korean": "세 정거장 더 가면 도착합니다."
      }
    ],
    "vocabulary": [
      {
        "chinese": "出租车",
        "pinyin": "chūzūchē",
        "korean": "택시"
      },
      {
        "chinese": "地铁",
        "pinyin": "dìtiě",
        "korean": "지하철"
      },
      {
        "chinese": "下一站",
        "pinyin": "xià yī zhàn",
        "korean": "다음 역"
      },
      {
        "chinese": "下车",
        "pinyin": "xià chē",
        "korean": "하차하다, 내리다"
      },
      {
        "chinese": "火车站",
        "pinyin": "huǒchēzhàn",
        "korean": "기차역"
      },
      {
        "chinese": "怎么走",
        "pinyin": "zěnme zǒu",
        "korean": "어떻게 가나요"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "下一站是哪里？",
        "options": [
          "어디에서 타나요?",
          "다음 역은 어디예요?",
          "여기가 어디예요?",
          "어디로 가나요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "지하철",
        "options": [
          "公共汽车",
          "火车",
          "地铁",
          "出租车"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我要___火车站。(기차역으로 가다)",
        "options": [
          "在",
          "去",
          "来",
          "到"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "坐地铁一号线",
        "options": [
          "지하철 1호선을 타다",
          "버스 1번을 타다",
          "택시를 타다",
          "기차를 타다"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "내리다",
        "options": [
          "上车",
          "开车",
          "下车",
          "坐车"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "师傅",
        "options": [
          "선생님",
          "기사님",
          "사장님",
          "아저씨"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "大概二十分钟到",
        "options": [
          "정확히 20분 걸려요",
          "대략 20분이면 도착해요",
          "20분 후에 출발해요",
          "약 12분이면 도착해요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "택시",
        "options": [
          "地铁",
          "公共汽车",
          "火车",
          "出租车"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "기차역",
        "options": [
          "地铁站",
          "火车站",
          "汽车站",
          "飞机场"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你可以___地铁一号线。(타다)",
        "options": [
          "走",
          "坐",
          "去",
          "开"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "到天安门怎么走？",
        "options": [
          "천안문은 어디에 있나요?",
          "천안문까지 어떻게 가나요?",
          "천안문에서 내리나요?",
          "천안문은 몇 호선이에요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "다음 역",
        "options": [
          "上一站",
          "这一站",
          "下一站",
          "最后一站"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我应该在哪一站___？(내리다)",
        "options": [
          "上车",
          "下车",
          "坐车",
          "开车"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "再坐三站就到了",
        "options": [
          "세 정거장 더 가면 도착합니다",
          "세 시간 더 가면 도착합니다",
          "세 번 갈아타면 도착합니다",
          "세 번째 역에서 내리세요"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "어떻게 가나요",
        "options": [
          "在哪儿",
          "怎么走",
          "多少钱",
          "几点到"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我应该在哪一站下车？",
        "options": [
          "어디에서 타야 하나요?",
          "몇 번째 역에서 내려야 하나요?",
          "어느 역이 가장 가까운가요?",
          "이 역에서 내리나요?"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "___二十分钟到。(대략)",
        "options": [
          "一共",
          "大概",
          "已经",
          "马上"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "실례합니다 (길을 물을 때)",
        "options": [
          "对不起",
          "请问",
          "你好",
          "谢谢"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "下一站是王府井",
        "options": [
          "이번 역은 왕푸징입니다",
          "다음 역은 왕푸징입니다",
          "지난 역은 왕푸징이었습니다",
          "왕푸징에서 내리세요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "대략, 대개",
        "options": [
          "一定",
          "大概",
          "已经",
          "常常"
        ],
        "answer": 1
      }
    ]
  },
  8: {
    "level": 8,
    "title": "시간 표현",
    "titleCn": "时间表达",
    "description": "시간을 묻고 답하는 표현과 일과 관련된 시간 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "请问，现在几点？",
        "pinyin": "Qǐngwèn, xiànzài jǐ diǎn?",
        "korean": "실례합니다, 지금 몇 시예요?"
      },
      {
        "speaker": "B",
        "chinese": "现在下午三点半。",
        "pinyin": "Xiànzài xiàwǔ sān diǎn bàn.",
        "korean": "지금 오후 3시 반이에요."
      },
      {
        "speaker": "A",
        "chinese": "电影几点开始？",
        "pinyin": "Diànyǐng jǐ diǎn kāishǐ?",
        "korean": "영화 몇 시에 시작해요?"
      },
      {
        "speaker": "B",
        "chinese": "晚上七点开始。",
        "pinyin": "Wǎnshang qī diǎn kāishǐ.",
        "korean": "저녁 7시에 시작해요."
      },
      {
        "speaker": "A",
        "chinese": "你早上几点起床？",
        "pinyin": "Nǐ zǎoshang jǐ diǎn qǐchuáng?",
        "korean": "아침에 몇 시에 일어나요?"
      },
      {
        "speaker": "B",
        "chinese": "我早上六点半起床。",
        "pinyin": "Wǒ zǎoshang liù diǎn bàn qǐchuáng.",
        "korean": "아침 6시 반에 일어나요."
      },
      {
        "speaker": "A",
        "chinese": "上午你有课吗？",
        "pinyin": "Shàngwǔ nǐ yǒu kè ma?",
        "korean": "오전에 수업 있어요?"
      },
      {
        "speaker": "B",
        "chinese": "有，上午九点到十一点有课。",
        "pinyin": "Yǒu, shàngwǔ jiǔ diǎn dào shíyī diǎn yǒu kè.",
        "korean": "네, 오전 9시부터 11시까지 수업이 있어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "几点",
        "pinyin": "jǐ diǎn",
        "korean": "몇 시"
      },
      {
        "chinese": "上午",
        "pinyin": "shàngwǔ",
        "korean": "오전"
      },
      {
        "chinese": "下午",
        "pinyin": "xiàwǔ",
        "korean": "오후"
      },
      {
        "chinese": "早上",
        "pinyin": "zǎoshang",
        "korean": "아침"
      },
      {
        "chinese": "晚上",
        "pinyin": "wǎnshang",
        "korean": "저녁, 밤"
      },
      {
        "chinese": "开始",
        "pinyin": "kāishǐ",
        "korean": "시작하다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "现在几点？",
        "options": [
          "오늘 며칠이에요?",
          "지금 몇 시예요?",
          "언제 시작해요?",
          "몇 시에 끝나요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "오전",
        "options": [
          "早上",
          "上午",
          "中午",
          "下午"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "电影七点___。(시작하다)",
        "options": [
          "结束",
          "开始",
          "到",
          "走"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "早上六点半",
        "options": [
          "아침 6시",
          "아침 6시 반",
          "저녁 6시 반",
          "오후 6시"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "저녁",
        "options": [
          "早上",
          "上午",
          "下午",
          "晚上"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "下午三点半",
        "options": [
          "오전 3시 반",
          "오후 3시 반",
          "오후 3시",
          "저녁 3시 반"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "电影几点开始？",
        "options": [
          "영화 어디에서 해요?",
          "영화 몇 시에 시작해요?",
          "영화 재미있어요?",
          "영화 몇 편 봤어요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "시작하다",
        "options": [
          "结束",
          "开始",
          "准备",
          "出发"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "아침",
        "options": [
          "晚上",
          "下午",
          "早上",
          "中午"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "现在___三点半。(오후)",
        "options": [
          "上午",
          "早上",
          "下午",
          "晚上"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "上午九点到十一点有课",
        "options": [
          "오전 9시에 수업이 끝나요",
          "오전 9시부터 11시까지 수업이 있어요",
          "오후 9시부터 11시까지 수업이 있어요",
          "오전 9시에 수업이 시작해요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "몇 시",
        "options": [
          "什么时候",
          "几点",
          "多久",
          "几号"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你早上几点___？(일어나다)",
        "options": [
          "睡觉",
          "起床",
          "上班",
          "吃饭"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "晚上七点开始",
        "options": [
          "아침 7시에 시작해요",
          "오후 7시에 끝나요",
          "저녁 7시에 시작해요",
          "밤 7시에 끝나요"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "오후",
        "options": [
          "上午",
          "下午",
          "晚上",
          "早上"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "上午你有___吗？(수업)",
        "options": [
          "课",
          "事",
          "空",
          "时间"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "你早上几点起床？",
        "options": [
          "아침에 몇 시에 자요?",
          "아침에 몇 시에 일어나요?",
          "저녁에 몇 시에 일어나요?",
          "아침에 뭐 해요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "수업이 있다",
        "options": [
          "没有课",
          "上课",
          "有课",
          "下课"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "九点___十一点有课。(~부터 ~까지)",
        "options": [
          "和",
          "到",
          "跟",
          "从"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "上午你有课吗？",
        "options": [
          "오전에 시간 있어요?",
          "오전에 수업 있어요?",
          "오후에 수업 있어요?",
          "오전에 일 있어요?"
        ],
        "answer": 1
      }
    ]
  },
  9: {
    "level": 9,
    "title": "전화번호 & 주소",
    "titleCn": "电话号码和地址",
    "description": "전화번호와 주소를 묻고 답하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你的电话号码是多少？",
        "pinyin": "Nǐ de diànhuà hàomǎ shì duōshao?",
        "korean": "전화번호가 뭐예요?"
      },
      {
        "speaker": "B",
        "chinese": "我的电话号码是138-1234-5678。",
        "pinyin": "Wǒ de diànhuà hàomǎ shì yāo sān bā, yāo èr sān sì, wǔ liù qī bā.",
        "korean": "제 전화번호는 138-1234-5678이에요."
      },
      {
        "speaker": "A",
        "chinese": "你住在哪儿？",
        "pinyin": "Nǐ zhù zài nǎr?",
        "korean": "어디에 살아요?"
      },
      {
        "speaker": "B",
        "chinese": "我住在北京市朝阳区。",
        "pinyin": "Wǒ zhù zài Běijīng shì Cháoyáng qū.",
        "korean": "저는 베이징시 차오양구에 살아요."
      },
      {
        "speaker": "A",
        "chinese": "你的地址是什么？",
        "pinyin": "Nǐ de dìzhǐ shì shénme?",
        "korean": "주소가 뭐예요?"
      },
      {
        "speaker": "B",
        "chinese": "幸福路25号三楼302室。",
        "pinyin": "Xìngfú lù èrshíwǔ hào sān lóu sān líng èr shì.",
        "korean": "싱푸루 25번지 3층 302호예요."
      },
      {
        "speaker": "A",
        "chinese": "方便留一下你的手机号吗？",
        "pinyin": "Fāngbiàn liú yīxià nǐ de shǒujī hào ma?",
        "korean": "핸드폰 번호 좀 남겨주실 수 있어요?"
      },
      {
        "speaker": "B",
        "chinese": "没问题，我发短信给你。",
        "pinyin": "Méi wèntí, wǒ fā duǎnxìn gěi nǐ.",
        "korean": "문제없어요, 문자 보내드릴게요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "电话号码",
        "pinyin": "diànhuà hàomǎ",
        "korean": "전화번호"
      },
      {
        "chinese": "地址",
        "pinyin": "dìzhǐ",
        "korean": "주소"
      },
      {
        "chinese": "住",
        "pinyin": "zhù",
        "korean": "살다, 거주하다"
      },
      {
        "chinese": "手机",
        "pinyin": "shǒujī",
        "korean": "핸드폰"
      },
      {
        "chinese": "短信",
        "pinyin": "duǎnxìn",
        "korean": "문자 메시지"
      },
      {
        "chinese": "号",
        "pinyin": "hào",
        "korean": "번호, 호"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "你的电话号码是多少？",
        "options": [
          "이름이 뭐예요?",
          "전화번호가 뭐예요?",
          "주소가 뭐예요?",
          "나이가 몇이에요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "주소",
        "options": [
          "电话",
          "名字",
          "地址",
          "号码"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我___在北京。(살다)",
        "options": [
          "在",
          "住",
          "去",
          "来"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "发短信",
        "options": [
          "전화하다",
          "문자 보내다",
          "이메일 보내다",
          "편지 쓰다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "핸드폰",
        "options": [
          "电话",
          "电脑",
          "手机",
          "电视"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "你住在哪儿？",
        "options": [
          "어디에 가요?",
          "어디에 살아요?",
          "어디에서 왔어요?",
          "어디에서 일해요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "方便留一下你的手机号吗？",
        "options": [
          "핸드폰 번호 좀 알려주실 수 있어요?",
          "핸드폰 번호 좀 남겨주실 수 있어요?",
          "핸드폰 좀 빌려주실 수 있어요?",
          "핸드폰 번호를 바꿨어요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "전화번호",
        "options": [
          "手机号",
          "电话号码",
          "地址",
          "号码"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "문자 메시지",
        "options": [
          "电话",
          "邮件",
          "短信",
          "信"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你的___是什么？(주소)",
        "options": [
          "电话",
          "名字",
          "地址",
          "号码"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "没问题",
        "options": [
          "안 돼요",
          "문제없어요",
          "모르겠어요",
          "괜찮아요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "살다, 거주하다",
        "options": [
          "去",
          "来",
          "住",
          "在"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我发短信___你。(~에게)",
        "options": [
          "对",
          "给",
          "跟",
          "和"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "幸福路25号三楼302室",
        "options": [
          "싱푸루 25번지 2층 302호",
          "싱푸루 25번지 3층 302호",
          "싱푸루 35번지 3층 302호",
          "싱푸루 25번지 3층 203호"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "번호, 호",
        "options": [
          "楼",
          "室",
          "号",
          "路"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "我住在北京市朝阳区",
        "options": [
          "저는 베이징시 하이뎬구에 살아요",
          "저는 베이징시 차오양구에 살아요",
          "저는 상하이시 차오양구에 살아요",
          "저는 베이징시 차오양구에서 일해요"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "方便___一下你的手机号吗？(남기다)",
        "options": [
          "给",
          "留",
          "写",
          "说"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "어디에 살아요?",
        "options": [
          "你去哪儿？",
          "你在哪儿？",
          "你住在哪儿？",
          "你从哪儿来？"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "电话号码是多少？",
        "options": [
          "전화번호가 뭐예요?",
          "주소가 뭐예요?",
          "방 번호가 뭐예요?",
          "핸드폰이 뭐예요?"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "三楼302___。(호실)",
        "options": [
          "号",
          "楼",
          "室",
          "层"
        ],
        "answer": 2
      }
    ]
  },
  10: {
    "level": 10,
    "title": "음식 & 맛 표현",
    "titleCn": "食物和味道",
    "description": "음식의 맛을 표현하고 좋아하는 음식에 대해 이야기하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你喜欢吃什么？",
        "pinyin": "Nǐ xǐhuan chī shénme?",
        "korean": "뭐 먹는 걸 좋아해요?"
      },
      {
        "speaker": "B",
        "chinese": "我喜欢吃中国菜，特别是火锅。",
        "pinyin": "Wǒ xǐhuan chī Zhōngguó cài, tèbié shì huǒguō.",
        "korean": "중국 요리를 좋아해요, 특히 훠궈요."
      },
      {
        "speaker": "A",
        "chinese": "火锅辣不辣？",
        "pinyin": "Huǒguō là bu là?",
        "korean": "훠궈는 매워요?"
      },
      {
        "speaker": "B",
        "chinese": "有的很辣，有的不辣。你能吃辣的吗？",
        "pinyin": "Yǒu de hěn là, yǒu de bú là. Nǐ néng chī là de ma?",
        "korean": "어떤 건 맵고, 어떤 건 안 매워요. 매운 거 먹을 수 있어요?"
      },
      {
        "speaker": "A",
        "chinese": "我不太能吃辣的。我喜欢甜的。",
        "pinyin": "Wǒ bú tài néng chī là de. Wǒ xǐhuan tián de.",
        "korean": "매운 건 잘 못 먹어요. 단 걸 좋아해요."
      },
      {
        "speaker": "B",
        "chinese": "那你尝尝这个糖醋排骨，酸酸甜甜的，很好吃。",
        "pinyin": "Nà nǐ chángchang zhège tángcù páigǔ, suānsuān tiántián de, hěn hǎochī.",
        "korean": "그럼 이 탕수육 먹어봐요, 새콤달콤하고 맛있어요."
      },
      {
        "speaker": "A",
        "chinese": "嗯，真的很好吃！味道不咸不淡，刚刚好。",
        "pinyin": "Ǹg, zhēn de hěn hǎochī! Wèidào bù xián bù dàn, gānggāng hǎo.",
        "korean": "음, 정말 맛있어요! 짜지도 싱겁지도 않고, 딱 좋아요."
      },
      {
        "speaker": "B",
        "chinese": "太好了，下次我们再来吃。",
        "pinyin": "Tài hǎo le, xià cì wǒmen zài lái chī.",
        "korean": "좋아요, 다음에 또 먹으러 와요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "好吃",
        "pinyin": "hǎochī",
        "korean": "맛있다"
      },
      {
        "chinese": "辣",
        "pinyin": "là",
        "korean": "맵다"
      },
      {
        "chinese": "甜",
        "pinyin": "tián",
        "korean": "달다"
      },
      {
        "chinese": "酸",
        "pinyin": "suān",
        "korean": "시다, 새콤하다"
      },
      {
        "chinese": "咸",
        "pinyin": "xián",
        "korean": "짜다"
      },
      {
        "chinese": "味道",
        "pinyin": "wèidào",
        "korean": "맛, 풍미"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "好吃",
        "options": [
          "맵다",
          "맛있다",
          "달다",
          "짜다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "맵다",
        "options": [
          "甜",
          "咸",
          "辣",
          "酸"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "这个菜太___了。(짜다)",
        "options": [
          "辣",
          "甜",
          "酸",
          "咸"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "酸酸甜甜的",
        "options": [
          "맵고 짠",
          "새콤달콤한",
          "달고 짠",
          "시고 매운"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "맛있다",
        "options": [
          "好看",
          "好吃",
          "好喝",
          "好玩"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你喜欢吃什么？",
        "options": [
          "뭐 마시는 걸 좋아해요?",
          "뭐 먹는 걸 좋아해요?",
          "뭐 하는 걸 좋아해요?",
          "뭐 보는 걸 좋아해요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "火锅辣不辣？",
        "options": [
          "훠궈 맛있어요?",
          "훠궈 매워요?",
          "훠궈 비싸요?",
          "훠궈 좋아해요?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "달다",
        "options": [
          "辣",
          "咸",
          "酸",
          "甜"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "시다, 새콤하다",
        "options": [
          "辣",
          "甜",
          "酸",
          "咸"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我喜欢吃中国菜，___是火锅。(특히)",
        "options": [
          "特别",
          "非常",
          "一定",
          "可能"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "我不太能吃辣的",
        "options": [
          "매운 걸 좋아해요",
          "매운 건 잘 못 먹어요",
          "매운 건 안 먹어요",
          "매운 걸 많이 먹어요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "맛, 풍미",
        "options": [
          "口味",
          "味道",
          "好吃",
          "味儿"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你___尝尝这个糖醋排骨。(그럼, 그러면 - 문장 앞)",
        "options": [
          "那",
          "就",
          "也",
          "都"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "味道不咸不淡，刚刚好",
        "options": [
          "맛이 짜고 싱겁다",
          "맛이 짜지도 싱겁지도 않고 딱 좋다",
          "맛이 너무 싱겁다",
          "맛이 아주 짜다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "짜다",
        "options": [
          "辣",
          "甜",
          "酸",
          "咸"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "下次我们再来吃",
        "options": [
          "이번에 같이 먹어요",
          "다음에 또 먹으러 와요",
          "오늘 다시 먹어요",
          "나중에 한번 먹어봐요"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "有的很辣，有的___辣。(안, ~하지 않다)",
        "options": [
          "没",
          "不",
          "别",
          "非"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "糖醋排骨",
        "options": [
          "마파두부",
          "탕수육",
          "훠궈",
          "볶음밥"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "다음에 또 먹으러 오다",
        "options": [
          "下次再来吃",
          "这次一起吃",
          "以后再说",
          "明天来吃"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "真的很___！(맛있다)",
        "options": [
          "好看",
          "好吃",
          "好喝",
          "好玩"
        ],
        "answer": 1
      }
    ]
  },
  11: {
    "level": 11,
    "title": "감정 표현",
    "titleCn": "表达感情",
    "description": "기쁨, 슬픔, 화남 등 다양한 감정을 중국어로 표현하는 방법을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你怎么了？看起来不太高兴。",
        "pinyin": "Nǐ zěnme le? Kàn qǐlái bú tài gāoxìng.",
        "korean": "무슨 일이야? 별로 기뻐 보이지 않아."
      },
      {
        "speaker": "B",
        "chinese": "我今天考试没考好，很难过。",
        "pinyin": "Wǒ jīntiān kǎoshì méi kǎo hǎo, hěn nánguò.",
        "korean": "오늘 시험을 못 봤어, 너무 슬퍼."
      },
      {
        "speaker": "A",
        "chinese": "别难过了，下次一定会更好的。",
        "pinyin": "Bié nánguò le, xià cì yídìng huì gèng hǎo de.",
        "korean": "슬퍼하지 마, 다음에는 분명 더 잘할 거야."
      },
      {
        "speaker": "B",
        "chinese": "谢谢你，我现在心情好多了。",
        "pinyin": "Xièxie nǐ, wǒ xiànzài xīnqíng hǎo duō le.",
        "korean": "고마워, 지금 기분이 훨씬 좋아졌어."
      },
      {
        "speaker": "A",
        "chinese": "对了，昨天小王为什么生气了？",
        "pinyin": "Duì le, zuótiān Xiǎo Wáng wèi shénme shēngqì le?",
        "korean": "맞다, 어제 샤오왕은 왜 화를 냈어?"
      },
      {
        "speaker": "B",
        "chinese": "因为有人说了他的坏话，他很生气。",
        "pinyin": "Yīnwèi yǒu rén shuō le tā de huàihuà, tā hěn shēngqì.",
        "korean": "누군가 그의 험담을 해서 많이 화났어."
      },
      {
        "speaker": "A",
        "chinese": "他现在还害怕跟那个人说话吗？",
        "pinyin": "Tā xiànzài hái hàipà gēn nàge rén shuōhuà ma?",
        "korean": "그는 지금도 그 사람이랑 얘기하는 게 무서워?"
      },
      {
        "speaker": "B",
        "chinese": "不怕了，他们已经和好了，都很开心。",
        "pinyin": "Bú pà le, tāmen yǐjīng hé hǎo le, dōu hěn kāixīn.",
        "korean": "안 무서워해, 이미 화해했어, 둘 다 기뻐하고 있어."
      }
    ],
    "vocabulary": [
      {
        "chinese": "高兴",
        "pinyin": "gāoxìng",
        "korean": "기쁘다, 즐겁다"
      },
      {
        "chinese": "难过",
        "pinyin": "nánguò",
        "korean": "슬프다, 괴롭다"
      },
      {
        "chinese": "生气",
        "pinyin": "shēngqì",
        "korean": "화나다"
      },
      {
        "chinese": "害怕",
        "pinyin": "hàipà",
        "korean": "무섭다, 두렵다"
      },
      {
        "chinese": "心情",
        "pinyin": "xīnqíng",
        "korean": "기분, 심정"
      },
      {
        "chinese": "开心",
        "pinyin": "kāixīn",
        "korean": "즐겁다, 기쁘다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "高兴",
        "options": [
          "슬프다",
          "기쁘다",
          "화나다",
          "무섭다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "害怕",
        "options": [
          "기쁘다",
          "슬프다",
          "화나다",
          "무섭다"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "화나다",
        "options": [
          "难过",
          "高兴",
          "生气",
          "害怕"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你___了？看起来不太高兴。",
        "options": [
          "怎么",
          "什么",
          "哪里",
          "为什么"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "기분, 심정",
        "options": [
          "开心",
          "心情",
          "高兴",
          "难过"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "难过",
        "options": [
          "기쁘다",
          "슬프다",
          "두렵다",
          "즐겁다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "开心",
        "options": [
          "화나다",
          "무섭다",
          "즐겁다",
          "슬프다"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "别难过了，下次一定会更好的。",
        "options": [
          "화내지 마, 다음에 더 잘하자.",
          "슬퍼하지 마, 다음에는 분명 더 잘할 거야.",
          "무서워하지 마, 괜찮을 거야.",
          "기뻐하지 마, 아직 끝나지 않았어."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "他们已经和好了。",
        "options": [
          "그들은 이미 화해했다.",
          "그들은 아직 화가 나 있다.",
          "그들은 이미 떠났다.",
          "그들은 아직 만나지 못했다."
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "我现在心情好多了。",
        "options": [
          "나는 지금 배가 많이 고프다.",
          "나는 지금 기분이 훨씬 좋아졌다.",
          "나는 지금 많이 피곤하다.",
          "나는 지금 시간이 많다."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "因为有人说了他的坏话。",
        "options": [
          "누군가 그를 도와줬기 때문이다.",
          "누군가 그의 험담을 했기 때문이다.",
          "누군가 그에게 선물을 줬기 때문이다.",
          "누군가 그를 칭찬했기 때문이다."
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "슬프다",
        "options": [
          "高兴",
          "开心",
          "难过",
          "害怕"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "즐겁다, 기쁘다",
        "options": [
          "难过",
          "生气",
          "害怕",
          "开心"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "기쁘다, 즐겁다",
        "options": [
          "高兴",
          "难过",
          "心情",
          "害怕"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "무섭다, 두렵다",
        "options": [
          "生气",
          "难过",
          "害怕",
          "高兴"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "험담",
        "options": [
          "好话",
          "坏话",
          "笑话",
          "大话"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "화해하다",
        "options": [
          "生气",
          "和好",
          "害怕",
          "难过"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我今天考试没考好，很___。",
        "options": [
          "高兴",
          "开心",
          "难过",
          "害怕"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "因为有人说了他的___，他很生气。",
        "options": [
          "好话",
          "坏话",
          "笑话",
          "大话"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "他们已经___了，都很开心。",
        "options": [
          "生气",
          "害怕",
          "难过",
          "和好"
        ],
        "answer": 3
      }
    ]
  },
  12: {
    "level": 12,
    "title": "약속 잡기",
    "titleCn": "约会安排",
    "description": "친구와 만남을 약속하고 시간과 장소를 정하는 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "这个周末你有空吗？",
        "pinyin": "Zhège zhōumò nǐ yǒu kòng ma?",
        "korean": "이번 주말에 시간 있어?"
      },
      {
        "speaker": "B",
        "chinese": "有空啊，你想做什么？",
        "pinyin": "Yǒu kòng a, nǐ xiǎng zuò shénme?",
        "korean": "시간 있어, 뭐 하고 싶어?"
      },
      {
        "speaker": "A",
        "chinese": "我们一起去看电影吧。什么时候方便？",
        "pinyin": "Wǒmen yìqǐ qù kàn diànyǐng ba. Shénme shíhòu fāngbiàn?",
        "korean": "같이 영화 보러 가자. 언제가 편해?"
      },
      {
        "speaker": "B",
        "chinese": "周六下午两点怎么样？",
        "pinyin": "Zhōuliù xiàwǔ liǎng diǎn zěnmeyàng?",
        "korean": "토요일 오후 두 시 어때?"
      },
      {
        "speaker": "A",
        "chinese": "好的，在哪儿见？",
        "pinyin": "Hǎo de, zài nǎr jiàn?",
        "korean": "좋아, 어디서 만날까?"
      },
      {
        "speaker": "B",
        "chinese": "我们在电影院门口见吧。",
        "pinyin": "Wǒmen zài diànyǐngyuàn ménkǒu jiàn ba.",
        "korean": "영화관 입구에서 만나자."
      },
      {
        "speaker": "A",
        "chinese": "没问题，不见不散！",
        "pinyin": "Méi wèntí, bú jiàn bú sàn!",
        "korean": "문제없어, 꼭 만나자!"
      },
      {
        "speaker": "B",
        "chinese": "好的，到时候见！",
        "pinyin": "Hǎo de, dào shíhòu jiàn!",
        "korean": "좋아, 그때 보자!"
      }
    ],
    "vocabulary": [
      {
        "chinese": "有空",
        "pinyin": "yǒu kòng",
        "korean": "시간이 있다"
      },
      {
        "chinese": "什么时候",
        "pinyin": "shénme shíhòu",
        "korean": "언제"
      },
      {
        "chinese": "方便",
        "pinyin": "fāngbiàn",
        "korean": "편리하다"
      },
      {
        "chinese": "在哪儿见",
        "pinyin": "zài nǎr jiàn",
        "korean": "어디서 만날까"
      },
      {
        "chinese": "不见不散",
        "pinyin": "bú jiàn bú sàn",
        "korean": "꼭 만나자 (만날 때까지 안 헤어진다)"
      },
      {
        "chinese": "电影院",
        "pinyin": "diànyǐngyuàn",
        "korean": "영화관"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "不见不散",
        "options": [
          "다음에 보자",
          "꼭 만나자",
          "만나서 반갑다",
          "잘 가"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "시간이 있다",
        "options": [
          "没空",
          "有空",
          "方便",
          "有时间"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "这个周末你___吗？",
        "options": [
          "有空",
          "在哪儿",
          "什么时候",
          "怎么样"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "什么时候方便？",
        "options": [
          "어디가 편해?",
          "언제가 편해?",
          "뭐가 편해?",
          "누가 편해?"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我们在电影院门口___吧。",
        "options": [
          "去",
          "来",
          "见",
          "走"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "方便",
        "options": [
          "바쁘다",
          "편리하다",
          "멀다",
          "가깝다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "电影院",
        "options": [
          "도서관",
          "영화관",
          "식당",
          "학교"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "到时候见！",
        "options": [
          "내일 보자!",
          "그때 보자!",
          "다시 만나자!",
          "조심히 가!"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我们一起去看电影吧。",
        "options": [
          "우리 같이 밥 먹으러 가자.",
          "우리 같이 영화 보러 가자.",
          "우리 같이 산책하러 가자.",
          "우리 같이 운동하러 가자."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "周六下午两点怎么样？",
        "options": [
          "토요일 오전 두 시 어때?",
          "일요일 오후 두 시 어때?",
          "토요일 오후 두 시 어때?",
          "금요일 오후 세 시 어때?"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "有空啊，你想做什么？",
        "options": [
          "바빠, 다음에 하자.",
          "시간 있어, 뭐 하고 싶어?",
          "시간 없어, 미안해.",
          "좋아, 어디서 만날까?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "没问题",
        "options": [
          "문제있어",
          "문제없어",
          "미안해",
          "걱정마"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "편리하다",
        "options": [
          "有空",
          "方便",
          "没问题",
          "怎么样"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "영화관",
        "options": [
          "图书馆",
          "电影院",
          "体育馆",
          "博物馆"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "언제",
        "options": [
          "什么时候",
          "在哪儿",
          "怎么样",
          "为什么"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "어디서 만날까",
        "options": [
          "什么时候见",
          "在哪儿见",
          "怎么见",
          "为什么见"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "주말",
        "options": [
          "周末",
          "周一",
          "下午",
          "上午"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "입구",
        "options": [
          "出口",
          "门口",
          "窗口",
          "路口"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "周六下午两点___？",
        "options": [
          "怎么样",
          "在哪儿",
          "什么时候",
          "有空"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "我们一起去看___吧。",
        "options": [
          "电视",
          "电影",
          "书",
          "比赛"
        ],
        "answer": 1
      }
    ]
  },
  13: {
    "level": 13,
    "title": "옷 & 외모",
    "titleCn": "衣服和外貌",
    "description": "옷차림과 외모를 묘사하는 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你今天穿的衣服真好看！",
        "pinyin": "Nǐ jīntiān chuān de yīfu zhēn hǎokàn!",
        "korean": "오늘 입은 옷 정말 예쁘다!"
      },
      {
        "speaker": "B",
        "chinese": "谢谢！这是我新买的裙子。",
        "pinyin": "Xièxie! Zhè shì wǒ xīn mǎi de qúnzi.",
        "korean": "고마워! 이건 새로 산 치마야."
      },
      {
        "speaker": "A",
        "chinese": "我喜欢这个颜色，红色很适合你。",
        "pinyin": "Wǒ xǐhuān zhège yánsè, hóngsè hěn shìhé nǐ.",
        "korean": "이 색깔 마음에 들어, 빨간색이 너한테 잘 어울려."
      },
      {
        "speaker": "B",
        "chinese": "你觉得这件衣服大不大？",
        "pinyin": "Nǐ juéde zhè jiàn yīfu dà bu dà?",
        "korean": "이 옷 큰 것 같아?"
      },
      {
        "speaker": "A",
        "chinese": "不大不小，刚刚好。",
        "pinyin": "Bú dà bù xiǎo, gānggāng hǎo.",
        "korean": "크지도 작지도 않아, 딱 맞아."
      },
      {
        "speaker": "B",
        "chinese": "那我还想买一条蓝色的裤子。",
        "pinyin": "Nà wǒ hái xiǎng mǎi yì tiáo lánsè de kùzi.",
        "korean": "그러면 파란색 바지도 하나 사고 싶어."
      },
      {
        "speaker": "A",
        "chinese": "好啊，你穿什么都好看。",
        "pinyin": "Hǎo a, nǐ chuān shénme dōu hǎokàn.",
        "korean": "좋아, 너는 뭘 입어도 예뻐."
      },
      {
        "speaker": "B",
        "chinese": "哈哈，你太会说话了！",
        "pinyin": "Hāhā, nǐ tài huì shuōhuà le!",
        "korean": "하하, 너 말 정말 잘한다!"
      }
    ],
    "vocabulary": [
      {
        "chinese": "穿",
        "pinyin": "chuān",
        "korean": "입다, 신다"
      },
      {
        "chinese": "好看",
        "pinyin": "hǎokàn",
        "korean": "예쁘다, 보기 좋다"
      },
      {
        "chinese": "颜色",
        "pinyin": "yánsè",
        "korean": "색깔"
      },
      {
        "chinese": "大",
        "pinyin": "dà",
        "korean": "크다"
      },
      {
        "chinese": "小",
        "pinyin": "xiǎo",
        "korean": "작다"
      },
      {
        "chinese": "适合",
        "pinyin": "shìhé",
        "korean": "어울리다, 적합하다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "好看",
        "options": [
          "맛있다",
          "예쁘다",
          "좋아하다",
          "편하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "색깔",
        "options": [
          "衣服",
          "颜色",
          "大小",
          "好看"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你今天___的衣服真好看！",
        "options": [
          "买",
          "穿",
          "看",
          "做"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "不大不小，刚刚好。",
        "options": [
          "너무 크다",
          "너무 작다",
          "크지도 작지도 않아, 딱 맞아",
          "좀 큰 것 같아"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "입다",
        "options": [
          "穿",
          "买",
          "看",
          "做"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "适合",
        "options": [
          "크다",
          "작다",
          "어울리다",
          "입다"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "颜色",
        "options": [
          "옷",
          "색깔",
          "크기",
          "치마"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "红色很适合你。",
        "options": [
          "빨간색이 너한테 잘 어울려.",
          "빨간색을 좋아해.",
          "파란색이 예뻐.",
          "이 옷이 크다."
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "这是我新买的裙子。",
        "options": [
          "이건 새로 산 바지야.",
          "이건 새로 산 치마야.",
          "이건 오래된 옷이야.",
          "이건 빌린 치마야."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你穿什么都好看。",
        "options": [
          "너는 뭘 사도 비싸.",
          "너는 뭘 먹어도 맛있어.",
          "너는 뭘 입어도 예뻐.",
          "너는 뭘 해도 잘해."
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "红色很___你。",
        "options": [
          "喜欢",
          "适合",
          "好看",
          "漂亮"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "裤子",
        "options": [
          "치마",
          "바지",
          "모자",
          "신발"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "어울리다, 적합하다",
        "options": [
          "好看",
          "适合",
          "喜欢",
          "穿"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "크다",
        "options": [
          "小",
          "大",
          "好",
          "新"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "작다",
        "options": [
          "大",
          "好",
          "小",
          "新"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "치마",
        "options": [
          "裤子",
          "衣服",
          "裙子",
          "鞋子"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "파란색",
        "options": [
          "红色",
          "蓝色",
          "白色",
          "黑色"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "빨간색",
        "options": [
          "蓝色",
          "白色",
          "红色",
          "黄色"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我喜欢这个___，红色很适合你。",
        "options": [
          "衣服",
          "颜色",
          "大小",
          "裙子"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "那我还想买一条蓝色的___。",
        "options": [
          "裙子",
          "衣服",
          "裤子",
          "鞋子"
        ],
        "answer": 2
      }
    ]
  },
  14: {
    "level": 14,
    "title": "날씨 & 계절",
    "titleCn": "天气和季节",
    "description": "날씨와 사계절에 대해 중국어로 이야기하는 방법을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "今天天气怎么样？",
        "pinyin": "Jīntiān tiānqì zěnmeyàng?",
        "korean": "오늘 날씨 어때?"
      },
      {
        "speaker": "B",
        "chinese": "今天很热，气温有三十五度。",
        "pinyin": "Jīntiān hěn rè, qìwēn yǒu sānshíwǔ dù.",
        "korean": "오늘 많이 더워, 기온이 35도야."
      },
      {
        "speaker": "A",
        "chinese": "夏天就是这么热。你喜欢什么季节？",
        "pinyin": "Xiàtiān jiù shì zhème rè. Nǐ xǐhuān shénme jìjié?",
        "korean": "여름은 이렇게 덥지. 너는 어떤 계절을 좋아해?"
      },
      {
        "speaker": "B",
        "chinese": "我最喜欢春天，不冷不热，很舒服。",
        "pinyin": "Wǒ zuì xǐhuān chūntiān, bù lěng bú rè, hěn shūfu.",
        "korean": "나는 봄이 제일 좋아, 춥지도 덥지도 않아서 편해."
      },
      {
        "speaker": "A",
        "chinese": "秋天也不错，不过有时候会下雨。",
        "pinyin": "Qiūtiān yě búcuò, búguò yǒu shíhòu huì xià yǔ.",
        "korean": "가을도 괜찮아, 하지만 가끔 비가 와."
      },
      {
        "speaker": "B",
        "chinese": "冬天太冷了，还会下雪。",
        "pinyin": "Dōngtiān tài lěng le, hái huì xià xuě.",
        "korean": "겨울은 너무 추워, 게다가 눈도 와."
      },
      {
        "speaker": "A",
        "chinese": "明天好像要下雨，记得带伞。",
        "pinyin": "Míngtiān hǎoxiàng yào xià yǔ, jìde dài sǎn.",
        "korean": "내일 비 올 것 같아, 우산 챙겨."
      },
      {
        "speaker": "B",
        "chinese": "好的，谢谢你提醒我。",
        "pinyin": "Hǎo de, xièxie nǐ tíxǐng wǒ.",
        "korean": "알겠어, 알려줘서 고마워."
      }
    ],
    "vocabulary": [
      {
        "chinese": "天气",
        "pinyin": "tiānqì",
        "korean": "날씨"
      },
      {
        "chinese": "春天",
        "pinyin": "chūntiān",
        "korean": "봄"
      },
      {
        "chinese": "夏天",
        "pinyin": "xiàtiān",
        "korean": "여름"
      },
      {
        "chinese": "秋天",
        "pinyin": "qiūtiān",
        "korean": "가을"
      },
      {
        "chinese": "冬天",
        "pinyin": "dōngtiān",
        "korean": "겨울"
      },
      {
        "chinese": "下雨",
        "pinyin": "xià yǔ",
        "korean": "비가 오다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "今天天气怎么样？",
        "options": [
          "오늘 뭐 해?",
          "오늘 날씨 어때?",
          "오늘 어디 가?",
          "오늘 몇 시야?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "봄",
        "options": [
          "夏天",
          "秋天",
          "冬天",
          "春天"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "明天好像要___，记得带伞。",
        "options": [
          "下雪",
          "下雨",
          "刮风",
          "出太阳"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "不冷不热",
        "options": [
          "너무 춥다",
          "너무 덥다",
          "춥지도 덥지도 않다",
          "조금 춥다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "겨울",
        "options": [
          "春天",
          "夏天",
          "秋天",
          "冬天"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "天气",
        "options": [
          "계절",
          "날씨",
          "온도",
          "바람"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "下雨",
        "options": [
          "눈이 오다",
          "바람이 불다",
          "비가 오다",
          "해가 뜨다"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "冬天太冷了，还会下雪。",
        "options": [
          "겨울은 너무 더워, 비도 와.",
          "겨울은 너무 추워, 눈도 와.",
          "봄은 따뜻해, 꽃이 펴.",
          "가을은 시원해, 바람이 불어."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "记得带伞。",
        "options": [
          "우산을 사.",
          "우산 챙겨.",
          "우산을 버려.",
          "우산이 없어."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "秋天也不错。",
        "options": [
          "봄도 괜찮아.",
          "여름도 괜찮아.",
          "가을도 괜찮아.",
          "겨울도 괜찮아."
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "谢谢你提醒我。",
        "options": [
          "도와줘서 고마워.",
          "알려줘서 고마워.",
          "기다려줘서 고마워.",
          "와줘서 고마워."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "气温有三十五度。",
        "options": [
          "기온이 25도야.",
          "기온이 35도야.",
          "기온이 15도야.",
          "기온이 45도야."
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여름",
        "options": [
          "春天",
          "夏天",
          "秋天",
          "冬天"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "가을",
        "options": [
          "春天",
          "夏天",
          "秋天",
          "冬天"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "날씨",
        "options": [
          "季节",
          "天气",
          "气温",
          "下雨"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "우산",
        "options": [
          "雨衣",
          "雨鞋",
          "伞",
          "帽子"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "덥다",
        "options": [
          "冷",
          "热",
          "凉快",
          "暖和"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我最喜欢春天，不冷不热，很___。",
        "options": [
          "热",
          "冷",
          "舒服",
          "难过"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你喜欢什么___？",
        "options": [
          "天气",
          "季节",
          "时候",
          "地方"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "冬天太冷了，还会___。",
        "options": [
          "下雨",
          "下雪",
          "刮风",
          "出太阳"
        ],
        "answer": 1
      }
    ]
  },
  15: {
    "level": 15,
    "title": "취미 & 여가",
    "titleCn": "爱好和休闲",
    "description": "취미와 여가 활동에 대해 중국어로 이야기하는 방법을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你的爱好是什么？",
        "pinyin": "Nǐ de àihào shì shénme?",
        "korean": "너의 취미가 뭐야?"
      },
      {
        "speaker": "B",
        "chinese": "我喜欢看书和听音乐，你呢？",
        "pinyin": "Wǒ xǐhuān kàn shū hé tīng yīnyuè, nǐ ne?",
        "korean": "나는 독서랑 음악 듣기를 좋아해, 너는?"
      },
      {
        "speaker": "A",
        "chinese": "我最喜欢运动，特别是打篮球。",
        "pinyin": "Wǒ zuì xǐhuān yùndòng, tèbié shì dǎ lánqiú.",
        "korean": "나는 운동을 제일 좋아해, 특히 농구."
      },
      {
        "speaker": "B",
        "chinese": "你平时还做什么？",
        "pinyin": "Nǐ píngshí hái zuò shénme?",
        "korean": "평소에 또 뭐 해?"
      },
      {
        "speaker": "A",
        "chinese": "周末的时候我喜欢去旅游。",
        "pinyin": "Zhōumò de shíhòu wǒ xǐhuān qù lǚyóu.",
        "korean": "주말에는 여행 가는 걸 좋아해."
      },
      {
        "speaker": "B",
        "chinese": "旅游真不错！你去过哪些地方？",
        "pinyin": "Lǚyóu zhēn búcuò! Nǐ qùguò nǎxiē dìfāng?",
        "korean": "여행 정말 좋지! 어떤 곳에 가봤어?"
      },
      {
        "speaker": "A",
        "chinese": "我去过北京和上海，都很好玩。",
        "pinyin": "Wǒ qùguò Běijīng hé Shànghǎi, dōu hěn hǎowán.",
        "korean": "베이징이랑 상하이에 가봤어, 둘 다 재미있었어."
      },
      {
        "speaker": "B",
        "chinese": "下次我们一起去旅游吧！",
        "pinyin": "Xià cì wǒmen yìqǐ qù lǚyóu ba!",
        "korean": "다음에 우리 같이 여행 가자!"
      }
    ],
    "vocabulary": [
      {
        "chinese": "爱好",
        "pinyin": "àihào",
        "korean": "취미"
      },
      {
        "chinese": "看书",
        "pinyin": "kàn shū",
        "korean": "독서하다, 책을 읽다"
      },
      {
        "chinese": "运动",
        "pinyin": "yùndòng",
        "korean": "운동"
      },
      {
        "chinese": "听音乐",
        "pinyin": "tīng yīnyuè",
        "korean": "음악을 듣다"
      },
      {
        "chinese": "旅游",
        "pinyin": "lǚyóu",
        "korean": "여행하다"
      },
      {
        "chinese": "好玩",
        "pinyin": "hǎowán",
        "korean": "재미있다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "你的爱好是什么？",
        "options": [
          "이름이 뭐야?",
          "취미가 뭐야?",
          "직업이 뭐야?",
          "뭐 먹을래?"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "음악을 듣다",
        "options": [
          "看书",
          "运动",
          "听音乐",
          "旅游"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "周末的时候我喜欢去___。",
        "options": [
          "看书",
          "运动",
          "听音乐",
          "旅游"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "好玩",
        "options": [
          "맛있다",
          "예쁘다",
          "재미있다",
          "편하다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "운동",
        "options": [
          "爱好",
          "运动",
          "旅游",
          "看书"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "爱好",
        "options": [
          "직업",
          "취미",
          "성격",
          "이름"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "看书",
        "options": [
          "음악 듣다",
          "운동하다",
          "독서하다",
          "여행하다"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "旅游真不错！",
        "options": [
          "여행 정말 좋지!",
          "운동 정말 좋지!",
          "독서 정말 좋지!",
          "음악 정말 좋지!"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "我去过北京和上海。",
        "options": [
          "나는 베이징과 상하이에 가고 싶다.",
          "나는 베이징과 상하이에 가봤다.",
          "나는 베이징과 상하이에 살고 있다.",
          "나는 베이징과 상하이를 좋아한다."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "你平时还做什么？",
        "options": [
          "주말에 뭐 해?",
          "평소에 또 뭐 해?",
          "오늘 뭐 했어?",
          "내일 뭐 할 거야?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "特别是打篮球。",
        "options": [
          "특히 축구.",
          "특히 농구.",
          "특히 야구.",
          "특히 수영."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "下次我们一起去旅游吧！",
        "options": [
          "다음에 우리 같이 여행 가자!",
          "이번에 우리 같이 운동하자!",
          "다음에 혼자 여행 가자!",
          "오늘 우리 같이 놀자!"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "취미",
        "options": [
          "运动",
          "旅游",
          "爱好",
          "好玩"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "여행하다",
        "options": [
          "看书",
          "运动",
          "听音乐",
          "旅游"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "독서하다",
        "options": [
          "看书",
          "运动",
          "听音乐",
          "旅游"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "재미있다",
        "options": [
          "好看",
          "好吃",
          "好玩",
          "好听"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "농구를 하다",
        "options": [
          "踢足球",
          "打篮球",
          "打棒球",
          "游泳"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我最喜欢运动，___是打篮球。",
        "options": [
          "特别",
          "非常",
          "一定",
          "可能"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "我去过北京和上海，都很___。",
        "options": [
          "好看",
          "好吃",
          "好玩",
          "好听"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你___哪些地方？",
        "options": [
          "去了",
          "去过",
          "去着",
          "去的"
        ],
        "answer": 1
      }
    ]
  },
  16: {
    "level": 16,
    "title": "전화 통화",
    "titleCn": "打电话",
    "description": "전화 걸기, 받기, 메시지 남기기 등 전화 통화와 관련된 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "喂，你好！请问李明在吗？",
        "pinyin": "Wèi, nǐ hǎo! Qǐngwèn Lǐ Míng zài ma?",
        "korean": "여보세요, 안녕하세요! 리밍 있나요?"
      },
      {
        "speaker": "B",
        "chinese": "他在，请等一下，我帮你叫他。",
        "pinyin": "Tā zài, qǐng děng yīxià, wǒ bāng nǐ jiào tā.",
        "korean": "있어요, 잠깐만요, 제가 불러줄게요."
      },
      {
        "speaker": "A",
        "chinese": "好的，谢谢你。",
        "pinyin": "Hǎo de, xièxie nǐ.",
        "korean": "네, 감사합니다."
      },
      {
        "speaker": "B",
        "chinese": "喂，我是李明，你找我有什么事？",
        "pinyin": "Wèi, wǒ shì Lǐ Míng, nǐ zhǎo wǒ yǒu shénme shì?",
        "korean": "여보세요, 저 리밍인데, 무슨 일이에요?"
      },
      {
        "speaker": "A",
        "chinese": "我想问你明天有没有时间一起吃饭。",
        "pinyin": "Wǒ xiǎng wèn nǐ míngtiān yǒu méiyǒu shíjiān yìqǐ chīfàn.",
        "korean": "내일 같이 밥 먹을 시간 있는지 물어보려고요."
      },
      {
        "speaker": "B",
        "chinese": "明天下午可以。你打我的手机就行。",
        "pinyin": "Míngtiān xiàwǔ kěyǐ. Nǐ dǎ wǒ de shǒujī jiù xíng.",
        "korean": "내일 오후에 가능해요. 제 핸드폰으로 전화하면 돼요."
      },
      {
        "speaker": "A",
        "chinese": "好的，那我明天再给你打电话。",
        "pinyin": "Hǎo de, nà wǒ míngtiān zài gěi nǐ dǎ diànhuà.",
        "korean": "좋아요, 그러면 내일 다시 전화할게요."
      },
      {
        "speaker": "B",
        "chinese": "没问题，不过你别打错了，上次你打错了号码。",
        "pinyin": "Méi wèntí, búguò nǐ bié dǎ cuò le, shàng cì nǐ dǎ cuò le hàomǎ.",
        "korean": "문제없어요, 근데 잘못 걸지 마세요, 지난번에 번호 잘못 걸었잖아요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "打电话",
        "pinyin": "dǎ diànhuà",
        "korean": "전화를 걸다"
      },
      {
        "chinese": "等一下",
        "pinyin": "děng yīxià",
        "korean": "잠깐 기다리다"
      },
      {
        "chinese": "手机",
        "pinyin": "shǒujī",
        "korean": "핸드폰"
      },
      {
        "chinese": "打错了",
        "pinyin": "dǎ cuò le",
        "korean": "잘못 걸었다"
      },
      {
        "chinese": "号码",
        "pinyin": "hàomǎ",
        "korean": "번호"
      },
      {
        "chinese": "请问",
        "pinyin": "qǐngwèn",
        "korean": "여쭤볼게요 (정중한 질문)"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "打电话",
        "options": [
          "편지를 쓰다",
          "전화를 걸다",
          "문자를 보내다",
          "이메일을 보내다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "잠깐 기다리다",
        "options": [
          "等一下",
          "慢一点",
          "快一点",
          "走一下"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "喂，___李明在吗？",
        "options": [
          "请问",
          "请坐",
          "请进",
          "请说"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "打错了",
        "options": [
          "잘 걸었다",
          "끊었다",
          "잘못 걸었다",
          "다시 걸었다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "핸드폰",
        "options": [
          "电话",
          "电脑",
          "手机",
          "电视"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "号码",
        "options": [
          "이름",
          "번호",
          "주소",
          "비밀번호"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "请问",
        "options": [
          "부탁합니다",
          "여쭤볼게요",
          "미안합니다",
          "감사합니다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "전화를 걸다",
        "options": [
          "接电话",
          "打电话",
          "挂电话",
          "回电话"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "번호",
        "options": [
          "名字",
          "地址",
          "号码",
          "密码"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "他在，请___，我帮你叫他。",
        "options": [
          "等一下",
          "坐一下",
          "看一下",
          "想一下"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "手机",
        "options": [
          "컴퓨터",
          "텔레비전",
          "핸드폰",
          "카메라"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你找我有什么___？",
        "options": [
          "人",
          "事",
          "话",
          "问题"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "잘못 걸었다",
        "options": [
          "打完了",
          "打通了",
          "打错了",
          "打好了"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "等一下",
        "options": [
          "빨리 오다",
          "잠깐 기다리다",
          "천천히 가다",
          "먼저 하다"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你打我的___就行。",
        "options": [
          "电话",
          "手机",
          "号码",
          "电脑"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여쭤볼게요",
        "options": [
          "请说",
          "请看",
          "请问",
          "请走"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "我帮你叫他",
        "options": [
          "내가 그에게 전화할게요",
          "제가 그를 불러줄게요",
          "내가 그에게 말할게요",
          "내가 그를 찾을게요"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "那我明天再给你___。",
        "options": [
          "发短信",
          "写信",
          "打电话",
          "发邮件"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "내일 오후에 가능해요",
        "options": [
          "今天下午可以",
          "明天上午可以",
          "明天下午可以",
          "后天下午可以"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "上次你打错了号码",
        "options": [
          "지난번에 전화를 안 받았어요",
          "지난번에 번호를 잘못 걸었어요",
          "지난번에 전화를 끊었어요",
          "지난번에 번호를 바꿨어요"
        ],
        "answer": 1
      }
    ]
  },
  17: {
    "level": 17,
    "title": "은행 & 환전",
    "titleCn": "银行和换钱",
    "description": "은행에서 환전, 입금, 출금 등을 할 때 사용하는 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好，我想换钱。",
        "pinyin": "Nǐ hǎo, wǒ xiǎng huàn qián.",
        "korean": "안녕하세요, 환전하고 싶습니다."
      },
      {
        "speaker": "B",
        "chinese": "好的，您想换什么货币？",
        "pinyin": "Hǎo de, nín xiǎng huàn shénme huòbì?",
        "korean": "네, 어떤 화폐로 환전하시겠습니까?"
      },
      {
        "speaker": "A",
        "chinese": "我想把韩币换成人民币。今天的汇率是多少？",
        "pinyin": "Wǒ xiǎng bǎ Hánbì huàn chéng Rénmínbì. Jīntiān de huìlǜ shì duōshao?",
        "korean": "한국 원화를 인민폐로 바꾸고 싶어요. 오늘 환율이 얼마예요?"
      },
      {
        "speaker": "B",
        "chinese": "今天的汇率是一百韩币换零点五三元人民币。",
        "pinyin": "Jīntiān de huìlǜ shì yìbǎi Hánbì huàn líng diǎn wǔ sān yuán Rénmínbì.",
        "korean": "오늘 환율은 100원당 0.53위안입니다."
      },
      {
        "speaker": "A",
        "chinese": "好的，我换五十万韩币。另外我还想开一个存款账户。",
        "pinyin": "Hǎo de, wǒ huàn wǔshí wàn Hánbì. Lìngwài wǒ hái xiǎng kāi yí gè cúnkuǎn zhànghù.",
        "korean": "좋아요, 50만 원을 환전할게요. 그리고 예금 계좌도 하나 개설하고 싶습니다."
      },
      {
        "speaker": "B",
        "chinese": "没问题。请出示您的护照。",
        "pinyin": "Méi wèntí. Qǐng chūshì nín de hùzhào.",
        "korean": "문제없습니다. 여권을 보여주세요."
      },
      {
        "speaker": "A",
        "chinese": "给您。我以后可以在这里取款吗？",
        "pinyin": "Gěi nín. Wǒ yǐhòu kěyǐ zài zhèlǐ qǔkuǎn ma?",
        "korean": "여기요. 나중에 여기서 출금할 수 있나요?"
      },
      {
        "speaker": "B",
        "chinese": "可以的，您也可以用ATM机取款。",
        "pinyin": "Kěyǐ de, nín yě kěyǐ yòng ATM jī qǔkuǎn.",
        "korean": "가능합니다, ATM으로도 출금할 수 있습니다."
      }
    ],
    "vocabulary": [
      {
        "chinese": "换钱",
        "pinyin": "huàn qián",
        "korean": "환전하다"
      },
      {
        "chinese": "汇率",
        "pinyin": "huìlǜ",
        "korean": "환율"
      },
      {
        "chinese": "存款",
        "pinyin": "cúnkuǎn",
        "korean": "예금 / 입금하다"
      },
      {
        "chinese": "取款",
        "pinyin": "qǔkuǎn",
        "korean": "출금하다"
      },
      {
        "chinese": "人民币",
        "pinyin": "Rénmínbì",
        "korean": "인민폐 (중국 화폐)"
      },
      {
        "chinese": "账户",
        "pinyin": "zhànghù",
        "korean": "계좌"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "汇率",
        "options": [
          "이자",
          "환율",
          "수수료",
          "잔액"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "환전하다",
        "options": [
          "存钱",
          "换钱",
          "花钱",
          "借钱"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我想把韩币换成___。",
        "options": [
          "美元",
          "人民币",
          "日元",
          "欧元"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "取款",
        "options": [
          "입금하다",
          "송금하다",
          "출금하다",
          "환전하다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "계좌",
        "options": [
          "银行",
          "账户",
          "存款",
          "汇率"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "存款",
        "options": [
          "출금하다",
          "예금하다",
          "환전하다",
          "송금하다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "人民币",
        "options": [
          "미국 달러",
          "일본 엔",
          "인민폐",
          "유로"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "출금하다",
        "options": [
          "存款",
          "取款",
          "换钱",
          "汇款"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "환율",
        "options": [
          "利率",
          "汇率",
          "手续费",
          "余额"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "请出示您的___。",
        "options": [
          "身份证",
          "护照",
          "银行卡",
          "手机"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "换钱",
        "options": [
          "돈을 빌리다",
          "돈을 쓰다",
          "환전하다",
          "돈을 모으다"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我还想开一个___账户。",
        "options": [
          "取款",
          "存款",
          "汇款",
          "转账"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "인민폐",
        "options": [
          "美元",
          "韩币",
          "人民币",
          "日元"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "账户",
        "options": [
          "은행",
          "환율",
          "계좌",
          "이자"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "您也可以用ATM机___。",
        "options": [
          "存款",
          "换钱",
          "取款",
          "汇款"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "货币",
        "options": [
          "화폐",
          "환율",
          "이자",
          "수수료"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "예금하다",
        "options": [
          "取款",
          "换钱",
          "存款",
          "汇款"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "今天的___是多少？",
        "options": [
          "价格",
          "汇率",
          "利息",
          "手续费"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여권을 보여주세요",
        "options": [
          "请出示您的身份证",
          "请出示您的护照",
          "请出示您的银行卡",
          "请出示您的机票"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "我想换钱",
        "options": [
          "돈을 빌리고 싶어요",
          "환전하고 싶어요",
          "돈을 찾고 싶어요",
          "돈을 보내고 싶어요"
        ],
        "answer": 1
      }
    ]
  },
  18: {
    "level": 18,
    "title": "병원 & 약국",
    "titleCn": "医院和药店",
    "description": "병원에서 증상을 설명하고, 약국에서 약을 사는 등 건강 관련 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "医生，我不舒服，头很疼。",
        "pinyin": "Yīshēng, wǒ bù shūfu, tóu hěn téng.",
        "korean": "의사 선생님, 몸이 안 좋아요, 머리가 많이 아파요."
      },
      {
        "speaker": "B",
        "chinese": "你发烧了吗？让我量一下体温。",
        "pinyin": "Nǐ fāshāo le ma? Ràng wǒ liáng yīxià tǐwēn.",
        "korean": "열이 나요? 체온을 한번 재볼게요."
      },
      {
        "speaker": "A",
        "chinese": "我觉得有点儿发烧，还有点儿咳嗽。",
        "pinyin": "Wǒ juéde yǒudiǎnr fāshāo, hái yǒudiǎnr késou.",
        "korean": "좀 열이 나는 것 같고, 기침도 좀 나요."
      },
      {
        "speaker": "B",
        "chinese": "三十八度五，你发烧了。我给你开点儿药。",
        "pinyin": "Sānshíbā dù wǔ, nǐ fāshāo le. Wǒ gěi nǐ kāi diǎnr yào.",
        "korean": "38.5도, 열이 나시네요. 약을 처방해 드릴게요."
      },
      {
        "speaker": "A",
        "chinese": "我需要吃什么药？",
        "pinyin": "Wǒ xūyào chī shénme yào?",
        "korean": "어떤 약을 먹어야 하나요?"
      },
      {
        "speaker": "B",
        "chinese": "每天吃三次药，饭后吃。多喝水，好好休息。",
        "pinyin": "Měi tiān chī sān cì yào, fàn hòu chī. Duō hē shuǐ, hǎohāo xiūxi.",
        "korean": "매일 세 번 식후에 약을 드세요. 물 많이 마시고 푹 쉬세요."
      },
      {
        "speaker": "A",
        "chinese": "好的，谢谢医生。药在哪里拿？",
        "pinyin": "Hǎo de, xièxie yīshēng. Yào zài nǎlǐ ná?",
        "korean": "네, 감사합니다 의사 선생님. 약은 어디서 받나요?"
      },
      {
        "speaker": "B",
        "chinese": "你去一楼的药店拿药就可以了。",
        "pinyin": "Nǐ qù yī lóu de yàodiàn ná yào jiù kěyǐ le.",
        "korean": "1층 약국에 가서 약을 받으시면 됩니다."
      }
    ],
    "vocabulary": [
      {
        "chinese": "不舒服",
        "pinyin": "bù shūfu",
        "korean": "불편하다 / 몸이 안 좋다"
      },
      {
        "chinese": "头疼",
        "pinyin": "tóu téng",
        "korean": "두통 / 머리가 아프다"
      },
      {
        "chinese": "发烧",
        "pinyin": "fāshāo",
        "korean": "열이 나다"
      },
      {
        "chinese": "吃药",
        "pinyin": "chī yào",
        "korean": "약을 먹다"
      },
      {
        "chinese": "医生",
        "pinyin": "yīshēng",
        "korean": "의사"
      },
      {
        "chinese": "药店",
        "pinyin": "yàodiàn",
        "korean": "약국"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "发烧",
        "options": [
          "기침하다",
          "열이 나다",
          "감기에 걸리다",
          "배가 아프다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "머리가 아프다",
        "options": [
          "肚子疼",
          "牙疼",
          "头疼",
          "嗓子疼"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "每天___三次药，饭后吃。",
        "options": [
          "喝",
          "吃",
          "拿",
          "买"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "不舒服",
        "options": [
          "행복하다",
          "피곤하다",
          "몸이 안 좋다",
          "배고프다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "약국",
        "options": [
          "医院",
          "药店",
          "诊所",
          "药房"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "吃药",
        "options": [
          "약을 사다",
          "약을 먹다",
          "약을 바르다",
          "약을 처방하다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "医生",
        "options": [
          "간호사",
          "약사",
          "의사",
          "환자"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "열이 나다",
        "options": [
          "咳嗽",
          "发烧",
          "头疼",
          "感冒"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "의사",
        "options": [
          "护士",
          "药师",
          "病人",
          "医生"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "让我量一下___。",
        "options": [
          "血压",
          "体温",
          "身高",
          "体重"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "药店",
        "options": [
          "병원",
          "약국",
          "진료소",
          "응급실"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我给你___点儿药。",
        "options": [
          "买",
          "拿",
          "开",
          "吃"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "약을 먹다",
        "options": [
          "开药",
          "买药",
          "吃药",
          "拿药"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "咳嗽",
        "options": [
          "두통",
          "기침",
          "콧물",
          "복통"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "몸이 안 좋다",
        "options": [
          "很累",
          "不舒服",
          "不高兴",
          "不开心"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "多喝水，好好___。",
        "options": [
          "工作",
          "学习",
          "休息",
          "运动"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "头疼",
        "options": [
          "치통",
          "두통",
          "복통",
          "요통"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "기침하다",
        "options": [
          "发烧",
          "头疼",
          "咳嗽",
          "感冒"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你去一楼的___拿药就可以了。",
        "options": [
          "医院",
          "诊所",
          "药店",
          "超市"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "体温",
        "options": [
          "혈압",
          "체온",
          "맥박",
          "체중"
        ],
        "answer": 1
      }
    ]
  },
  19: {
    "level": 19,
    "title": "공항 & 비행기",
    "titleCn": "机场和飞机",
    "description": "공항에서 탑승 수속, 보안 검색, 탑승구 찾기 등과 관련된 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好，请出示您的护照和机票。",
        "pinyin": "Nǐ hǎo, qǐng chūshì nín de hùzhào hé jīpiào.",
        "korean": "안녕하세요, 여권과 항공권을 보여주세요."
      },
      {
        "speaker": "B",
        "chinese": "给您。我有两件行李要托运。",
        "pinyin": "Gěi nín. Wǒ yǒu liǎng jiàn xíngli yào tuōyùn.",
        "korean": "여기요. 수하물 두 개를 부치고 싶습니다."
      },
      {
        "speaker": "A",
        "chinese": "好的，这是您的登机牌。您的座位是25A，靠窗。",
        "pinyin": "Hǎo de, zhè shì nín de dēngjīpái. Nín de zuòwèi shì èrshíwǔ A, kào chuāng.",
        "korean": "네, 이것은 탑승권입니다. 좌석은 25A, 창가석이에요."
      },
      {
        "speaker": "B",
        "chinese": "请问几号登机口？",
        "pinyin": "Qǐngwèn jǐ hào dēngjīkǒu?",
        "korean": "탑승구가 몇 번인가요?"
      },
      {
        "speaker": "A",
        "chinese": "十二号登机口，在二楼。飞机下午三点起飞。",
        "pinyin": "Shí'èr hào dēngjīkǒu, zài èr lóu. Fēijī xiàwǔ sān diǎn qǐfēi.",
        "korean": "12번 탑승구, 2층에 있습니다. 비행기는 오후 3시에 출발합니다."
      },
      {
        "speaker": "B",
        "chinese": "飞机几点降落？",
        "pinyin": "Fēijī jǐ diǎn jiàngluò?",
        "korean": "비행기는 몇 시에 착륙하나요?"
      },
      {
        "speaker": "A",
        "chinese": "预计晚上六点降落。请提前半小时到登机口。",
        "pinyin": "Yùjì wǎnshang liù diǎn jiàngluò. Qǐng tíqián bàn xiǎoshí dào dēngjīkǒu.",
        "korean": "저녁 6시에 도착 예정입니다. 30분 전에 탑승구에 오세요."
      },
      {
        "speaker": "B",
        "chinese": "好的，谢谢。我先去安检了。",
        "pinyin": "Hǎo de, xièxie. Wǒ xiān qù ānjiǎn le.",
        "korean": "네, 감사합니다. 먼저 보안 검색대로 가겠습니다."
      }
    ],
    "vocabulary": [
      {
        "chinese": "登机牌",
        "pinyin": "dēngjīpái",
        "korean": "탑승권"
      },
      {
        "chinese": "行李",
        "pinyin": "xíngli",
        "korean": "수하물 / 짐"
      },
      {
        "chinese": "登机口",
        "pinyin": "dēngjīkǒu",
        "korean": "탑승구"
      },
      {
        "chinese": "起飞",
        "pinyin": "qǐfēi",
        "korean": "이륙하다"
      },
      {
        "chinese": "降落",
        "pinyin": "jiàngluò",
        "korean": "착륙하다"
      },
      {
        "chinese": "托运",
        "pinyin": "tuōyùn",
        "korean": "수하물을 부치다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "登机牌",
        "options": [
          "여권",
          "탑승권",
          "항공권",
          "비자"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "탑승구",
        "options": [
          "登机牌",
          "登机口",
          "出口",
          "入口"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "飞机下午三点___。",
        "options": [
          "降落",
          "起飞",
          "到达",
          "出发"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "行李",
        "options": [
          "항공권",
          "여권",
          "수하물",
          "탑승권"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "착륙하다",
        "options": [
          "起飞",
          "出发",
          "到达",
          "降落"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "托运",
        "options": [
          "수하물을 찾다",
          "수하물을 부치다",
          "짐을 싸다",
          "짐을 풀다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "起飞",
        "options": [
          "착륙하다",
          "이륙하다",
          "출발하다",
          "도착하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "탑승권",
        "options": [
          "机票",
          "护照",
          "登机牌",
          "签证"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "이륙하다",
        "options": [
          "降落",
          "到达",
          "起飞",
          "出发"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "请出示您的护照和___。",
        "options": [
          "身份证",
          "银行卡",
          "机票",
          "驾照"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "降落",
        "options": [
          "이륙하다",
          "출발하다",
          "착륙하다",
          "도착하다"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我有两件行李要___。",
        "options": [
          "托运",
          "携带",
          "打包",
          "寄送"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "수하물을 부치다",
        "options": [
          "取行李",
          "托运",
          "打包",
          "搬运"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "安检",
        "options": [
          "출국 심사",
          "보안 검색",
          "세관 검사",
          "입국 심사"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "수하물",
        "options": [
          "包裹",
          "背包",
          "行李",
          "箱子"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "您的座位是25A，___窗。",
        "options": [
          "靠",
          "在",
          "对",
          "向"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "登机口",
        "options": [
          "출구",
          "입구",
          "탑승구",
          "게이트"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "请提前半小时到___。",
        "options": [
          "出口",
          "入口",
          "安检",
          "登机口"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "보안 검색",
        "options": [
          "海关",
          "安检",
          "出境",
          "入境"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "预计晚上六点降落",
        "options": [
          "저녁 6시에 출발 예정입니다",
          "저녁 6시에 도착 예정입니다",
          "오후 6시에 이륙 예정입니다",
          "오전 6시에 착륙 예정입니다"
        ],
        "answer": 1
      }
    ]
  },
  20: {
    "level": 20,
    "title": "호텔 체크인/아웃",
    "titleCn": "酒店入住和退房",
    "description": "호텔에서 체크인, 체크아웃, 객실 서비스 등과 관련된 중국어 표현을 배워봅시다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好，我预订了一个房间。",
        "pinyin": "Nǐ hǎo, wǒ yùdìng le yí gè fángjiān.",
        "korean": "안녕하세요, 방을 예약했습니다."
      },
      {
        "speaker": "B",
        "chinese": "好的，请问您贵姓？预订了几晚？",
        "pinyin": "Hǎo de, qǐngwèn nín guì xìng? Yùdìng le jǐ wǎn?",
        "korean": "네, 성함이 어떻게 되세요? 몇 박 예약하셨나요?"
      },
      {
        "speaker": "A",
        "chinese": "我姓王，预订了三晚，从今天到星期四。",
        "pinyin": "Wǒ xìng Wáng, yùdìng le sān wǎn, cóng jīntiān dào xīngqīsì.",
        "korean": "왕이라고 합니다. 오늘부터 목요일까지 3박 예약했어요."
      },
      {
        "speaker": "B",
        "chinese": "找到了。您的房间是508号。这是房间的钥匙。",
        "pinyin": "Zhǎodào le. Nín de fángjiān shì wǔ líng bā hào. Zhè shì fángjiān de yàoshi.",
        "korean": "찾았습니다. 508호실입니다. 여기 방 열쇠요."
      },
      {
        "speaker": "A",
        "chinese": "请问入住时间是几点？退房时间呢？",
        "pinyin": "Qǐngwèn rùzhù shíjiān shì jǐ diǎn? Tuìfáng shíjiān ne?",
        "korean": "체크인 시간이 몇 시인가요? 체크아웃 시간은요?"
      },
      {
        "speaker": "B",
        "chinese": "入住时间是下午两点，退房时间是上午十一点。",
        "pinyin": "Rùzhù shíjiān shì xiàwǔ liǎng diǎn, tuìfáng shíjiān shì shàngwǔ shíyī diǎn.",
        "korean": "체크인은 오후 2시, 체크아웃은 오전 11시입니다."
      },
      {
        "speaker": "A",
        "chinese": "房间里有无线网络吗？密码是什么？",
        "pinyin": "Fángjiān lǐ yǒu wúxiàn wǎngluò ma? Mìmǎ shì shénme?",
        "korean": "방에 와이파이가 있나요? 비밀번호가 뭐예요?"
      },
      {
        "speaker": "B",
        "chinese": "有的，密码在桌子上的卡片上。祝您入住愉快！",
        "pinyin": "Yǒu de, mìmǎ zài zhuōzi shàng de kǎpiàn shàng. Zhù nín rùzhù yúkuài!",
        "korean": "네, 비밀번호는 책상 위 카드에 있습니다. 즐거운 숙박 되세요!"
      }
    ],
    "vocabulary": [
      {
        "chinese": "预订",
        "pinyin": "yùdìng",
        "korean": "예약하다"
      },
      {
        "chinese": "房间",
        "pinyin": "fángjiān",
        "korean": "방 / 객실"
      },
      {
        "chinese": "入住",
        "pinyin": "rùzhù",
        "korean": "체크인 / 입실하다"
      },
      {
        "chinese": "退房",
        "pinyin": "tuìfáng",
        "korean": "체크아웃 / 퇴실하다"
      },
      {
        "chinese": "钥匙",
        "pinyin": "yàoshi",
        "korean": "열쇠"
      },
      {
        "chinese": "密码",
        "pinyin": "mìmǎ",
        "korean": "비밀번호"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "预订",
        "options": [
          "취소하다",
          "예약하다",
          "확인하다",
          "변경하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "체크아웃",
        "options": [
          "入住",
          "退房",
          "预订",
          "取消"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "这是房间的___。",
        "options": [
          "密码",
          "卡片",
          "钥匙",
          "电话"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "房间",
        "options": [
          "호텔",
          "로비",
          "방",
          "화장실"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "열쇠",
        "options": [
          "密码",
          "钥匙",
          "房卡",
          "门"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "入住",
        "options": [
          "체크아웃",
          "체크인",
          "예약",
          "취소"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "退房",
        "options": [
          "체크인",
          "예약하다",
          "체크아웃",
          "연장하다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "예약하다",
        "options": [
          "取消",
          "确认",
          "预订",
          "变更"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "비밀번호",
        "options": [
          "钥匙",
          "房卡",
          "密码",
          "号码"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "请问您___姓？",
        "options": [
          "贵",
          "您",
          "什么",
          "哪"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "密码",
        "options": [
          "열쇠",
          "카드",
          "비밀번호",
          "번호"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "房间里有___网络吗？",
        "options": [
          "有线",
          "无线",
          "手机",
          "电脑"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "체크인",
        "options": [
          "退房",
          "预订",
          "入住",
          "登记"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "钥匙",
        "options": [
          "카드",
          "열쇠",
          "비밀번호",
          "자물쇠"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "预订了___晚，从今天到星期四。",
        "options": [
          "两",
          "三",
          "四",
          "五"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "방",
        "options": [
          "酒店",
          "大厅",
          "房间",
          "卫生间"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "无线网络",
        "options": [
          "유선 인터넷",
          "와이파이",
          "데이터",
          "블루투스"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "退房时间是上午___点。",
        "options": [
          "九",
          "十",
          "十一",
          "十二"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "즐거운 숙박 되세요",
        "options": [
          "欢迎光临",
          "祝您入住愉快",
          "一路平安",
          "再见"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "预订了三晚",
        "options": [
          "2박 예약했다",
          "3박 예약했다",
          "4박 예약했다",
          "5박 예약했다"
        ],
        "answer": 1
      }
    ]
  },
  21: {
    "level": 21,
    "title": "관광 & 사진",
    "titleCn": "观光和拍照",
    "description": "관광지에서 사진 찍기, 명소 방문, 입장권 구매 등 관광 관련 표현을 배웁니다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "这里的风景真美，我们拍张照吧！",
        "pinyin": "Zhèlǐ de fēngjǐng zhēn měi, wǒmen pāi zhāng zhào ba!",
        "korean": "여기 풍경이 정말 아름다워요, 우리 사진 찍어요!"
      },
      {
        "speaker": "B",
        "chinese": "好啊！你帮我拍一张，好吗？",
        "pinyin": "Hǎo a! Nǐ bāng wǒ pāi yì zhāng, hǎo ma?",
        "korean": "좋아요! 저 한 장 찍어 줄래요?"
      },
      {
        "speaker": "A",
        "chinese": "没问题。笑一笑！拍好了。",
        "pinyin": "Méi wèntí. Xiào yí xiào! Pāi hǎo le.",
        "korean": "문제없어요. 웃어 보세요! 찍었어요."
      },
      {
        "speaker": "B",
        "chinese": "谢谢！这个名胜古迹叫什么名字？",
        "pinyin": "Xièxie! Zhège míngshèng gǔjì jiào shénme míngzì?",
        "korean": "고마워요! 이 명승고적은 이름이 뭐예요?"
      },
      {
        "speaker": "A",
        "chinese": "这是长城，中国最有名的古迹之一。",
        "pinyin": "Zhè shì Chángchéng, Zhōngguó zuì yǒumíng de gǔjì zhī yī.",
        "korean": "이것은 만리장성이에요, 중국에서 가장 유명한 고적 중 하나예요."
      },
      {
        "speaker": "B",
        "chinese": "门票多少钱一张？",
        "pinyin": "Ménpiào duōshao qián yì zhāng?",
        "korean": "입장권은 한 장에 얼마예요?"
      },
      {
        "speaker": "A",
        "chinese": "成人票四十元，学生票半价。",
        "pinyin": "Chéngrén piào sìshí yuán, xuéshēng piào bànjià.",
        "korean": "성인 표는 40위안이고, 학생 표는 반값이에요."
      },
      {
        "speaker": "B",
        "chinese": "我们需要请一个导游吗？",
        "pinyin": "Wǒmen xūyào qǐng yí gè dǎoyóu ma?",
        "korean": "우리 가이드를 한 명 부를까요?"
      }
    ],
    "vocabulary": [
      {
        "chinese": "拍照",
        "pinyin": "pāizhào",
        "korean": "사진을 찍다"
      },
      {
        "chinese": "风景",
        "pinyin": "fēngjǐng",
        "korean": "풍경"
      },
      {
        "chinese": "名胜古迹",
        "pinyin": "míngshèng gǔjì",
        "korean": "명승고적"
      },
      {
        "chinese": "门票",
        "pinyin": "ménpiào",
        "korean": "입장권"
      },
      {
        "chinese": "导游",
        "pinyin": "dǎoyóu",
        "korean": "가이드, 관광 안내원"
      },
      {
        "chinese": "半价",
        "pinyin": "bànjià",
        "korean": "반값"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "风景",
        "options": [
          "날씨",
          "풍경",
          "사진",
          "입장권"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "导游",
        "options": [
          "운전사",
          "손님",
          "가이드",
          "경찰"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "입장권",
        "options": [
          "导游",
          "门票",
          "半价",
          "风景"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "这里的___真美！(풍경)",
        "options": [
          "拍照",
          "门票",
          "风景",
          "导游"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "사진을 찍다",
        "options": [
          "风景",
          "名胜古迹",
          "导游",
          "拍照"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "半价",
        "options": [
          "전액",
          "반값",
          "무료",
          "할인"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "名胜古迹",
        "options": [
          "관광지",
          "명승고적",
          "박물관",
          "공원"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "반값",
        "options": [
          "门票",
          "导游",
          "半价",
          "风景"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "풍경",
        "options": [
          "拍照",
          "风景",
          "名胜古迹",
          "导游"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "你帮我___一张，好吗？(찍다)",
        "options": [
          "拍",
          "看",
          "买",
          "写"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "门票多少钱一张？",
        "options": [
          "가이드는 어디에 있어요?",
          "입장권은 한 장에 얼마예요?",
          "사진 한 장 찍어 줄래요?",
          "풍경이 어때요?"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "拍照",
        "options": [
          "관광하다",
          "사진을 찍다",
          "여행하다",
          "구경하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "가이드, 관광 안내원",
        "options": [
          "门票",
          "半价",
          "风景",
          "导游"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "成人票四十元，学生票___。(반값)",
        "options": [
          "免费",
          "半价",
          "全价",
          "打折"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "笑一笑",
        "options": [
          "잠깐만요",
          "웃어 보세요",
          "기다려 주세요",
          "조심하세요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "명승고적",
        "options": [
          "风景",
          "门票",
          "名胜古迹",
          "拍照"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我们需要请一个___吗？(가이드)",
        "options": [
          "风景",
          "门票",
          "导游",
          "半价"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "우리 사진 찍어요!",
        "options": [
          "我们走吧！",
          "我们拍张照吧！",
          "我们吃饭吧！",
          "我们休息吧！"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "这是长城，中国最有名的古迹之一。",
        "options": [
          "이것은 자금성이에요, 중국에서 가장 큰 궁전이에요.",
          "이것은 만리장성이에요, 중국에서 가장 유명한 고적 중 하나예요.",
          "이것은 천안문이에요, 중국에서 가장 유명한 광장이에요.",
          "이것은 서호예요, 중국에서 가장 아름다운 호수예요."
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "___多少钱一张？(입장권)",
        "options": [
          "风景",
          "导游",
          "门票",
          "拍照"
        ],
        "answer": 2
      }
    ]
  },
  22: {
    "level": 22,
    "title": "긴급 상황",
    "titleCn": "紧急情况",
    "description": "긴급 상황에서 도움을 요청하거나 신고하는 표현을 배웁니다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "救命！有人受伤了！",
        "pinyin": "Jiùmìng! Yǒu rén shòushāng le!",
        "korean": "살려주세요! 누가 다쳤어요!"
      },
      {
        "speaker": "B",
        "chinese": "别着急，我马上打电话报警。",
        "pinyin": "Bié zhāojí, wǒ mǎshàng dǎ diànhuà bàojǐng.",
        "korean": "당황하지 마세요, 제가 바로 전화해서 신고할게요."
      },
      {
        "speaker": "A",
        "chinese": "我的钱包丢了，怎么办？",
        "pinyin": "Wǒ de qiánbāo diū le, zěnme bàn?",
        "korean": "제 지갑을 잃어버렸어요, 어떡하죠?"
      },
      {
        "speaker": "B",
        "chinese": "你先去附近的派出所报案吧。",
        "pinyin": "Nǐ xiān qù fùjìn de pàichūsuǒ bào'àn ba.",
        "korean": "먼저 근처 파출소에 가서 신고하세요."
      },
      {
        "speaker": "A",
        "chinese": "请帮帮忙，我找不到我的朋友了。",
        "pinyin": "Qǐng bāngbang máng, wǒ zhǎo bú dào wǒ de péngyou le.",
        "korean": "도와주세요, 제 친구를 찾을 수가 없어요."
      },
      {
        "speaker": "B",
        "chinese": "别担心，我帮你一起找。他长什么样？",
        "pinyin": "Bié dānxīn, wǒ bāng nǐ yìqǐ zhǎo. Tā zhǎng shénme yàng?",
        "korean": "걱정 마세요, 제가 같이 찾아줄게요. 어떻게 생겼어요?"
      },
      {
        "speaker": "A",
        "chinese": "这附近有没有急救中心？",
        "pinyin": "Zhè fùjìn yǒu méiyǒu jíjiù zhōngxīn?",
        "korean": "이 근처에 응급 센터가 있나요?"
      },
      {
        "speaker": "B",
        "chinese": "前面五百米就有一家医院。",
        "pinyin": "Qiánmiàn wǔbǎi mǐ jiù yǒu yì jiā yīyuàn.",
        "korean": "앞쪽 500미터에 병원이 하나 있어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "救命",
        "pinyin": "jiùmìng",
        "korean": "살려주세요, 도와주세요"
      },
      {
        "chinese": "报警",
        "pinyin": "bàojǐng",
        "korean": "신고하다, 경찰에 알리다"
      },
      {
        "chinese": "丢了",
        "pinyin": "diū le",
        "korean": "잃어버렸다"
      },
      {
        "chinese": "帮忙",
        "pinyin": "bāngmáng",
        "korean": "도와주다, 도움"
      },
      {
        "chinese": "急救",
        "pinyin": "jíjiù",
        "korean": "응급 처치"
      },
      {
        "chinese": "派出所",
        "pinyin": "pàichūsuǒ",
        "korean": "파출소"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "救命",
        "options": [
          "도와주세요",
          "살려주세요",
          "실례합니다",
          "감사합니다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "잃어버렸다",
        "options": [
          "帮忙",
          "报警",
          "丢了",
          "急救"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "我马上打电话___。(신고하다)",
        "options": [
          "帮忙",
          "救命",
          "报警",
          "丢了"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "急救",
        "options": [
          "파출소",
          "응급 처치",
          "신고",
          "도움"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "도와주다",
        "options": [
          "救命",
          "报警",
          "急救",
          "帮忙"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "派出所",
        "options": [
          "병원",
          "파출소",
          "소방서",
          "학교"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "报警",
        "options": [
          "도와주다",
          "잃어버리다",
          "신고하다",
          "다치다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "파출소",
        "options": [
          "急救",
          "救命",
          "派出所",
          "报警"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "응급 처치",
        "options": [
          "报警",
          "急救",
          "帮忙",
          "救命"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我的钱包___了，怎么办？(잃어버리다)",
        "options": [
          "丢",
          "找",
          "买",
          "卖"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "别着急",
        "options": [
          "걱정 마세요",
          "당황하지 마세요",
          "조심하세요",
          "빨리 오세요"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "帮忙",
        "options": [
          "신고하다",
          "응급 처치",
          "도와주다",
          "살려주세요"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "살려주세요",
        "options": [
          "帮忙",
          "急救",
          "报警",
          "救命"
        ],
        "answer": 3
      },
      {
        "type": "fill_blank",
        "question": "你先去附近的___报案吧。(파출소)",
        "options": [
          "医院",
          "派出所",
          "学校",
          "商店"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "신고하다, 경찰에 알리다",
        "options": [
          "帮忙",
          "报警",
          "救命",
          "丢了"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "有人受伤了",
        "options": [
          "누가 잃어버렸어요",
          "누가 다쳤어요",
          "누가 왔어요",
          "누가 갔어요"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "这附近有没有___中心？(응급 처치)",
        "options": [
          "帮忙",
          "报警",
          "救命",
          "急救"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "걱정 마세요",
        "options": [
          "别着急",
          "别担心",
          "别走",
          "别说"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "丢了",
        "options": [
          "찾았다",
          "샀다",
          "잃어버렸다",
          "버렸다"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "请___忙，我找不到我的朋友了。(도와주다)",
        "options": [
          "帮帮",
          "救救",
          "报报",
          "找找"
        ],
        "answer": 0
      }
    ]
  },
  23: {
    "level": 23,
    "title": "직장 & 업무",
    "titleCn": "工作和业务",
    "description": "직장 생활, 회의, 야근, 동료와의 대화 등 업무 관련 표현을 배웁니다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你每天几点上班？",
        "pinyin": "Nǐ měitiān jǐ diǎn shàngbān?",
        "korean": "매일 몇 시에 출근해요?"
      },
      {
        "speaker": "B",
        "chinese": "我早上九点上班，下午六点下班。",
        "pinyin": "Wǒ zǎoshang jiǔ diǎn shàngbān, xiàwǔ liù diǎn xiàbān.",
        "korean": "아침 9시에 출근하고, 오후 6시에 퇴근해요."
      },
      {
        "speaker": "A",
        "chinese": "今天下午两点要开会，你知道吗？",
        "pinyin": "Jīntiān xiàwǔ liǎng diǎn yào kāihuì, nǐ zhīdào ma?",
        "korean": "오늘 오후 2시에 회의해야 해요, 알고 있어요?"
      },
      {
        "speaker": "B",
        "chinese": "知道了。老板说这次会议很重要。",
        "pinyin": "Zhīdào le. Lǎobǎn shuō zhè cì huìyì hěn zhòngyào.",
        "korean": "알고 있어요. 사장님이 이번 회의가 매우 중요하다고 했어요."
      },
      {
        "speaker": "A",
        "chinese": "最近工作太忙了，经常要加班。",
        "pinyin": "Zuìjìn gōngzuò tài máng le, jīngcháng yào jiābān.",
        "korean": "요즘 일이 너무 바빠서 자주 야근해야 해요."
      },
      {
        "speaker": "B",
        "chinese": "我也是。我的同事们都在加班。",
        "pinyin": "Wǒ yě shì. Wǒ de tóngshìmen dōu zài jiābān.",
        "korean": "저도요. 제 동료들도 다 야근하고 있어요."
      },
      {
        "speaker": "A",
        "chinese": "你和你的同事关系怎么样？",
        "pinyin": "Nǐ hé nǐ de tóngshì guānxì zěnmeyàng?",
        "korean": "동료와의 관계는 어때요?"
      },
      {
        "speaker": "B",
        "chinese": "很好，大家经常一起吃午饭。",
        "pinyin": "Hěn hǎo, dàjiā jīngcháng yìqǐ chī wǔfàn.",
        "korean": "아주 좋아요, 다들 자주 같이 점심을 먹어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "上班",
        "pinyin": "shàngbān",
        "korean": "출근하다"
      },
      {
        "chinese": "开会",
        "pinyin": "kāihuì",
        "korean": "회의하다"
      },
      {
        "chinese": "加班",
        "pinyin": "jiābān",
        "korean": "야근하다"
      },
      {
        "chinese": "同事",
        "pinyin": "tóngshì",
        "korean": "동료"
      },
      {
        "chinese": "老板",
        "pinyin": "lǎobǎn",
        "korean": "사장, 보스"
      },
      {
        "chinese": "下班",
        "pinyin": "xiàbān",
        "korean": "퇴근하다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "加班",
        "options": [
          "출근하다",
          "퇴근하다",
          "야근하다",
          "회의하다"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "동료",
        "options": [
          "老板",
          "同事",
          "朋友",
          "家人"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "今天下午要___，你知道吗？(회의하다)",
        "options": [
          "上班",
          "加班",
          "下班",
          "开会"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "老板",
        "options": [
          "동료",
          "친구",
          "사장",
          "선생님"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "출근하다",
        "options": [
          "下班",
          "加班",
          "开会",
          "上班"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "下班",
        "options": [
          "출근하다",
          "퇴근하다",
          "야근하다",
          "회의하다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "上班",
        "options": [
          "퇴근하다",
          "출근하다",
          "야근하다",
          "쉬다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "야근하다",
        "options": [
          "上班",
          "下班",
          "加班",
          "开会"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "사장, 보스",
        "options": [
          "同事",
          "老板",
          "朋友",
          "老师"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我早上九点___，下午六点下班。(출근하다)",
        "options": [
          "加班",
          "开会",
          "上班",
          "下班"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "开会",
        "options": [
          "출근하다",
          "야근하다",
          "회의하다",
          "퇴근하다"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "同事",
        "options": [
          "사장",
          "동료",
          "선생님",
          "가족"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "회의하다",
        "options": [
          "加班",
          "上班",
          "下班",
          "开会"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "퇴근하다",
        "options": [
          "上班",
          "下班",
          "加班",
          "开会"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "最近工作太忙了，经常要___。(야근하다)",
        "options": [
          "上班",
          "下班",
          "开会",
          "加班"
        ],
        "answer": 3
      },
      {
        "type": "cn_to_kr",
        "question": "老板说这次会议很重要。",
        "options": [
          "동료가 이번 회의에 참석한다고 했어요.",
          "사장님이 이번 회의가 매우 중요하다고 했어요.",
          "사장님이 오늘 퇴근이 늦다고 했어요.",
          "동료가 야근을 해야 한다고 했어요."
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我的___们都在加班。(동료)",
        "options": [
          "老板",
          "朋友",
          "同事",
          "老师"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "매일 몇 시에 출근해요?",
        "options": [
          "你每天几点下班？",
          "你每天几点上班？",
          "你每天几点开会？",
          "你每天几点加班？"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "大家经常一起吃午饭。",
        "options": [
          "다들 자주 같이 야근해요.",
          "다들 자주 같이 점심을 먹어요.",
          "다들 자주 같이 회의해요.",
          "다들 자주 같이 퇴근해요."
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "___说这次会议很重要。(사장님)",
        "options": [
          "同事",
          "朋友",
          "老板",
          "老师"
        ],
        "answer": 2
      }
    ]
  },
  24: {
    "level": 24,
    "title": "문화 & 명절",
    "titleCn": "文化和节日",
    "description": "중국의 전통 문화와 명절, 풍습 관련 표현을 배웁니다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "中国最重要的节日是什么？",
        "pinyin": "Zhōngguó zuì zhòngyào de jiérì shì shénme?",
        "korean": "중국에서 가장 중요한 명절은 뭐예요?"
      },
      {
        "speaker": "B",
        "chinese": "当然是春节了，就是中国的新年。",
        "pinyin": "Dāngrán shì Chūnjié le, jiùshì Zhōngguó de xīnnián.",
        "korean": "당연히 춘절이에요, 바로 중국의 설날이죠."
      },
      {
        "speaker": "A",
        "chinese": "春节的时候你们做什么？",
        "pinyin": "Chūnjié de shíhou nǐmen zuò shénme?",
        "korean": "춘절 때 뭐 해요?"
      },
      {
        "speaker": "B",
        "chinese": "我们全家一起包饺子，还会发红包。",
        "pinyin": "Wǒmen quánjiā yìqǐ bāo jiǎozi, hái huì fā hóngbāo.",
        "korean": "온 가족이 함께 만두를 빚고, 또 세뱃돈도 줘요."
      },
      {
        "speaker": "A",
        "chinese": "中秋节是什么时候？",
        "pinyin": "Zhōngqiūjié shì shénme shíhou?",
        "korean": "중추절은 언제예요?"
      },
      {
        "speaker": "B",
        "chinese": "农历八月十五。我们会吃月饼，赏月。",
        "pinyin": "Nónglì bā yuè shíwǔ. Wǒmen huì chī yuèbǐng, shǎngyuè.",
        "korean": "음력 8월 15일이에요. 월병을 먹고 달을 감상해요."
      },
      {
        "speaker": "A",
        "chinese": "春节放假几天？",
        "pinyin": "Chūnjié fàngjià jǐ tiān?",
        "korean": "춘절에 며칠 쉬어요?"
      },
      {
        "speaker": "B",
        "chinese": "一般放假七天，大家都回家过年。",
        "pinyin": "Yìbān fàngjià qī tiān, dàjiā dōu huíjiā guònián.",
        "korean": "보통 7일 쉬고, 모두 집에 가서 설을 쇠어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "春节",
        "pinyin": "Chūnjié",
        "korean": "춘절 (중국 설날)"
      },
      {
        "chinese": "中秋节",
        "pinyin": "Zhōngqiūjié",
        "korean": "중추절 (추석)"
      },
      {
        "chinese": "红包",
        "pinyin": "hóngbāo",
        "korean": "세뱃돈, 홍바오"
      },
      {
        "chinese": "饺子",
        "pinyin": "jiǎozi",
        "korean": "만두"
      },
      {
        "chinese": "放假",
        "pinyin": "fàngjià",
        "korean": "휴가, 방학"
      },
      {
        "chinese": "月饼",
        "pinyin": "yuèbǐng",
        "korean": "월병"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "红包",
        "options": [
          "만두",
          "월병",
          "세뱃돈",
          "선물"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "만두",
        "options": [
          "月饼",
          "红包",
          "饺子",
          "春节"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "春节的时候，大家都___七天。(쉬다)",
        "options": [
          "过年",
          "放假",
          "加班",
          "上班"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "中秋节",
        "options": [
          "춘절",
          "중추절",
          "단오절",
          "원소절"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "춘절 (중국 설날)",
        "options": [
          "中秋节",
          "放假",
          "春节",
          "红包"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "饺子",
        "options": [
          "월병",
          "만두",
          "떡",
          "국수"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "放假",
        "options": [
          "출근",
          "야근",
          "휴가",
          "퇴근"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "월병",
        "options": [
          "饺子",
          "红包",
          "月饼",
          "春节"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "세뱃돈, 홍바오",
        "options": [
          "春节",
          "红包",
          "饺子",
          "月饼"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "我们全家一起包___。(만두)",
        "options": [
          "月饼",
          "红包",
          "饺子",
          "年糕"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "月饼",
        "options": [
          "만두",
          "월병",
          "세뱃돈",
          "떡"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "春节",
        "options": [
          "중추절",
          "단오절",
          "춘절",
          "원소절"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "휴가, 방학",
        "options": [
          "春节",
          "中秋节",
          "红包",
          "放假"
        ],
        "answer": 3
      },
      {
        "type": "kr_to_cn",
        "question": "중추절 (추석)",
        "options": [
          "春节",
          "中秋节",
          "放假",
          "红包"
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "中秋节我们会吃___，赏月。(월병)",
        "options": [
          "饺子",
          "月饼",
          "红包",
          "年糕"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "大家都回家过年。",
        "options": [
          "모두 여행을 가요.",
          "모두 집에 가서 설을 쇠어요.",
          "모두 야근을 해요.",
          "모두 만두를 먹어요."
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "当然是春节了，就是中国的新年。",
        "options": [
          "당연히 중추절이에요, 바로 중국의 추석이죠.",
          "당연히 춘절이에요, 바로 중국의 설날이죠.",
          "당연히 단오절이에요, 바로 중국의 단오이죠.",
          "당연히 원소절이에요, 바로 중국의 정월대보름이죠."
        ],
        "answer": 1
      },
      {
        "type": "fill_blank",
        "question": "春节的时候还会发___。(세뱃돈)",
        "options": [
          "月饼",
          "饺子",
          "红包",
          "礼物"
        ],
        "answer": 2
      },
      {
        "type": "kr_to_cn",
        "question": "달을 감상하다",
        "options": [
          "吃月饼",
          "包饺子",
          "赏月",
          "放假"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "中国最重要的___是什么？(명절)",
        "options": [
          "工作",
          "节日",
          "食物",
          "地方"
        ],
        "answer": 1
      }
    ]
  },
  25: {
    "level": 25,
    "title": "종합 회화",
    "titleCn": "综合会话",
    "description": "이전 레벨에서 배운 다양한 주제를 종합하여 더 복잡한 문장으로 대화하는 연습을 합니다.",
    "conversations": [
      {
        "speaker": "A",
        "chinese": "你好！好久不见，最近怎么样？工作忙吗？",
        "pinyin": "Nǐ hǎo! Hǎojiǔ bújiàn, zuìjìn zěnmeyàng? Gōngzuò máng ma?",
        "korean": "안녕하세요! 오랜만이에요, 요즘 어때요? 일이 바빠요?"
      },
      {
        "speaker": "B",
        "chinese": "还好，上个月刚换了新工作，同事们都很友好。",
        "pinyin": "Hái hǎo, shàng gè yuè gāng huàn le xīn gōngzuò, tóngshìmen dōu hěn yǒuhǎo.",
        "korean": "괜찮아요, 지난달에 막 새 직장으로 옮겼는데 동료들이 다 친절해요."
      },
      {
        "speaker": "A",
        "chinese": "太好了！春节放假的时候你打算去哪儿旅游？",
        "pinyin": "Tài hǎo le! Chūnjié fàngjià de shíhou nǐ dǎsuàn qù nǎr lǚyóu?",
        "korean": "잘됐네요! 춘절 연휴 때 어디로 여행 갈 계획이에요?"
      },
      {
        "speaker": "B",
        "chinese": "我想去北京看看长城，听说那里的风景特别美。",
        "pinyin": "Wǒ xiǎng qù Běijīng kànkan Chángchéng, tīngshuō nàlǐ de fēngjǐng tèbié měi.",
        "korean": "베이징에 가서 만리장성을 보고 싶어요, 그곳 풍경이 특별히 아름답다고 들었어요."
      },
      {
        "speaker": "A",
        "chinese": "去北京的话，别忘了尝尝北京烤鸭，非常好吃。",
        "pinyin": "Qù Běijīng dehuà, bié wàng le chángchang Běijīng kǎoyā, fēicháng hǎochī.",
        "korean": "베이징에 가면, 베이징 오리구이 꼭 먹어 보세요, 정말 맛있어요."
      },
      {
        "speaker": "B",
        "chinese": "好的！对了，你能帮我在网上订两张机票吗？",
        "pinyin": "Hǎo de! Duìle, nǐ néng bāng wǒ zài wǎngshàng dìng liǎng zhāng jīpiào ma?",
        "korean": "좋아요! 참, 인터넷에서 비행기표 두 장 예약하는 것 좀 도와줄 수 있어요?"
      },
      {
        "speaker": "A",
        "chinese": "没问题。你想住什么样的酒店？贵的还是便宜的？",
        "pinyin": "Méi wèntí. Nǐ xiǎng zhù shénme yàng de jiǔdiàn? Guì de háishi piányi de?",
        "korean": "문제없어요. 어떤 호텔에 묵고 싶어요? 비싼 곳이요 아니면 저렴한 곳이요?"
      },
      {
        "speaker": "B",
        "chinese": "不用太贵，干净舒服就好。旅游回来以后，我们一起吃顿饭吧。",
        "pinyin": "Búyòng tài guì, gānjìng shūfu jiù hǎo. Lǚyóu huílái yǐhòu, wǒmen yìqǐ chī dùn fàn ba.",
        "korean": "너무 비쌀 필요 없어요, 깨끗하고 편하면 돼요. 여행 다녀온 후에, 우리 같이 밥 한 끼 먹어요."
      }
    ],
    "vocabulary": [
      {
        "chinese": "好久不见",
        "pinyin": "hǎojiǔ bújiàn",
        "korean": "오랜만이다"
      },
      {
        "chinese": "打算",
        "pinyin": "dǎsuàn",
        "korean": "계획하다, ~할 생각이다"
      },
      {
        "chinese": "旅游",
        "pinyin": "lǚyóu",
        "korean": "여행하다"
      },
      {
        "chinese": "机票",
        "pinyin": "jīpiào",
        "korean": "비행기표"
      },
      {
        "chinese": "舒服",
        "pinyin": "shūfu",
        "korean": "편안하다"
      },
      {
        "chinese": "友好",
        "pinyin": "yǒuhǎo",
        "korean": "친절하다, 우호적이다"
      }
    ],
    "quiz": [
      {
        "type": "cn_to_kr",
        "question": "好久不见",
        "options": [
          "안녕하세요",
          "오랜만이다",
          "감사합니다",
          "잘 지내요"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "비행기표",
        "options": [
          "门票",
          "火车票",
          "机票",
          "船票"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "春节放假的时候你___去哪儿？(계획하다)",
        "options": [
          "打算",
          "可以",
          "应该",
          "喜欢"
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "舒服",
        "options": [
          "깨끗하다",
          "편안하다",
          "아름답다",
          "친절하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "여행하다",
        "options": [
          "加班",
          "上班",
          "旅游",
          "出发"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "友好",
        "options": [
          "편안하다",
          "친절하다",
          "아름답다",
          "바쁘다"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "打算",
        "options": [
          "계획하다",
          "여행하다",
          "도착하다",
          "출발하다"
        ],
        "answer": 0
      },
      {
        "type": "kr_to_cn",
        "question": "오랜만이다",
        "options": [
          "你好",
          "好久不见",
          "再见",
          "谢谢"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "편안하다",
        "options": [
          "友好",
          "干净",
          "舒服",
          "漂亮"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "同事们都很___。(친절하다)",
        "options": [
          "舒服",
          "友好",
          "干净",
          "漂亮"
        ],
        "answer": 1
      },
      {
        "type": "cn_to_kr",
        "question": "机票",
        "options": [
          "입장권",
          "기차표",
          "비행기표",
          "배표"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "旅游",
        "options": [
          "출근하다",
          "여행하다",
          "야근하다",
          "퇴근하다"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "계획하다",
        "options": [
          "旅游",
          "打算",
          "舒服",
          "友好"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "친절하다, 우호적이다",
        "options": [
          "舒服",
          "干净",
          "友好",
          "好久不见"
        ],
        "answer": 2
      },
      {
        "type": "fill_blank",
        "question": "你能帮我在网上订两张___吗？(비행기표)",
        "options": [
          "门票",
          "火车票",
          "机票",
          "船票"
        ],
        "answer": 2
      },
      {
        "type": "cn_to_kr",
        "question": "不用太贵，干净舒服就好。",
        "options": [
          "너무 비쌀 필요 없어요, 깨끗하고 편하면 돼요.",
          "비싼 게 좋아요, 편하니까요.",
          "너무 저렴하면 안 돼요, 깨끗해야 해요.",
          "가격은 상관없어요, 편하면 돼요."
        ],
        "answer": 0
      },
      {
        "type": "cn_to_kr",
        "question": "上个月刚换了新工作。",
        "options": [
          "지난달에 막 새 직장으로 옮겼어요.",
          "이번 달에 새 직장을 찾고 있어요.",
          "다음 달에 새 직장으로 옮길 거예요.",
          "지난달에 직장을 그만뒀어요."
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "___回来以后，我们一起吃顿饭吧。(여행)",
        "options": [
          "工作",
          "旅游",
          "加班",
          "上班"
        ],
        "answer": 1
      },
      {
        "type": "kr_to_cn",
        "question": "베이징 오리구이를 꼭 먹어 보세요.",
        "options": [
          "别忘了尝尝北京烤鸭。",
          "别忘了去看长城。",
          "别忘了买机票。",
          "别忘了订酒店。"
        ],
        "answer": 0
      },
      {
        "type": "fill_blank",
        "question": "我想去北京看看长城，听说那里的风景特别___。(아름답다)",
        "options": [
          "好",
          "大",
          "美",
          "远"
        ],
        "answer": 2
      }
    ]
  }
};
