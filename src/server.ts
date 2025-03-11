import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import pageRouter from './routes/page.routes'
dotenv.config()

// Create server
const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views')) // Tell Express where to look for the EJS pages

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) // Set public assets directory


app.use('/', pageRouter)

// 404 Fallback
app.use((req: Request, res: Response) => {
    res.status(404).render('404')
  })



  
  // Start server
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
  })


// This is your server file :)
