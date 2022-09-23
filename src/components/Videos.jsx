import { Box, Stack } from '@mui/material';
import { ChannelCard, VideoCard } from 'components';
import React from 'react';

function Videos({ videos, direction }) {
  if (!videos?.length) return 'Loading...';
  return (
    <div>
      <Stack
        direction={direction || 'row'}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  );
}

export default Videos;
