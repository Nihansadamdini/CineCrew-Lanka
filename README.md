
# CineCrew Lanka

An AI-powered film and teledrama production management and talent discovery platform designed for the Sri Lankan film industry.

## Project Overview

CineCrew Lanka aims to connect directors, producers, actors, actresses, service providers, location owners and sponsors through a centralized digital platform.

The platform supports production management, talent discovery, casting recommendations, bookings and communication.

## Technology Stack

### Frontend
- Angular
- TypeScript
- CSS

### Backend
- Python
- FastAPI
- SQLAlchemy
- MySQL
- Alembic

### AI and Machine Learning
- Ollama
- Llama 3.2 3B
- nomic-embed-text
- ChromaDB
- Retrieval-Augmented Generation (RAG)

## Repository Structure

```text
CineCrew-Lanka/
├── frontend/
│   └── cinecrew-frontend/
├── backend/
│   ├── app/
│   └── alembic/
├── ai/
│   └── casting-assistant/
├── database/
│   ├── seed_data/
│   └── documentation/
├── docs/
├── tests/
│   ├── integration/
│   └── system/
├── .env.example
├── .gitignore
└── README.md
```

## Development Setup

### Frontend

Navigate to the frontend application:

```bash
cd frontend/cinecrew-frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Open http://localhost:4200/

### Backend

The FastAPI backend setup instructions will be added when the shared backend configuration is finalized.

## Documentation

Project documentation is maintained in the `docs/` directory.

## Team Development

The project uses Git feature branches and pull requests for collaborative development.

- `main` – Stable project version.
- `develop` – Shared integration branch.
- `feature/*` – Individual development branches.

## Project Status

Initial repository and application structure setup.
