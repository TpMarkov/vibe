
# Vibe Coding Assistant

Welcome to **Vibe Coding Assistant**, a powerful and intuitive platform designed to empower users to build applications and websites simply by chatting with AI.

Check out the live application here: [Vibe Coding Assistant](https://vibe-eta-orpin.vercel.app/)

## 🚀 About the Project

Vibe Coding Assistant is an AI-powered developement environment that bridges the gap between idea and implementation. It allows users to describe their vision in natural language, and the AI handles the complex coding, scaffolding, and deployment processes.

**Who is this for?**
- **Developers:** Speed up prototyping and boilerplate generation.
- **Entrepreneurs:** MVP creation without deep technical knowledge.
- **Learners:** Understand how modern web apps are structured and built.

**Key Benefits:**
- **Rapid Development:** sensitive reduction in time-to-market.
- **User-Friendly:** Interface designed for natural conversation.
- **Modern Stack:** Built on the latest, most robust web technologies.

## 🛠️ Tech Stack

This project is built with a cutting-edge tech stack to ensure performance, scalability, and developer experience:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database API:** [Prisma](https://www.prisma.io/)
- **API Layer:** [tRPC](https://trpc.io/)
- **Asynchronous Jobs:** [Inngest](https://www.inngest.com/)
- **AI/Agents:** @e2b/code-interpreter, @inngest/agent-kit

## 📸 Functionality & Screenshots


**Dashboard View**

![Dashboard Placeholder](https://i.ibb.co/TMFqFryj/home.png)

**Project Generation**

![Generation Placeholder](https://i.ibb.co/dzTQknq/dashboard2.png)
![Generation Placeholder](https://i.ibb.co/7LhsSxr/dashboard1.png)

## 💻 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm
- A localized database (or connection string)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vibe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and populate it with necessary keys (Clerk, Database URL, etc.).
   ```env
   DATABASE_URL="your_database_url"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
   CLERK_SECRET_KEY="your_secret"
   # ... other keys
   ```

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
=======

>>>>>>> 96ac7604c750fb0f01087843abde4fc74e75eda4
