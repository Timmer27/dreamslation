import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export default function Detail({}: Props) {
  return (
    <div>
      <div>Detail</div>
      <Outlet />

    </div>
  )
}