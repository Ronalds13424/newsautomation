# Automatic News Site built on the Mediastack API

An automatic news site built with SvelteKit that fetches and displays real-time news articles using the [Mediastack API](https://mediastack.com/). This project helps users easily view categorized news from different countries and languages, with a dynamic front-end powered by SvelteKit.

## Getting Started

To get a copy of this project running on your local machine, follow these steps.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (Node Package Manager, included with Node.js)

## Project Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ronalds13424/newsautomation.git
    cd newsautomation
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

## API Configuration

This project uses the Mediastack API to fetch news data. To configure the API:

1. **Create a Mediastack account** and obtain your API key from the [Mediastack Dashboard](https://mediastack.com/dashboard).
2. **Create a `.env` file** in the root of the project and add your API key:
    ```plaintext
    VITE_MEDIASTACK_API_KEY=your_api_key_here
    ```

## Running the Project

To run the project locally:

```bash
npm run dev
Visit http://localhost:5173 in your browser to view the site.
```

## Contributions
Contributions are welcome!

## Images
Images of the example frontend can be found in images directory

