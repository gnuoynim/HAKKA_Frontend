import React from 'react'
import MokkojiFolder from '../component/MokkojiFolder'
import MokkojiEtc from './MokkojiEtc'
import MokkojiPlace from './MokkojiPlace'
import MokkojiRestaurant from './MokkojiRestaurant'
import MokkojiSchedule from './MokkojiSchedule'
import { TabProvider, useTabContext } from '../context/TabContext'
import styled from 'styled-components'

const MokkojiHead = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 35px;
  img {
    width: 20px;
    height: 20px;
  }
  .icon_right {
    display:flex;
    img {
      width: 25px;
      height: 25px;
      &:first-of-type{
        margin-right:10px;
      }
    }
  }
`

const Content = () => {
  const { activeTab } = useTabContext()

  const renderContent = () => {
    switch (activeTab) {
      case '맛집':
        return <MokkojiRestaurant />
      case '장소':
        return <MokkojiPlace />
      case '일정':
        return <MokkojiSchedule />
      case 'ETC':
        return <MokkojiEtc />
      default:
        return null
    }
  }

  return <div>{renderContent()}</div>
}

const MokkojiMain: React.FC = () => {
  return (
    <>
      <MokkojiHead>
        <img src="icons/search.png" alt="search" />
        <p>모꼬지</p>
        <div className="icon_right">
          <img src="icons/link.png" alt="link" />
          <img src="icons/gear.png" alt="gear" />
        </div>
      </MokkojiHead>

      <TabProvider>
        <MokkojiFolder />
        <Content />
      </TabProvider>
    </>
  )
}

export default MokkojiMain
