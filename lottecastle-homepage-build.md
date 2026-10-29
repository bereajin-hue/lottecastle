# 경기광주역 롯데캐슬 시그니처 2단지 — 분양 홈페이지 빌드 가이드

> 도메인: `lottecastle.aptmh.kr`
> GitHub: `https://github.com/bereajin-hue/lottecastle`
> 플랫폼: Next.js 14 (App Router) + TypeScript + Tailwind CSS
> 배포: Cloudflare Pages
> 컨셉: 풀스크린 이미지 중심, 텍스트 최소화, 프리미엄 다크톤 (detre 동일 스타일)

---

## 📁 프로젝트 파일 구조

```
lottecastle/
├── public/
│   ├── images/
│   │   ├── hero-01.jpg            # 단지 야경 CG (메인 커버)
│   │   ├── hero-02.jpg            # 단지 외관 주간 조망 CG
│   │   ├── hero-03.jpg            # 주출입구 방면 외관 CG
│   │   ├── location.jpg           # 입지 항공 조감도 (경기광주역 중심)
│   │   ├── site-plan.jpg          # 단지 배치도
│   │   ├── park-aerial.jpg        # 쌍령공원 조감도
│   │   ├── community-golf.jpg     # 인도어골프장 내부 CG
│   │   ├── living-view.jpg        # 거실뷰 AI CG (인테리어)
│   │   ├── floor-plan-59a.jpg     # 59A형 평면도
│   │   ├── floor-plan-59bd.jpg    # 59B·59D형 평면도 (동일 페이지)
│   │   ├── floor-plan-84a2.jpg    # 84A2형 평면도
│   │   ├── floor-plan-84ce.jpg    # 84C·84E형 평면도 (동일 페이지)
│   │   └── floor-plan-114a2.jpg   # 114A2형 평면도
│   ├── og-image.jpg               # OG 공유 이미지 1200×630px (hero-01 기반)
│   ├── logo.png                   # 헤더 로고 (롯데캐슬 로고, 투명배경 흰색)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── components/
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   └── sections/
│       ├── BusinessSection.tsx    # 사업개요
│       ├── LocationSection.tsx    # 입지안내
│       ├── ComplexSection.tsx     # 단지소개 (커뮤니티 + 쌍령공원)
│       ├── ProductSection.tsx     # 평형안내 (평면도 카드)
│       └── ContactSection.tsx     # 방문예약
├── data/
│   └── site-config.ts             # ★ 재사용 핵심 — 여기만 교체하면 됨
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 📸 이미지 목록 (총 13장 — PDF에서 캡처 필요)

| 파일명 | PDF 페이지 | 내용 | 저장경로 |
|--------|-----------|------|----------|
| hero-01.jpg | **P.1** (커버) | 단지 야경 CG (메인 배너 1번) | public/images/ |
| hero-02.jpg | **P.7** (상단 첫 번째) | 단지 외관 주간 조망 CG (배너 2번) | public/images/ |
| hero-03.jpg | **P.29** | 주출입구 방면 외관 CG (배너 3번) | public/images/ |
| location.jpg | **P.2** | 입지 항공 조감도 — 경기광주역 중심 광역뷰 | public/images/ |
| site-plan.jpg | **P.6** | 단지 배치도 | public/images/ |
| park-aerial.jpg | **P.22** | 쌍령공원 51만㎡ 전경 조감도 | public/images/ |
| community-golf.jpg | **P.16** | 인도어골프연습장 내부 CG | public/images/ |
| living-view.jpg | **P.27** | 거실뷰 AI CG (인테리어 이미지) | public/images/ |
| floor-plan-59a.jpg | **P.8** | 59A형 평면도 (전용 59㎡, 판상형) | public/images/ |
| floor-plan-59bd.jpg | **P.9** | 59B·59D형 평면도 (타워형, 같은 페이지) | public/images/ |
| floor-plan-84a2.jpg | **P.10** | 84A2형 평면도 (주력 타입, 판상형) | public/images/ |
| floor-plan-84ce.jpg | **P.11** | 84C·84E형 평면도 (타워형, 같은 페이지) | public/images/ |
| floor-plan-114a2.jpg | **P.12** | 114A2형 평면도 (대형, 판상형) | public/images/ |

> `og-image.jpg` (1200×630px) — hero-01.jpg 기반으로 별도 제작
> `logo.png` — 롯데캐슬 로고 투명배경 흰색 버전 (클라이언트 제공 or 제작)

---

## ⚙️ `data/site-config.ts` — 재사용 설정 파일

```typescript
export const siteConfig = {

  // ─── SEO ──────────────────────────────────────────────
  meta: {
    title: "경기광주역 롯데캐슬 시그니처 2단지 | 공식 분양 홈페이지",
    description:
      "쌍령공원 단 한걸음, 수서역 단 두정거장. 경기광주역 롯데캐슬 시그니처 2단지 — 총 1,249세대, 59·84·114㎡, 롯데건설 시공. 비규제지역 계약금 5%, 중도금 60% 이자후불제. 공식 분양 홈페이지.",
    keywords:
      "경기광주역 롯데캐슬 시그니처, 롯데캐슬 시그니처 2단지, 광주 롯데캐슬 분양, 경기광주 아파트 분양, 쌍령동 롯데캐슬, 광주 시그니처 아파트, 수광선 광주, 경강선 아파트 분양",
    canonical: "https://lottecastle.aptmh.kr",
    ogImage: "/og-image.jpg",
    naverVerification: "",   // 서치어드바이저 등록 후 입력
    googleVerification: "",  // 서치콘솔 등록 후 입력
  },

  // ─── 헤더 ──────────────────────────────────────────────
  header: {
    logo: "/logo.png",
    projectName: "롯데캐슬 시그니처",
    phone: "1599-1877",
    gnb: ["사업개요", "입지안내", "단지소개", "평형안내", "방문예약"],
  },

  // ─── 히어로 배너 ────────────────────────────────────────
  hero: {
    slides: [
      {
        image: "/images/hero-01.jpg",
        alt: "경기광주역 롯데캐슬 시그니처 2단지 야경 CG",
        title: "경기광주역 롯데캐슬 시그니처 2단지",
        subtitle: "쌍령공원 단 한걸음, 수서역 단 두정거장",
      },
      {
        image: "/images/hero-02.jpg",
        alt: "경기광주역 롯데캐슬 시그니처 2단지 외관 CG",
        title: "The Signature of Gwangju",
        subtitle: "경기광주 교통요충지 · 51만㎡ 쌍령공원 품은 프리미엄 랜드마크",
      },
      {
        image: "/images/hero-03.jpg",
        alt: "경기광주역 롯데캐슬 시그니처 2단지 주출입구 외관",
        title: "더 특별해진 2단지만의 SPECIAL SERVICE 5",
        subtitle: "인도어 골프장 · 그린램프 라이브러리 · 롯데리조트 회원권 · 셔틀버스 · L다이닝",
      },
    ],
  },

  // ─── 사업개요 ───────────────────────────────────────────
  business: {
    overview: {
      사업명: "경기광주역 롯데캐슬 시그니처 2단지",
      위치: "경기도 광주시 쌍령동 산54-29번지",
      규모: "지하10층~최고26층, APT 10개동, 총 1,249세대",
      대지면적: "54,804.26㎡ (약 16,578평)",
      연면적: "225,328.79㎡ (약 68,162평)",
      주차: "총 1,803대 (세대당 1.43대, 확장형 40.8%)",
      시행사: "롯데건설",
      시공사: "롯데건설",
      비고: "비규제지역 · 계약금 5% · 중도금 60% 이자후불제",
    },
    sellingPoints: [
      {
        icon: "🚇",
        title: "경기광주 교통 요충지",
        desc: "경강선 판교·강남 방면 직결 (현재) · 수광선 수서역 2정거장 10분대 (2031 개통 예정) · GTX-D 삼성역 직결 급행 (예정)",
      },
      {
        icon: "🌳",
        title: "51만㎡ 쌍령공원 초근접",
        desc: "세계적 건축가 리차드 마이어 참여 — 꿈자람센터(CDC) · 동심생태과학관(CEM) · 산림 힐링라이프",
      },
      {
        icon: "⛳",
        title: "경기광주 유일 인도어 골프장",
        desc: "광주 최초 단지 내 실내 스크린골프 + 실제 퍼팅그린 + 인도어 골프연습장 3종 완비",
      },
      {
        icon: "📚",
        title: "그린램프 라이브러리",
        desc: "26년도 SKY 의치한 415건, 인서울 TOP10 1,017건 배출 — 대치동 명문 관리형 독서실 단지 내 입점",
      },
      {
        icon: "🏝️",
        title: "롯데리조트 울산 특별회원가",
        desc: "아시아 최초 믹스트림 리버 등의 컨셉 '롯데리조트 울산' 특별회원가 혜택 제공 (2027 오픈 예정)",
      },
    ],
  },

  // ─── 입지안내 ───────────────────────────────────────────
  location: {
    image: "/images/location.jpg",
    alt: "경기광주역 롯데캐슬 시그니처 2단지 광역 입지 항공 조감도 경기광주역",
    points: [
      { icon: "🚇", text: "경강선 경기광주역 직결 — 판교·강남 방면 소요 시간 단축" },
      { icon: "🚄", text: "수광선 개통 예정(2031년) — 경기광주역↔수서역 2정거장 10분대" },
      { icon: "🚅", text: "GTX-D 예정 — 삼성역 직결 급행 철도 혜택 (경기광주 연장 계획)" },
      { icon: "🚌", text: "입주민 전용 셔틀버스 운영 예정 — 경기광주역 도보이용 불가, 셔틀로 단점 극복" },
    ],
  },

  // ─── 단지소개 ───────────────────────────────────────────
  complex: {
    sitePlan: {
      image: "/images/site-plan.jpg",
      alt: "경기광주역 롯데캐슬 시그니처 2단지 배치도 10개동 1,249세대",
    },
    golf: {
      image: "/images/community-golf.jpg",
      alt: "경기광주역 롯데캐슬 시그니처 2단지 인도어골프연습장 CG — 광주 최초 실내 골프장",
    },
    park: {
      image: "/images/park-aerial.jpg",
      alt: "쌍령공원 51만㎡ 전경 조감도 — 꿈자람센터 동심생태과학관",
    },
    interior: {
      image: "/images/living-view.jpg",
      alt: "경기광주역 롯데캐슬 시그니처 2단지 거실 인테리어 AI CG",
    },
    // 층별 커뮤니티 시설
    facilities: {
      "B2F": ["다이닝라운지 (L다이닝)", "그린램프 라이브러리", "북카페"],
      "B3F": ["인도어골프연습장", "퍼팅그린", "스크린골프", "사우나·스팀", "피트니스센터", "GX룸", "멀티룸"],
      "B6F": ["게스트하우스"],
      "B7F": ["키즈플레이라운지", "맘스카페", "테라스", "다함께돌봄센터"],
    },
    // 2단지만의 5가지 스페셜 서비스
    specialServices: [
      {
        title: "입주민 전용 셔틀버스",
        desc: "경기광주역까지 편리한 출퇴근이 이동을 지원하는 입주민 전용 셔틀버스 운영 (예정)",
      },
      {
        title: "L 다이닝 서비스",
        desc: "입주민의 편리한 식생활을 위해 전문 식음업체의 체계적 운영으로 제공되는 중석식 다이닝 서비스",
      },
      {
        title: "단지 내 인도어 골프장",
        desc: "실내 스크린 골프는 물론, 실제 틴도우와 구질까지 확인되는 광주 최초 단지 내 실내 인도어 골프장",
      },
      {
        title: "대치동 명문 그린램프 라이브러리",
        desc: "26년도 SKY·의치한 415건, 인서울 TOP10 1,017건 배출한 대치동 명문 관리형 독서실 단지 내 입점",
      },
      {
        title: "롯데리조트 울산 특별회원가",
        desc: "아시아 최초 믹스트림 리버 등의 컨셉이 계획된 '롯데리조트 울산' 특별회원가 혜택 제공 (2027 오픈 예정)",
      },
    ],
  },

  // ─── 평형안내 ───────────────────────────────────────────
  product: {
    units: [
      {
        type: "59A형",
        badge: "59A",
        color: "#2E5FA3",          // 블루
        count: "144세대",
        pyeong: "24.0평",
        shape: "판상형",
        planImage: "/images/floor-plan-59a.jpg",
        planAlt: "경기광주역 롯데캐슬 시그니처 2단지 59A형 평면도 전용 59㎡ 판상형",
      },
      {
        type: "59B·D형",
        badge: "59B/D",
        color: "#1A7C4F",          // 그린
        count: "121세대 (B:99 · D:22)",
        pyeong: "24.1~24.2평",
        shape: "타워형",
        planImage: "/images/floor-plan-59bd.jpg",
        planAlt: "경기광주역 롯데캐슬 시그니처 2단지 59B 59D형 평면도 타워형",
      },
      {
        type: "84A2형",
        badge: "84A2",
        color: "#C0385A",          // 레드 (주력 타입)
        count: "423세대",
        pyeong: "33.4평",
        shape: "판상형",
        planImage: "/images/floor-plan-84a2.jpg",
        planAlt: "경기광주역 롯데캐슬 시그니처 2단지 84A2형 평면도 전용 84㎡ 판상형 주력타입",
      },
      {
        type: "84C·E형",
        badge: "84C/E",
        color: "#D4682A",          // 오렌지
        count: "420세대 (C:194 · E:226)",
        pyeong: "33.9평",
        shape: "타워형",
        planImage: "/images/floor-plan-84ce.jpg",
        planAlt: "경기광주역 롯데캐슬 시그니처 2단지 84C 84E형 평면도 타워형",
      },
      {
        type: "114A2형",
        badge: "114A2",
        color: "#6B21A8",          // 퍼플 (프리미엄 대형)
        count: "127세대",
        pyeong: "44.9평",
        shape: "판상형",
        planImage: "/images/floor-plan-114a2.jpg",
        planAlt: "경기광주역 롯데캐슬 시그니처 2단지 114A2형 평면도 전용 114㎡ 판상형 대형",
      },
    ],
  },

  // ─── 방문예약 ───────────────────────────────────────────
  contact: {
    phone: "1599-1877",
    telLink: "tel:15991877",
    label: "분양 문의 · 방문 예약",
    formspreeEndpoint: "https://formspree.io/f/XXXXXXXX",  // Formspree 설정 후 교체
  },
};
```

---

## 🗂️ 섹션별 콘텐츠 & SEO 구성

### 공통 SEO 메타데이터

```
title:        "경기광주역 롯데캐슬 시그니처 2단지 | 공식 분양 홈페이지"
description:  "쌍령공원 단 한걸음, 수서역 단 두정거장. 총 1,249세대, 롯데건설 시공."
H1 (1개):    "경기광주역 롯데캐슬 시그니처 2단지"  ← Hero 섹션
H2:           사업개요 / 입지안내 / 단지소개 / 평형안내 / 방문예약
JSON-LD:      schema.org/Residence (아파트)
canonical:    https://lottecastle.aptmh.kr
```

---

### 🎠 Hero 배너 (id 없음, 최상단)

- 3장 풀스크린 슬라이드 (5초 fade)
- 반투명 다크 오버레이 `rgba(0,0,0,0.45)`
- 중앙 텍스트: H1 타이틀(흰색 굵게) + 서브타이틀(흰색)
- 우하단 슬라이드 인디케이터 도트
- 하단 고정 CTA: `📞 1599-1877 상담 문의` → #contact 앵커

---

### 📋 사업개요 (id="business")

- 배경: `#0D1B2A` (다크 네이비)
- 텍스트: 흰색
- H2: "사업개요" (골드 `#E8B84B`)
- **레이아웃**: 좌측 사업개요 테이블 / 우측 셀링포인트 5개 카드
  - 테이블: 항목(골드) / 내용(흰색), border-bottom 구분선
  - 셀링포인트 카드: 아이콘 + 제목(골드) + 설명(회색 80자)

---

### 📍 입지안내 (id="location")

- 배경: `#111827`
- H2: "입지안내" (흰색)
- **상단**: `location.jpg` 풀너비 (max-h-600px, object-cover)
- **중단**: 입지 포인트 4개 가로 배열 (아이콘 + 텍스트)
- **하단**: 없음 (YouTube 영상 없음 — 입지 이미지만으로 구성)

---

### 🏙️ 단지소개 (id="complex")

**구현 순서 (위→아래):**

```
[ 1 ] 단지 배치도 (배경 #111827)
      site-plan.jpg 풀너비, max-h-700px object-cover
      하단: 10개동 · 총 1,249세대 · 지하10층~최고26층

[ 2 ] 커뮤니티 시설 층별 안내 (배경 #0D1B2A)
      H3: "단지 내 커뮤니티" (골드)
      층별 리스트 가로 4열 (B2F / B3F / B6F / B7F):
      ┌────────────────────────────────────────────────────┐
      │ B2F  │ 다이닝라운지 · 그린램프라이브러리 · 북카페   │
      │ B3F  │ 인도어골프 · 퍼팅그린 · 스크린골프          │
      │      │ 사우나 · 피트니스 · GX룸 · 멀티룸           │
      │ B6F  │ 게스트하우스                                │
      │ B7F  │ 키즈플레이라운지 · 맘스카페 · 돌봄센터       │
      └────────────────────────────────────────────────────┘

[ 3 ] 인도어 골프장 CG (배경 #111827)
      community-golf.jpg 풀너비, max-h-600px
      상단 레이블: "경기광주 유일 · 단지 내 실내 인도어 골프장"

[ 4 ] 2단지만의 스페셜 서비스 5 (배경 #0D1B2A)
      H3: "더 특별해진 2단지만의 SPECIAL SERVICE 5" (골드)
      grid-cols-5 → 모바일 grid-cols-1
      각 카드:
      ┌──────────────────────────────┐
      │  01 / 입주민 전용 셔틀버스    │
      │  아이콘                       │
      │  설명 텍스트 (회색, 작게)     │
      └──────────────────────────────┘

[ 5 ] 쌍령공원 (배경 짙은 그린 #1A3A2F 또는 #111827)
      H3: "51만㎡ 쌍령공원 — 단 한걸음" (흰색)
      park-aerial.jpg 풀너비, max-h-600px
      하단: "세계적 건축가 리차드 마이어 참여 · 꿈자람센터(CDC) · 동심생태과학관(CEM)"
```

---

### 📐 평형안내 (id="product")

- 배경: 흰색 (`#FFFFFF`)
- H2: "평형안내" (다크 `#0D1B2A`)
- H3: "경기광주역 롯데캐슬 시그니처 2단지 평면도"

**평형 카드 5개 (grid-cols-3 → grid-cols-2 → grid-cols-1):**

```
┌─ 상단 컬러바 (뱃지 컬러) ──────────┐
│  [뱃지] 84A2          423세대      │
│  판상형 · 33.4평                   │
├───────────────────────────────────┤
│  [floor-plan-84a2.jpg 평면도 이미지]│
│  object-contain, bg-gray-50       │
└───────────────────────────────────┘
```

뱃지 컬러:
- 59A: `#2E5FA3` (블루)
- 59B/D: `#1A7C4F` (그린)
- 84A2: `#C0385A` (레드) — 주력 타입 강조
- 84C/E: `#D4682A` (오렌지)
- 114A2: `#6B21A8` (퍼플)

---

### 📞 방문예약 (id="contact")

- 배경: `#0D1B2A`
- H2: "방문예약" (흰색)
- **레이아웃**: 좌측 전화 / 우측 방문예약 폼

**전화 영역:**
```
📞 1599-1877
[전화 상담 바로하기]  ← tel: 링크, 모바일 터치 시 바로 전화
골드(#E8B84B) 버튼, 패딩 넉넉하게
```

**방문예약 폼 (Formspree):**
```html
<form action="https://formspree.io/f/XXXXXXXX" method="POST">
  <input name="name" placeholder="성함" required />
  <input name="phone" placeholder="연락처" required />
  <select name="unit_type">
    <option>59A형 (24.0평)</option>
    <option>59B·D형 (24.1~24.2평)</option>
    <option>84A2형 (33.4평) — 주력</option>
    <option>84C·E형 (33.9평)</option>
    <option>114A2형 (44.9평)</option>
  </select>
  <input name="visit_date" type="date" />
  <button type="submit">방문 예약 신청</button>
</form>
```

---

## 🤖 Claude Code 명령 프롬프트

> 아래를 Claude Code 터미널에 붙여넣으세요.

```
GitHub 레포 https://github.com/bereajin-hue/lottecastle 를 클론하고,
아래 사양으로 부동산 분양 원페이지 Next.js 홈페이지를 빌드해줘.

## 기본 정보
- 프레임워크: Next.js 14 App Router + TypeScript
- 스타일: Tailwind CSS
- 배포: Cloudflare Pages (output: 'export', images.unoptimized: true)
- 도메인: lottecastle.aptmh.kr
- GitHub: https://github.com/bereajin-hue/lottecastle
- 벤치마킹: https://detre.aptmh.kr (동일 스타일 — 프리미엄 다크톤)

## 파일 구조
아래 구조 그대로 생성:
lottecastle/
├── public/images/ (폴더 생성만, 이미지는 직접 배치 예정)
├── public/robots.txt
├── public/sitemap.xml
├── public/og-image.jpg (placeholder)
├── src/app/layout.tsx
├── src/app/page.tsx
├── src/app/globals.css
├── components/Header.tsx
├── components/HeroBanner.tsx
├── components/sections/BusinessSection.tsx
├── components/sections/LocationSection.tsx
├── components/sections/ComplexSection.tsx
├── components/sections/ProductSection.tsx
├── components/sections/ContactSection.tsx
└── data/site-config.ts  ← 아래 내용 그대로 사용

## data/site-config.ts 내용
[위 site-config.ts 전체 내용 붙여넣기]

## SEO 필수 구현
layout.tsx에 다음 메타태그 모두 삽입:
- title, description, keywords
- og:title, og:description, og:image, og:url, og:type
- twitter:card, twitter:title, twitter:image
- naver-site-verification: "" (빈값)
- google-site-verification: "" (빈값)
- canonical: https://lottecastle.aptmh.kr
- JSON-LD 구조화 데이터 (schema.org/Residence — 아파트 스키마):
  {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": "경기광주역 롯데캐슬 시그니처 2단지",
    "description": "경기도 광주시 쌍령동 위치, 롯데건설 시공, 총 1,249세대 아파트",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "쌍령동 산54-29번지",
      "addressLocality": "광주시",
      "addressRegion": "경기도",
      "addressCountry": "KR"
    },
    "telephone": "1599-1877",
    "url": "https://lottecastle.aptmh.kr"
  }
- 모든 img에 alt 속성 (한글 키워드 포함)
- H1 전체 페이지 1개만 (Hero 타이틀)
- 각 섹션 H2, 서브는 H3

## 컴포넌트 구현 사양

### Header.tsx
- sticky top-0, z-50, 초기 투명 → 스크롤 시 배경 다크(#0D1B2A) + 그림자
- 좌측: logo.png + "롯데캐슬 시그니처" 텍스트 (흰색)
- 우측 GNB: 사업개요 | 입지안내 | 단지소개 | 평형안내 | 방문예약 (흰색, smooth scroll)
- 모바일: 햄버거 메뉴

### HeroBanner.tsx
- 3장 풀스크린 이미지 슬라이드 (vh-screen, 5초 fade)
- 이미지 위 반투명 다크 오버레이 (rgba(0,0,0,0.45))
- 중앙 텍스트: H1 타이틀(흰색 굵게) + 서브타이틀(흰색)
- 우하단 인디케이터 도트
- 하단 고정 CTA 버튼: "📞 1599-1877 상담 문의" → #contact 앵커
- 이미지 없으면 placeholder bg-gray-800 처리

### BusinessSection.tsx (id="business")
- 배경: #0D1B2A (다크 네이비)
- 텍스트: 흰색
- H2: "사업개요" (골드 #E8B84B 색상)
- 레이아웃 (데스크탑 2열): 좌측 사업개요 테이블 / 우측 셀링포인트 5개 카드
- 테이블: 항목(골드) / 내용(흰색), border-bottom 구분선
- 셀링포인트 카드: 아이콘 + 제목(골드) + 설명(회색)
- 모바일: 1열 세로 배치

### LocationSection.tsx (id="location")
- 배경: #111827
- H2: "입지안내" (흰색)
- 상단: location.jpg 풀너비 이미지 (max-h-[600px], object-cover)
- 하단: 입지 포인트 4개 가로 배열 (아이콘 + 텍스트, 흰색)
  - 🚇 경강선 경기광주역 직결 — 판교·강남 방면 소요 시간 단축
  - 🚄 수광선 개통 예정(2031년) — 경기광주역↔수서역 2정거장 10분대
  - 🚅 GTX-D 예정 — 삼성역 직결 급행 철도 혜택 (경기광주 연장 계획)
  - 🚌 입주민 전용 셔틀버스 운영 예정 — 경기광주역 도보이용 불가, 셔틀로 단점 극복

### ComplexSection.tsx (id="complex")
배경: 교대로 #111827 / #0D1B2A
H2: "단지소개" (흰색)

1. 배치도 블록 (배경 #111827)
   - site-plan.jpg 풀너비, max-h-[700px] object-cover
   - 하단 텍스트: "APT 10개동 · 총 1,249세대 · 지하10층~최고26층"

2. 커뮤니티 시설 층별 안내 (배경 #0D1B2A)
   - H3: "단지 내 커뮤니티 시설" (골드)
   - 4개 층별 블록 (grid-cols-4 → 모바일 grid-cols-2):
     각 블록: 층 레이블(골드 큰 텍스트) + 시설 목록(흰색 태그)
   - 시설 태그: border border-gold rounded-full px-3 py-1 텍스트 흰색

3. 인도어 골프장 (배경 #111827)
   - community-golf.jpg 풀너비, max-h-[600px] object-cover
   - 이미지 위 텍스트 오버레이:
     H3: "경기광주 유일 · 단지 내 실내 인도어 골프장" (흰색)
     서브: "실내 스크린골프 + 실제 퍼팅그린 + 인도어 골프연습장 3종 완비" (회색)

4. 스페셜 서비스 5 (배경 #0D1B2A)
   - H3: "더 특별해진 2단지만의 SPECIAL SERVICE 5" (골드)
   - grid-cols-5 (태블릿 grid-cols-3, 모바일 grid-cols-1)
   - 각 카드: 번호(01~05 골드) + 서비스명(흰색 굵게) + 설명(회색)
   - 카드 border border-gray-700, 패딩 넉넉하게

5. 쌍령공원 (배경 #111827)
   - park-aerial.jpg 풀너비, max-h-[600px] object-cover
   - 이미지 위 하단 텍스트:
     H3: "51만㎡ 쌍령공원 — 단 한걸음" (흰색)
     서브: "세계적 건축가 리차드 마이어 참여 · 꿈자람센터(CDC) · 동심생태과학관(CEM)"

### ProductSection.tsx (id="product")
- 배경: 흰색 (#FFFFFF)
- H2: "평형안내" (다크 #0D1B2A)
- H3: "경기광주역 롯데캐슬 시그니처 2단지 평면도"

평형 카드 5개 (grid-cols-3 → grid-cols-2 → grid-cols-1):
```
┌─ 상단 컬러바 (뱃지 컬러, h-2) ─────────┐
│  [컬러 뱃지] 84A2        423세대       │
│  판상형 · 33.4평                       │
├──────────────────────────────────────┤
│  [floor-plan-84a2.jpg 평면도 이미지]   │
│  aspect-ratio: 4/3, object-contain    │
│  bg-gray-50                           │
└──────────────────────────────────────┘
```

카드: border, shadow-md, rounded-xl, overflow-hidden
이미지 없으면 bg-gray-100 placeholder
뱃지 컬러:
  59A: bg-[#2E5FA3]   59B/D: bg-[#1A7C4F]
  84A2: bg-[#C0385A]  84C/E: bg-[#D4682A]  114A2: bg-[#6B21A8]

### ContactSection.tsx (id="contact")
- 배경: #0D1B2A
- H2: "방문예약" (흰색)
- 데스크탑 2열: 좌측 전화 영역 / 우측 방문예약 폼

좌측 전화:
  안내 문구: "지금 바로 전화 상담하세요" (회색)
  <a href="tel:15991877">
    📞 1599-1877 전화 상담 바로하기
  배경 골드(#E8B84B), 텍스트 다크(#0D1B2A), 패딩 충분히, 그림자

우측 방문예약 폼 (Formspree):
  폼 필드: 성함 / 연락처 / 희망 평형(select) / 방문 희망일(date)
  제출 버튼: "방문 예약 신청" (골드 배경, 다크 텍스트)
  인풋 스타일: bg-gray-800, 텍스트 흰색, border-gray-600
  Formspree action: site-config.contact.formspreeEndpoint 값 사용

## 디자인 가이드
- 컬러: 다크 네이비(#0D1B2A) + 골드(#E8B84B) + 흰색
- 폰트: Noto Sans KR (Google Fonts)
- 이미지: Next.js Image 컴포넌트 (width/height 명시, sizes 속성 포함)
- 섹션 패딩: py-20 (모바일 py-12)
- 전체 분위기: 프리미엄 다크, 텍스트 최소화, 이미지 극대화
- 모바일 퍼스트 반응형

## robots.txt
User-agent: *
Allow: /
Sitemap: https://lottecastle.aptmh.kr/sitemap.xml

## sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lottecastle.aptmh.kr/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>

## next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
module.exports = nextConfig

## 완료 후
npm run build 성공 확인 후
git add . && git commit -m "feat: 경기광주역 롯데캐슬 시그니처 2단지 초기 구축" && git push
```

---

## 🚀 Cloudflare Pages 배포 설정

```
Build command:    npm run build
Build output:     out
Root directory:   (비워두기)
Environment:
  NODE_VERSION = 18
```

**커스텀 도메인 연결:**
```
Cloudflare → Workers & Pages → lottecastle 선택
→ Custom domains → lottecastle.aptmh.kr 추가
→ Cloudflare DNS 자동 설정 확인
```

---

## 📋 론칭 체크리스트

- [ ] `public/images/` 에 이미지 13장 배치 및 파일명 확인
  - PDF P.1  커버 야경       → hero-01.jpg
  - PDF P.7  외관 주간 첫째  → hero-02.jpg
  - PDF P.29 주출입구 외관   → hero-03.jpg
  - PDF P.2  입지 항공뷰     → location.jpg
  - PDF P.6  단지 배치도     → site-plan.jpg
  - PDF P.22 쌍령공원 조감도 → park-aerial.jpg
  - PDF P.16 인도어 골프장   → community-golf.jpg
  - PDF P.27 거실뷰 AI CG   → living-view.jpg
  - PDF P.8  59A형 평면도    → floor-plan-59a.jpg
  - PDF P.9  59B·D형 평면도  → floor-plan-59bd.jpg
  - PDF P.10 84A2형 평면도   → floor-plan-84a2.jpg
  - PDF P.11 84C·E형 평면도  → floor-plan-84ce.jpg
  - PDF P.12 114A2형 평면도  → floor-plan-114a2.jpg
- [ ] `public/og-image.jpg` 제작 (1200×630px — hero-01 기반)
- [ ] `public/logo.png` 제작 (투명배경, 흰색 롯데캐슬 로고)
- [ ] Formspree 계정 생성 → endpoint URL → `site-config.contact.formspreeEndpoint` 교체
- [ ] `npm run build` 로컬 확인
- [ ] GitHub push 완료
- [ ] Cloudflare Pages 자동 배포 확인
- [ ] lottecastle.aptmh.kr 도메인 연결 확인
- [ ] 구글 서치콘솔 등록 → `googleVerification` 입력
- [ ] 네이버 서치어드바이저 등록 → `naverVerification` 입력
- [ ] 모바일 반응형 검수 (iPhone SE 기준)
- [ ] 전화 버튼 모바일 터치 테스트
- [ ] 방문예약 폼 제출 테스트 (Formspree 수신 확인)
