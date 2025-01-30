# Frontend Roadmap 🚀

This roadmap is designed to guide you from foundational knowledge about networks, websites, and browsers to mastering everything a senior frontend developer should know. Follow this structured path[...]

## Graphical Representation

```mermaid
graph LR;
  A[1.0 Frontend Roadmap] --> B[2.0 Foundations];
  B --> C[2.1 Understanding Networks];
  C --> D[2.1.1 Basics of HTTP/HTTPS];  %% ضروری
  C --> E[2.1.2 DNS and how websites work];  %% ضروری
  C --> F[2.1.3 REST APIs];  %% خوب است یاد بگیرید
  B --> G[2.2 Web Fundamentals];
  G --> H[2.2.1 How Browsers Work];  %% ضروری
  G --> I[2.2.2 Critical Rendering Path];  %% خوب است یاد بگیرید
  G --> J[2.2.3 DOM, CSSOM, and Event Loop];  %% ضروری
  A --> K[3.0 Core Skills];
  K --> L[3.1 HTML];
  L --> M[3.1.1 Semantic HTML];  %% ضروری
  L --> N[3.1.2 Accessibility];  %% ضروری
  K --> O[3.2 CSS];
  O --> P[3.2.1 Flexbox & Grid];  %% ضروری
  O --> Q[3.2.2 Responsive Design];  %% ضروری
  K --> R[3.3 JavaScript];
  R --> S[3.3.1 ES6+ Features];  %% ضروری
  R --> T[3.3.2 Fetch API and Promises];  %% خوب است یاد بگیرید
  A --> U[4.0 Styling];
  U --> V[4.1 CSS Frameworks];
  V --> W[Choose One CSS Framework];  %% انتخابی
  W --> X[Bootstrap];  %% انتخابی
  W --> Y[Tailwind CSS];  %% انتخابی
  U --> Z[4.2 Component Libraries];
  Z --> AA[Material UI];  %% خوب است یاد بگیرید
  Z --> AB[Ant Design];  %% خوب است یاد بگیرید
  A --> AC[5.0 Frameworks and Libraries];
  AC --> AD[Choose One Framework];  %% انتخابی
  AD --> AE[React.js];  %% ضروری
  AD --> AF[Vue.js];  %% انتخابی
  AD --> AG[Angular];  %% انتخابی
  AE --> AH[Hooks];  %% ضروری
  AE --> AI[Redux];  %% خوب است یاد بگیرید
  AG --> AJ[RxJS];  %% خوب است یاد بگیرید
  A --> AK[6.0 Tools & Workflow];
  AK --> AL[6.1 Version Control];
  AL --> AM[Git];  %% ضروری
  AL --> AN[GitHub];  %% ضروری
  AK --> AO[6.2 Package Managers];
  AO --> AP[npm];  %% ضروری
  AO --> AQ[yarn];  %% خوب است یاد بگیرید
  AK --> AR[6.3 Build Tools];
  AR --> AS[Webpack];  %% ضروری
  AR --> AT[Vite];  %% خوب است یاد بگیرید
  A --> AU[7.0 Advanced Topics];
  AU --> AV[7.1 TypeScript];
  AV --> AW[Interfaces];  %% خوب است یاد بگیرید
  AV --> AX[Generics];  %% خوب است یاد بگیرید
  AU --> AY[7.2 Testing];
  AY --> AZ[Unit Testing];  %% ضروری
  AY --> BA[Integration Testing];  %% خوب است یاد بگیرید
  AU --> BB[7.3 Performance Optimization];
  BB --> BC[Lazy Loading];  %% خوب است یاد بگیرید
  BB --> BD[Lighthouse];  %% خوب است یاد بگیرید
  AU --> BE[7.4 PWA];
  BE --> BF[Service Workers];  %% خوب است یاد بگیرید
  BE --> BG[Web Manifest];  %% خوب است یاد بگیرید
  A --> BH[8.0 Becoming a Senior Frontend Developer];
  BH --> BI[Contribute to Open Source];  %% خوب است یاد بگیرید
  BH --> BJ[Build Complex Applications];  %% ضروری
  BH --> BK[Mentor Juniors];  %% خوب است یاد بگیرید
  BH --> BL[Learn System Design];  %% خوب است یاد بگیرید
  BH --> BM[Stay Updated];  %% ضروری

  %% Styles for categories
  classDef mandatory fill:#ffcccc,stroke:#ff0000,stroke-width:2px,color:#000,font-weight:bold;
  classDef goodToLearn fill:#ccffcc,stroke:#00ff00,stroke-width:2px,color:#000,font-weight:bold;
  classDef optional fill:#ccccff,stroke:#0000ff,stroke-width:2px,color:#000,font-weight:bold;

  %% Assign styles to nodes
  class D,E,H,J,M,N,P,Q,S,AM,AN,AP,AS,AZ,BJ mandatory;
  class F,I,T,AA,AB,AI,AJ,AQ,AT,AW,AX,BA,BC,BD,BF,BG,BI,BK,BL goodToLearn;
  class W,X,Y,AD,AF,AG optional;
