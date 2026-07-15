# 대전하나시티즌 팬 웹사이트 (학습용 · 비공식)

학교 활동/포트폴리오용으로 제작한 **비공식 팬 웹사이트**입니다.
순수 HTML/CSS/JavaScript로만 만들어져 별도 설치 없이 브라우저에서 바로 열립니다.

> ⚠️ 이 사이트는 실제 대전하나시티즌 공식 사이트가 아니며, 구단과 무관합니다.
> 선수·일정·기사 등의 내용은 예시(placeholder)로 구성되어 있습니다.

## 실행 방법

`index.html` 파일을 더블클릭해서 브라우저로 열면 됩니다. (인터넷 연결 불필요)

## 페이지 구성

| 파일 | 내용 |
|------|------|
| `index.html` | 홈 — 히어로, 구단 요약, 다음 경기, 최신 뉴스 |
| `about.html` | 구단 소개 · 히스토리 · 홈구장(퍼플 아레나) |
| `squad.html` | 선수단 스쿼드 (포지션 필터 기능) |
| `fixtures.html` | 경기 일정 · 결과 · 리그 순위 |
| `news.html` | 뉴스 카드 · 포토 갤러리 |

## 폴더 구조

```
daejeon-hana-citizen/
├── index.html
├── about.html
├── squad.html
├── fixtures.html
├── news.html
├── css/
│   └── style.css      # 전체 공통 스타일 (퍼플 테마)
├── js/
│   └── main.js        # 모바일 메뉴 · 선수 포지션 필터
└── README.md
```

## 주요 특징

- 💜 구단 상징색인 **퍼플 테마** 디자인
- 📱 모바일/태블릿/PC 반응형 레이아웃
- ⚡ 선수단 포지션 필터, 모바일 햄버거 메뉴 (JavaScript)
- 🖼️ 외부 이미지 없이 CSS/SVG placeholder로 자체 완결 (오프라인 동작)

## 내용 수정 방법

- **선수 추가/변경**: `squad.html`의 `.player` 블록을 복사·수정 (`data-pos`에 GK/DF/MF/FW 지정)
- **경기 결과 변경**: `fixtures.html`의 `<table class="fixtures">` 안의 `<tr>` 행 수정
- **뉴스 추가**: `news.html`의 `.news-card` 블록 복사·수정
- **색상 변경**: `css/style.css` 맨 위 `:root` 변수(`--purple-700` 등) 수정
- **실제 로고/사진 넣기**: `img/` 폴더를 만들고 `<img src="img/파일명.jpg">`로 교체

즐겁게 커스터마이즈하세요! 💜
