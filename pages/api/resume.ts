import { readFileSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd() + `/public/Sanchit's resume.pdf`)

  try {
    const pdfBuffer = readFileSync(filePath)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-disposition', `filename="Sanchit's Resume"`)
    res.send(pdfBuffer)
  } catch (err) {
    res.status(404).json({ status: 'error', message: 'Resume not found.' })
  }
}
