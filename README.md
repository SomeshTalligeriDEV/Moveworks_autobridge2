# AutoBridge AI

Build Connectors in Seconds - Transform manual connector building into one-click automation. Generate, validate, deploy, and monitor Moveworks connectors with AI.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Moveworks_autobridge2
```

### 2. Frontend Setup

```bash
cd frontend
```

#### Install Dependencies

Using yarn (recommended):
```bash
yarn install
```

Or using npm:
```bash
npm install --legacy-peer-deps
```

#### Start the Frontend

```bash
yarn start
```

Or with npm:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

### 3. Backend Setup (Optional)

```bash
cd ../backend
```

Follow backend-specific setup instructions if available.

## Project Structure

```
Moveworks_autobridge2/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Main application pages
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utility libraries
│   ├── public/         # Static assets
│   └── package.json    # Frontend dependencies
├── backend/            # Backend API (if applicable)
└── README.md          # This file
```

## Available Scripts

In the frontend directory:

- `yarn start` - Runs the app in development mode
- `yarn build` - Builds the app for production
- `yarn test` - Launches the test runner

## Features

- **AI-Powered Generation** - Generate connector YAML instantly using natural language prompts
- **Smart Validation** - Automatic endpoint validation and error detection before deployment
- **Ambient Monitoring** - Proactive health checks and intelligent failure alerts

## Integrations

- Slack
- Jira
- GitHub
- Microsoft Teams

## Troubleshooting

### Dependency Issues

If you encounter dependency conflicts:

1. Delete `node_modules` and `package-lock.json`/`yarn.lock`
2. Reinstall with `--legacy-peer-deps` flag for npm or use yarn

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Port Already in Use

If port 3000 is already in use, the application will prompt to use a different port or you can specify one:

```bash
PORT=3001 yarn start
```

## Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_BACKEND_URL=your_backend_url_here
```

## Support

For issues and questions, please check the troubleshooting section above or contact the development team.
