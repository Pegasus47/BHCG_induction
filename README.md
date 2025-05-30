# BHCG Induction Task

This project is a React application built using Vite that displays a carousel of resources grouped by week(Wasn't sure about the tabular form so went with what I felt seemed best). The application includes custom UI components for cards, carousels, dialogs, and separators. It also handles error states by displaying a message when no data is available. 

![https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXB2YnN4YnI3ZGRzOWxreWZocDhjYnN0bm1xcm5wdGt4cjZibTU4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EOawn1aJKf221rUfCP/giphy.gif)


## Project Structure

```
c:\Users\Cartuln\BHCG\BHCG-Induction\src
│
├── App.tsx    // Main application component that renders the cards and handles modal video playback.
├── index.css         // Global styles, including Tailwind CSS configuration.
├── main.tsx            // Application entry point.
├── components/
│   ├── cardCarousel.tsx   // Contains the Minicard component that renders the resource carousel.
│   ├── customCard.tsx   // Wraps Minicard in a card layout and displays the week label.
│   └── ui/         // Contains all the SHADCN components 
└── lib/
   └── data.ts         // Sample data grouped by weeks.
```

## Features

- **Resource Carousel:** Displays resources (articles and videos) in a carousel layout.
- **Custom Cards:** Each week is represented by a custom card that holds a carousel of resources. If no resources exist for a week, an error message with an icon is shown.
- **Responsive UI:** Uses Tailwind CSS for styling and responsiveness.
- **Video Modal:** Clicking on a video resource opens it in a modal window.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- Package manager: pnpm
- If you do not have pnpm use the following to install it.
  ```bash
  npm install -g pnpm@latest-10
  ```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pegasus47/BHCG-Induction.git
   cd BHCG-Induction
   ```

2. **Install dependencies:**

   Using pnpm:
   ```bash
   pnpm i -r
   ```
## Running the Application

Start the development server:

Using pnpm:
```bash
pnpm run dev
```

Then open your browser and navigate to [http://localhost:5173](http://localhost:5173) (or the port indicated in the terminal as it might be different for you) to see the application running.

## Additional Notes

- **Data Handling:** The resource data is stored in the [`lib/data.ts`](./lib/data.ts) file and is grouped by week. If no resources exist, the application displays an error message with an icon.
- **UI Components:** Custom UI components are located in the [`components/ui/`](./components/ui) directory. These components provide the styling and layout functionality for cards, carousels, dialogs, and more.
- **Utilities:** Utility functions, such as the `cn` function for merging Tailwind classes, are in [`lib/utils.ts`](./lib/utils.ts).
