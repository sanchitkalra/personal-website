import React from 'react'

export default function Work(props) {
  const roles = props.roles.map((role) => {
    return (
      <li className="py-4">
        <p>{role.des}</p>
        <p>
          {role.timeline[0]} - {role.timeline[1] ? role.timeline[1] : 'present'}
        </p>
        <p>{role.description}</p>
      </li>
    )
  })

  return (
    <div className="flex flex-col pb-5">
      <h3 className="text-xl">{props.name}</h3>
      <ul>{roles}</ul>
    </div>
  )
}
