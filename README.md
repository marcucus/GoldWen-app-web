# GoldWen Showcase Website

A beautiful, SEO-optimized showcase website for the GoldWen dating application, built with NestJS, TypeScript, and Tailwind CSS.

![GoldWen Showcase](https://github.com/user-attachments/assets/16e870fd-04c6-4f82-b463-78ba74bfbf22)

## About GoldWen

GoldWen is a revolutionary dating app that combats "dating burnout" by focusing on quality over quantity. Our approach includes:

- **Daily Selection**: 3-5 carefully curated profiles per day
- **Smart Matching**: Algorithm based on personality and values compatibility
- **Ephemeral Conversations**: 24-hour time limit to encourage authentic exchanges
- **Calm Technology**: Minimalist design to reduce anxiety

**Slogan**: *"Conçue pour être désinstallée"* (Designed to be uninstalled)

## Tech Stack

- **Backend**: NestJS with TypeScript
- **Styling**: Tailwind CSS with custom GoldWen theme
- **Templating**: Handlebars (HBS)
- **Design Philosophy**: Calm Technology with elegant gold aesthetic

## Design System

### Color Palette
- **Primary Gold**: `#D4AF37` (matte, elegant)
- **Secondary**: Cream and beige tones (`#FBF9F7`, `#F5F1EB`)
- **Text**: Dark gray (`#1F1F1F`) for excellent readability

### Typography
- **Titles**: Playfair Display (serif)
- **Body Text**: Lato, Open Sans (sans-serif)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/marcucus/GoldWen-app-web.git
cd GoldWen-app-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Build CSS**
```bash
npm run build:css
```

4. **Start the development server**
```bash
npm run start:dev
```

The website will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Start production server
- `npm run start:dev` - Start development server with watch mode
- `npm run build` - Build the application
- `npm run build:css` - Compile Tailwind CSS
- `npm run watch:css` - Watch and compile CSS changes
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── app.controller.ts    # Main route controller
│   ├── app.service.ts       # Business logic and data
│   ├── app.module.ts        # NestJS module configuration
│   ├── main.ts              # Application entry point
│   └── styles.css           # Tailwind CSS source
├── views/
│   └── index.hbs            # Main template
├── public/
│   ├── css/                 # Compiled CSS
│   ├── js/                  # Static JavaScript
│   └── images/              # Static images
└── specifications.md        # Detailed app specifications
```

## Features

### SEO Optimization
- Meta tags for description, keywords, and author
- Open Graph and Twitter Card meta tags
- Structured data (JSON-LD) for search engines
- Semantic HTML structure
- Canonical URLs

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized typography scaling

### Performance
- Optimized CSS with Tailwind's purge feature
- Compressed images and assets
- Efficient font loading with preconnect
- Minimal JavaScript for smooth interactions

## Deployment

### Build for Production
```bash
npm run build
npm run build:css
```

### Environment Variables
Create a `.env` file for production settings:
```env
PORT=3000
NODE_ENV=production
```

### Docker Support
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build && npm run build:css
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary to GoldWen.

## Contact

For questions about this showcase website, please contact the GoldWen development team.

---

*GoldWen - La qualité plutôt que la quantité*
