import React, { useState } from 'react'
import s from '../../Header.module.css'
import classNames from 'classnames'

const HeaderItem = ({ title, submenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen)
  }
  const item = submenu.map(item => {
    if (item === 'View all Projects') {
      return (
        <li>
          <a href="#section" className={s.blueLink}>
            {item}
          </a>
        </li>
      )
    }
    if (item === 'Development Tools') {
      return <li className={s.uppercaseText}>{item}</li>
    }
    if (item === 'Spring Initializr') {
      return (
        <li>
          <a className={s.menuSublink} href="#s">
            {item}
          </a>
        </li>
      )
    }
    return (
      <li>
        <a href="#s" className={s.menuSublink}>
          {item}
        </a>
      </li>
    )
  })
  return (
    <>
      {submenu.length !== 0 ? (
        <li className={classNames({ [s.active]: isOpen })}>
          <a href="#s" className={s.hasSubmenu}>
            {title}
          </a>
          <span className={s.menuArrow} onClick={onArrowClickHandler} />
          <ul className={s.menuSublist}>{item}</ul>
        </li>
      ) : (
        <li>
          <a href="#s" className={s.menuLink}>
            {title}
          </a>
        </li>
      )}
    </>
  )
}

export default HeaderItem