import React from 'react'

export default function Project(props) {
  const links = props.links.map((link) => {
    return (
      <li>
        <a
          className="text-sky-400 underline"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.type}
        </a>
      </li>
    )
  })

  return (
    <div className="pb-5">
      <h3 className="text-xl">{props.name}</h3>
      <p>{props.description}</p>
      <ul>{links}</ul>
    </div>
  )
}
