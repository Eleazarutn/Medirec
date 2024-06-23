import React from 'react'
import { Header } from '../IndexDashComponents/Header'
import { DashBoard } from '../IndexDashComponents/DashBoard'
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
