## Getting Started

### Without Docker

1. Install: `pnpm install`
2. Run: `pnpm dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### With Docker

1. Build: `docker build -t nextjs-docker .`
2. Run: `docker run -p 3000:3000 --env-file .env.local nextjs-docker`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Authentication

1. Create env file: `cp .env.local.example .env.local`
2. Fill in AUTH prefixed environment variables.
