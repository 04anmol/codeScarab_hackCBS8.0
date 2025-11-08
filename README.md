# HOPEr - Mental Health Support Platform

A modern, responsive website dedicated to mental health awareness and support. HOPEr provides resources, community connections, and professional guidance for those seeking mental wellness support.

## 🌐 Live Demo

Visit the live website: [https://hoper-v2.vercel.app/](https://hoper-v2.vercel.app/)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Modern Typography** - Clean, readable fonts (Lustria + Lato)
- **Custom Color Palette** - Carefully selected colors for mental health awareness
- **Accessible Navigation** - Easy-to-use navigation with mobile support
- **Community Focus** - Resources and support for mental wellness
- **Professional Layout** - Clean, trustworthy design
- **Know Your Mood Quiz** - Interactive check-in with animated results and backend persistence

## 🎨 Design System

### Colors
- **Golden Yellow** (#F4B731) - Positivity and hope
- **Deep Purple** (#6C4AB6) - Wisdom and calm
- **Soft Lavender** (#C6B9E0) - Gentle and soothing
- **Mint Green** (#BCEAD5) - Peaceful and refreshing
- **Sky Blue** (#A8D8EA) - Serenity and openness
- **Off White** (#F9F9F9) - Clean backgrounds
- **Warm Gray** (#E0E0E0) - Subtle elements
- **Charcoal Gray** (#333333) - Text and contrast

### Typography
- **Headings**: Lustria (elegant serif)
- **Body Text**: Lato (clean sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Hoper-v2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Mission.tsx     # Mission section
│   ├── Services.tsx    # Services section
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── components/mood-quiz/   # Mood quiz widgets
└── main.tsx           # Application entry point

## 🧠 Mood Quiz Feature

The **Know Your Mood** flow adds a supportive self-check experience:

- New homepage section inviting users to take the quiz
- Dedicated `/mood-check` page with accessible multi-step questionnaire
- Animated SVG faces representing mood outcomes
- Optional save-to-backend call (`POST /api/mood/evaluate`)

### Frontend components

- `src/components/mood-quiz/MoodQuiz.tsx` – main composite component (QuestionCard, ProgressBar, ResultFace)
- `src/components/MoodCheckSection.tsx` – promotional card embedded after the hero on the homepage
- `src/lib/mood-evaluator.ts` – shared questions and scoring helpers

### Backend service (optional but recommended)

A lightweight Express + MongoDB service lives in `/backend`:

```
backend/
├── package.json
├── src/
│   ├── server.ts                # Express bootstrap
│   ├── routes/mood.ts           # /api/mood/evaluate endpoint
│   ├── controllers/moodController.ts
│   ├── models/MoodEntry.ts      # Mongoose schema
│   ├── utils/evaluateScore.ts   # Shared scoring logic
│   └── __tests__/evaluateScore.test.ts
└── README.md
```

#### Running the mood service

```bash
cd backend
npm install
npm run dev
```

Environment variables:

- `PORT` (default `4000`)
- `MONGO_URI` – MongoDB connection string (required for persistence)
- `CLIENT_ORIGIN` – Allowed CORS origin (defaults to `*`)

#### API contract

- **Request** `POST /api/mood/evaluate`

  ```json
  {
    "answers": [0,1,2,0,1,2,0,1],
    "meta": { "userId": "optional-user-id", "storeResult": true }
  }
  ```

- **Response**

  ```json
  {
    "score": 9,
    "moodKey": "slightly-stressed",
    "moodLabel": "Slightly Stressed",
    "explanation": "You might be carrying some tension. A gentle reset can help you feel lighter.",
    "faceType": "slightly-stressed",
    "tips": [
      "Take 5 deep breaths and write down one worry to revisit later.",
      "Listen to a short calming playlist or guided breathing."
    ]
  }
  ```

> Note: Set `meta.storeResult` to `false` to skip saving the entry.

### Testing the scoring logic

```bash
cd backend
npm test
```

Three Jest tests verify the threshold mapping for calm, slightly stressed, and high distress categories.
```

## 🎯 Mission

HOPEr is committed to breaking the stigma around mental health and providing accessible resources for mental wellness. Our platform offers:

- Peer support connections
- Educational resources
- Crisis support
- Community events and workshops

## 🤝 Contributing

We welcome contributions to improve HOPEr. Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact us through the website or create an issue in this repository.

---

**Remember: Your mental health matters. You are not alone.**