import personalityType from 'types/personality_type'
const personalityTypes: {
  [key: string]: personalityType
} = {
  optimist: {
    name: '楽天家',
    description:
      'あなたの持つ特性の中で楽天的な性格は特に顕著なようです。\nこのタイプの方は少し困難にぶつかったくらいではへこたれません。\n\nそもそもあまり困難と認識せずに持ち前の特性で乗り切っていくことでしょう。',
    color: 'teal.500',
  },
  rationalist: {
    name: '合理主義者',
    description:
      'あなたの持つ特性の中で合理的な性格は特に顕著なようです。\n理不尽さや非効率を嫌い、合理的に考え行動します。\n\n得をすることも多いですが、全てを合理的に考えてしまい逆に悩んだりすることもあるでしょう。',
    color: 'blue.500',
  },
  patient: {
    name: '忍耐者',
    description:
      'あなたの持つ特性の中で忍耐強さは特に顕著なようです。\nこのタイプの方は自分の目標に対して辛抱強く努力することができます。\n\n直ぐに芽が出ないこともありますが、大器晩成タイプと言えるでしょう。',
    color: 'red.500',
  },
  dreamer: {
    name: '夢追い人',
    description:
      'あなたの持つ特性の中で大きな野望を抱く特性は特に顕著なようです。\n他の人には理解されないことでも自分の信念に従って行動し、時には大きな成果を掴むことでしょう。',
    color: 'yellow.500',
  },
  cautious: {
    name: '慎重者',
    description:
      'あなたの持つ特性の中で慎重な性格は特に顕著なようです。\nリスクを天秤にかけ分の悪い賭けはしないタイプです。\n\nその慎重さは身を守ることも多いですが、時にはチャンスを逃してしまうこともあるかもしれません。',
    color: 'green.500',
  },
}

export default personalityTypes
