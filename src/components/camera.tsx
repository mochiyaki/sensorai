import { FloatButton } from 'antd';
import { CameraTwoTone, CameraOutlined } from '@ant-design/icons';
import { useState, RefObject } from 'react';

import '@/app/globals.css';
import { CAM_WIDTH, CAM_HEIGHT } from '@/utils/constants';

// Props expect refs to a video element and a canvas element.
interface CameraDisplayProps {
  video: RefObject<HTMLVideoElement>;
  canvas: RefObject<HTMLCanvasElement>;
}

export default function CameraDisplay({ video, canvas }: CameraDisplayProps) {
  const [hideCam, setHideCam] = useState(false);

  return (
    <>
      <FloatButton
        icon={hideCam ? <CameraOutlined /> : <CameraTwoTone />}
        style={{ position: 'absolute', top: '1%', right: '1%' }}
        onClick={() => setHideCam((prev) => !prev)}
      />
      <div
        hidden={hideCam}
        style={{
          position: 'absolute',
          top: '1%',
          right: '1%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <video ref={video} id="cam-video" />
        <canvas
          ref={canvas}
          width={CAM_WIDTH}
          height={CAM_HEIGHT}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'scaleX(-1)',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </>
  );
}
