import React from 'react'
import "./Header.css"

export default function Header({
    title,
    subtitle,
}) {
    return <>
    <h1 title="header" data-testid="test-1" className="header">{title}</h1>
    <h2 className="header">{subtitle||""}</h2>
    </>
}
