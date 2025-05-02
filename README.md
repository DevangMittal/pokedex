# Pokédex Application

A full-stack Pokédex application built with modern web technologies. Search, filter and explore Pokémon with an intuitive interface.

## 🌐 Live Demo

[View Live Demo](https://pokedex-mu-tan.vercel.app/part1)

## ✨ Features

### Part 1: Single Pokémon Search
- Search for individual Pokémon by name
- View detailed information including ID, name, types and sprite
- Responsive card layout for each Pokémon

### Part 2: Multiple Pokémon Search  
- Search for multiple Pokémon simultaneously
- Enter comma-separated Pokémon names
- View results in a clean table format

### Part 3: Type Filtering
- Filter Pokémon by their types
- Interactive type selection dropdown
- Real-time filtering of results

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - React
  - Material UI
  - TypeScript

- **Backend**
  - tRPC
  - Prisma ORM
  - PostgreSQL

- **Deployment**
  - Vercel
  - PlanetScale (Database)

## 🏗️ Project Structure

src/
├── app/ # Next.js App Router pages
├── components/ # Reusable React components
├── server/ # Backend & API logic
└── utils/ # Utility functions

## �� Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/devangmittal/pokedex.git
cd pokedex
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create a .env file with:
DATABASE_URL="your-database-url"
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
npm start
```


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Devang Mittal

## 🙏 Acknowledgments

- PokeAPI for Pokémon data
- Next.js team for the amazing framework
- Vercel for hosting