import React from 'react'
import styled from 'styled-components'
import { useTabContext } from '../context/TabContext'

const FolderStyle = styled.div`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    margin-right: 30px;
    align-items: center;
    flex-direction: column;
    opacity: 40%;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      opacity: 100%;
    }
  }
`

const MokkojiFolder: React.FC = () => {
  const { activeTab, setActiveTab } = useTabContext()

  return (
    <FolderStyle>
      <li
        className={activeTab === '맛집' ? 'active' : ''}
        onClick={() => setActiveTab('맛집')}
      >
        <img src="icons/restaurant.png" alt="맛집" />
        <div>맛집</div>
      </li>
      <li
        className={activeTab === '장소' ? 'active' : ''}
        onClick={() => setActiveTab('장소')}
      >
        <img src="icons/map.png" alt="장소" />
        <div>장소</div>
      </li>
      <li
        className={activeTab === '일정' ? 'active' : ''}
        onClick={() => setActiveTab('일정')}
      >
        <img src="icons/schedule.png" alt="일정" />
        <div>일정</div>
      </li>
      <li
        className={activeTab === 'ETC' ? 'active' : ''}
        onClick={() => setActiveTab('ETC')}
      >
        <img src="icons/etc.png" alt="ETC" />
        <div>ETC</div>
      </li>
    </FolderStyle>
  )
}

export default MokkojiFolder
