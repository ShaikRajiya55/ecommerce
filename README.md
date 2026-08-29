# NexusCRM Enterprise Platform

NexusCRM is an enterprise-grade Customer Relationship Management (CRM) platform designed for sales operations, lead scoring, deal pipeline tracking, automation workflows, and executive business intelligence.

## Dependencies

- Node.js >= 18.0.0
- npm >= 9.0.0
- TypeScript >= 5.0.0

## Installation

```bash
# Clone repository
git clone https://github.com/ShaikRajiya55/NexusCRM-.git
cd NexusCRM-

# Install production and development dependencies
npm install
```

## Build

```bash
# Compile TypeScript backend and build production bundle
npm run build
```

## Run

```bash
# Start backend server in development mode
npm run dev

# Start production server
npm start
```

## Docker Execution

```bash
# Build Docker image
docker build -t nexuscrm:latest .

# Run Docker container
docker run -p 4000:4000 nexuscrm:latest
```

## Testing

```bash
# Run automated test suites
npm test
```

## Usage

Access the API gateway at `http://localhost:4000/api/v1/health` or open the frontend dashboard at `http://localhost:3000`.
