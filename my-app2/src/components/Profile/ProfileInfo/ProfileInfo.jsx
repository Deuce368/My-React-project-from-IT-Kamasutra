import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://s1.1zoom.ru/prev/450/449428.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
    </div>
      
    </div>
  )
}

export default ProfileInfo;