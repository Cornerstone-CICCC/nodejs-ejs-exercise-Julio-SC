import { Router, Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

const pageRouter = Router()

// Home page
pageRouter.get('/home', (req: Request, res: Response) => {
  res.status(200).render('index')
})

// About page
pageRouter.get('/about-us', (req: Request, res: Response) => {
  res.status(200).render('about')})

// Contact page
pageRouter.get('/contact-us', (req: Request, res: Response) => {
  res.status(200).render('contact')

})

export default pageRouter