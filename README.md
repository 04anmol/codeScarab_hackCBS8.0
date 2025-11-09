# HOPEr – Mental Health Support Platform

HOPEr is a calming, student-friendly mental health companion. The web experience pairs an empathetic hero moment, an interactive chat surface, guided mood check-ins, and an optional AI-powered support assistant so visitors can move from stress to hope in a few clicks.

---

## 🌟 Overview

- **Hero support card** – a floating chat card with a typewriter prompt, pre-filled message hand-off, and a direct gateway to “HOPEr Support” (a Streamlit RAG assistant).  
- **Guided chat experience** – `/chat` renders a full-screen conversational UI with smart suggestions, animated typing indicators, mock empathetic responses, and automatic dispatch of the hero prompt when present.  
- **“Know Your Mood” quiz** – an 8-question check-in with a promotion card on the homepage and a dedicated results view that can optionally post scores to a backend service.  
- **Smooth navigation** – anchored sections, `ScrollToTop` on route changes, and an updated navbar/chat CTA that respects external support sessions.  
- **Streamlit HOPEr Support** – a LangChain + Pinecone powered assistant (in `Practice Set for Langchain/Hoper`) that the hero CTA and navbar “Chat” links open in a new tab.

---

## 🚀 Getting Started (Web App)

### Prerequisites
- Node.js ≥ 18
- npm (bundled with Node)

### Installation
```bash
git clone <repository-url>
cd hoper_hackcbs8-main
npm install
npm run dev
```

Open the app at **http://localhost:5173**. The development server hot-reloads on save.

### Core Scripts
| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `npm run dev`      | Start Vite dev server                        |
| `npm run build`    | Create a production build in `dist/`         |
| `npm run preview`  | Preview the production build locally         |
| `npm run lint`     | Run ESLint with the configured rules         |

---

## 🧭 Key Configuration

- **Support link** – Both the hero CTA and navbar “Chat” button open the Streamlit assistant defined by `SUPPORT_URL`.  
  - Update the constant in `src/components/Hero.tsx` and `src/components/Navbar.tsx` to point at your deployed assistant.
- **Chat pre-fill** – `Hero.tsx` sends the user’s first message to `/chat` via navigation state. `ChatPage.tsx` consumes it and automatically posts the message once the chat mounts.
- **Routing** – `src/components/ScrollToTop.tsx` is registered in `App.tsx` so every route jump or hash navigation lands at the top of the page.

---

## ✨ Frontend Feature Highlights

- **Right rail hero card** sized to match the content column, with enlarged floating logo, blurred glass aesthetic, and an accessibility-friendly typewriter prompt.
- **Chat UI (`src/components/Chat.tsx`)**  
  - Auto-scroll, typing animation, timestamped bubbles, and curated “Conversation Starters”.  
  - “Back to home” controls that return to the landing page.  
  - Mock empathetic responses with category-based copy and sources for future integration.
- **Navbar (`src/components/Navbar.tsx`)**  
  - Smooth internal scrolling for sections, mobile drawer, and persistent “Get Started” CTA.  
  - “Chat” launches the Streamlit assistant in a new tab.
- **Mood Check Section & Quiz**  
  - `src/components/MoodCheckSection.tsx` invites users into `/mood-check`.  
  - `src/components/mood-quiz/MoodQuiz.tsx` handles question flow, scoring, and results; logic is shared via `src/lib/mood-evaluator.ts`.

---

## 📁 Project Structure

```
.
├── public/                     # Static assets (logos, imagery, video)
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # Landing hero with support card
│   │   ├── Chat.tsx            # Chat panel used by ChatPage
│   │   ├── Navbar.tsx          # Sticky navigation with anchors
│   │   ├── MoodCheckSection.tsx# Home promo for the quiz
│   │   ├── ScrollToTop.tsx     # Route-aware scroll reset
│   │   ├── ui/                 # shadcn-inspired primitive components
│   │   └── …                   # Additional sections (HowItWorks, Services, etc.)
│   ├── pages/
│   │   ├── Index.tsx           # Home composition
│   │   ├── ChatPage.tsx        # Full-screen chat wrapper
│   │   ├── FAQ.tsx, LearnMore.tsx, MoodQuiz.tsx, … 
│   ├── hooks/                  # Reusable hooks (e.g., use-mobile)
│   ├── lib/                    # Utility helpers (e.g., mood evaluator, cn)
│   ├── App.tsx                 # Router + providers
│   └── main.tsx                # Vite entry
├── Practice Set for Langchain/
│   └── Hoper/
│       └── pdfstuff.py         # Streamlit RAG assistant
├── tailwind.config.ts          # Tailwind theme (brand palette, fonts)
├── package.json
└── README.md                   # You are here
```

---

## 🤖 HOPEr Support (Streamlit RAG Assistant)

The Streamlit app in `Practice Set for Langchain/Hoper/pdfstuff.py` powers the external support link. It loads PDFs into Pinecone, retrieves relevant passages, and falls back to a direct OpenAI response when context is thin.

### Running the assistant locally
1. Ensure Python 3.10+ is available.
2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Windows: .venv\Scripts\activate
   pip install streamlit python-dotenv langchain-community langchain-openai \
               langchain-text-splitters langchain-huggingface pinecone-client
   ```
3. Provide credentials in `Practice Set for Langchain/Hoper/.env`:
   ```
   OPENAI_API_KEY=...
   PINECONE_API_KEY=...
   ```
4. Run the assistant:
   ```bash
   streamlit run "Practice Set for Langchain/Hoper/pdfstuff.py"
   ```
5. Update `SUPPORT_URL` in the React app to match the Streamlit URL (default `http://localhost:8504/`).

The sidebar lets you toggle PDF re-indexing and adjust retrieval `k`. The UI displays whether an answer came from RAG or from the fallback model.

---

## 🧪 Testing & Quality

- **Type checking & linting** – Run `npm run lint` to enforce ESLint + TypeScript rules.  
- **Manual QA** – Verify the hero card launches support, the `/chat` route handles the pre-filled prompt, and navigation restores scroll correctly.  
- **Streamlit diagnostics** – While the Streamlit app runs, logs surface embedding progress and fallback usage in the console.

---

## 🤝 Contributing

Issues and pull requests that improve accessibility, empathy, or stability are welcome. Please follow the existing coding conventions (`tsx`, Tailwind utility classes, shadcn patterns) and keep the tone aligned with our mission of warm, stigma-free support.

---

## 📄 License & Support

This project is released under the **MIT License**.  
Questions or ideas? Open an issue or reach out through the HOPEr contact channels.

---

**Remember: your mental health matters. You are not alone.**