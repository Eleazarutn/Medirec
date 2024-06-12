import React from 'react'
import { Header } from './Header'
import { DashBoard } from './DashBoard'
import { ServicesDashBoard } from './ServicesDashBoard'

export const IndexDashboard = () => {
  return (
    <>
        <Header></Header>
        <DashBoard></DashBoard>
        <ServicesDashBoard></ServicesDashBoard>
    </>
  )
}
