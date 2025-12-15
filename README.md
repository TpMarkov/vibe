# Signalist Stock Market

## Project Overview
**Signalist Stock Market** is a comprehensive web application designed for investors, traders, and financial enthusiasts. It provides powerful tools for stock market analysis, real-time signals, and deep market insights.

This platform empowers users to:
- Make informed trading decisions based on data-driven signals.
- Track real-time market trends and asset performance.
- Receive timely alerts to capitalize on investment opportunities.
- Access detailed financial data to improve overall investment outcomes.

## Tech Stack
This project is built with a modern, high-performance technology stack:

- **Framework:** Next.js v15.3.4
- **Language:** TypeScript v5
- **Styling:** Tailwind CSS v4
- **Authentication:** Clerk v6.23.0
- **Database / ORM:** Prisma v6.16.2
- **State Management & Data Fetching:** TanStack Query v5 & tRPC v11.4.2
- **Data Visualization:** Recharts v2.15.4
- **UI Components:** Radix UI Primitives, Lucide React (Icons), Sonner (Toast)
- **Deployment:** Vercel

## Live Demo
Check out the live application here: [https://signalist-stock-market.vercel.app](https://vibe-eta-orpin.vercel.app/)

## Screenshots
Below are snippets of the application in action:

![Homepage Screenshot](./screenshots/homepage.png)
*Homepage Dashboard*

![Analysis View](./screenshots/analysis.png)
*Detailed Stock Analysis*

![Signals Panel](./screenshots/signals.png)
*Real-time Trading Signals*

### How to Add Screenshots
To update these images:
1. Create a folder named `screenshots` in the root of the repository.
2. Upload your images (recommended under 200KB).
3. Update the paths in this README to match your filenames (e.g., `./screenshots/your-image.png`).
4. *Tip:* Keep images around 300px width for optimal mobile viewing on GitHub.

## Getting Started for Developers
Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/signalist-stock-market.git
   cd signalist-stock-market
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the necessary variables (e.g., Database URL, Clerk keys).
   ```bash
   cp .env.example .env
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

5. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.
