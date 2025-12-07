import { FloatButton } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

const Social: FC = () => (
  <>
    <a href='https://github.com/mochiyaki/sensorai' target='_blank' rel='noopener noreferrer'>
      <FloatButton
        icon={<GithubOutlined />}
        style={{ position: 'absolute', bottom: '1%', right: '1%' }}
      />
    </a>
  </>
);

export default Social;
