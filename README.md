# Sports Leaderboard

A modern Angular application that displays a live sports leaderboard and allows users to add new entries in real-time. The application is built using Angular and Nx Monorepo.

## Features

- Display a live leaderboard of athletes with their position, color, name, and time
- Add new entries through a form with validation
- Automatic sorting based on time
- Responsive design
- Modern UI with smooth animations

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm (v9 or later)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd sports-leaderboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`. The development server will automatically reload if you change any of the source files.

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the application for production
- `npm test` - Runs unit tests
- `npm run lint` - Runs the linter to check code quality
- `npm run e2e` - Runs end-to-end tests
- `npm run dev` - Starts the development server with development configuration

## Project Structure

- `apps/leaderboard/` - Main application code
  - `src/app/components/` - Angular components
  - `src/app/services/` - Services for data management
  - `src/app/models/` - TypeScript interfaces and models

## Technologies

- Angular 19.2
- Nx 21.0
- Angular Material
- TypeScript 5.7
- SCSS
- RxJS 7.8

## Development Tools

This project uses Nx as a build system. For more information about Nx capabilities, visit:
- [Nx Documentation](https://nx.dev)
- [Nx Angular Guide](https://nx.dev/angular)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Submit a pull request

## License

MIT
