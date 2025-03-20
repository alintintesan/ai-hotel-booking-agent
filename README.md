# AI Hotel Booking Agent

An AI-powered hotel booking assistant that helps users search for accommodations, retrieve detailed hotel information, and provide a seamless booking experience. This project leverages the `Mastra.ai` framework and integrates with OpenAI's GPT-4o model for natural language processing.

---

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Environment Configuration Guide](#environment-configuration-guide)
- [Architecture Overview](#architecture-overview)

---

## Setup Instructions

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd ai-hotel-booking-agent
   ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Set up environment variables in the root directory.**

4. **Run the development server**
    ```
    npm run dev
    ```

5. **Run tests**
    ```
    npm run test
    ```

## Environment Configuration Guide
The project requires the following environment variables to be set up in a .env file:
- OPENAI_API_KEY=your-openai-api-key
- LITE_API_KEY=your-lite-api-key
- STORE_LAST_MESSAGES=number-of-messages-to-store

## Architecture Overview
```
ai-hotel-booking-agent/
├── src/
│   ├── mastra/
│   │   ├── agents/
│   │   │   ├── hotel-search.agent.ts       # Handles hotel search functionality
│   │   ├── services/
│   │   │   ├── hotel-search.service.ts     # Service for interacting with the hotel search API
│   │   ├── tools/
│   │   │   ├── hotel-search.tool.ts        # Tool for hotel search
│   │   ├── utils/
│   │   │   ├── api-endpoints.ts            # API endpoint constants
│   │   │   ├── constants.ts                # Shared constants
|   |   ├── helpers/
|   |   |   ├── hotel-data-parser.ts        # Parser for the hotel data
│   ├── index.ts                            # Entry point for the application
├── tests/
│   ├── hotel-search.agent.test.ts          # Tests for hotel search agent
├── .env                                    # Environment variables
├── jest.config.cjs                         # Jest configuration
├── package.json                            # Project metadata and scripts
```
### Key Components:
Agents:

- hotel-search.agent.ts: Handles user queries for hotel searches.

Services:

- hotel-search.service.ts: Interacts with the hotel search API.

Tools:

- hotel-search.tool.ts: Encapsulates the logic for hotel search.

Helpers:
- hotel-data-parser.ts: Helps parse the hotel details data.

Utilities:

- api-endpoints.ts: Defines API endpoints.
- constants.ts: Stores shared constants.
- helpers.ts: Contains reusable utility functions.