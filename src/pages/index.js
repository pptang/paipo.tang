import React from "react"
import { Link} from 'gatsby'
export default function Home() {
  return <div style={{ backgroundColor: '#0F151C', color: '#ff0a78', fontSize:'72px'}}>
    <Link to="/about/">About</Link>
    <h1>Paipo Tang</h1>
    <p>Tech Blog</p>
    <img src="https://drive.google.com/file/d/1lg5EoVGxljhoti6TgGHQbghr5ooVceK_/view?usp=sharing" alt="paipo avatar" />
    </div>
}
