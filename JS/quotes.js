const quotes = [
    {
        quote: "네가 준비해왔던 바로 그 주어진 의무를 성실히 행하라. 다만 그것의 결과에 집착하지 말라. 그럴 때 너의 마음은 평온해질 것이고, 자유로워질 것이며, 네 안의 신에게 다가가게 될 것이다.",
        author: "지적 대화를 위한 넓고 얇은 지식",
    },
    {
        quote: "어떤 후회는 전혀 사실에 기반하지 않는다.",
        author: "엘름 부인(미드나잇 라이브러리)",
    },
    {
        quote: "선택은 할 수 있지만 결과까지 선택할 수는 없다.",
        author: "엘름 부인(미드나잇 라이브러리)",
    },
    {
        quote: "중요한 것은 무엇을 보느냐가 아니라 어떻게 보느냐이다.",
        author: "엘름 부인(미드나잇 라이브러리)",
    },
    {
        quote: "한 곳에 너무 오래 머무르면 세상이 얼마나 넓은지 잊어버린다. 경도와 위도가 얼마나 긴지 무감각해진다. 한 사람의 내면이 얼마나 광활한지 깨닫기 힘든 것과 마찬가지일 거라고 노라는 짐작했다. 하지만 그 광활함을 알아차리고 나면, 무언가로 인해 그 광활암이 드러나면, 당이 원하든 원치 않든 희망이 생기고 그것은 고집스럽게 당신에게 달라붙는다. 이끼가 바위에 달라붙듯이",
        author: "미드나잇 라이브러리",
    },
    {
        quote: "지혜는 뒤얽힌 사실들을 풀어내어 이해하고, 결정적으로 그 사실들을 최대한 활용할 수 있는 방법을 제시한다.",
        author: "소크라테스 익스프레스",
    },
    {
        quote: "중요한 것은 추구하는 행위 그 자체다.",
        author: "소크라테스 익스프레스",
    },
    {
        quote: "철학은 스파보다는 헬스장에 더 가깝다.",
        author: "소크라테스 익스프레스",
    },
    {
        quote: "결국 인생은 우리 모두를 철학자로 만든다.",
        author: "모리스 리즐링(소크라테스 익스프레스)",
    },
    {
        quote: "나는 이불 아래 파뭍힌 채 나를 때려 눕히려고 마음 먹은 적대적인 세상을 떠올린다.",
        author: "마르쿠스 아우렐리우스(소크라테스 익스프레스)",
    },
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = randomQuote.quote
author.innerText = randomQuote.author