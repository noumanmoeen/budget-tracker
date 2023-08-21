import React from 'react'
import { Tab, Tabs } from './Tabs'
import MonthlyDetails from './MonthlyDetails'
import YearlyDetails from './YearlyDetails'

export const DetailsTabs = () => {
  return (
    <div>
        <Tabs>
        <Tab label="Monthly">
         <MonthlyDetails />
        </Tab>
        <Tab label="Yearly">
          <YearlyDetails />
        </Tab>
      </Tabs>
    </div>
  )
}
