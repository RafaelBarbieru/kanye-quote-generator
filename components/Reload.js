import React from 'react'
import styles from '../styles/Reload.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"

const reload = () => {
    console.log('Reload')
}

export default function Reload() {
  return (
    <FontAwesomeIcon icon={faArrowsRotate} className={styles.reload} onClick={ reload } />
  )
}
