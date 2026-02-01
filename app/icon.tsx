import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#0a0a0a', // Theme background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981', // Emerald-500 accent
          borderRadius: '4px', // Slight rounded corners looks modern
          fontFamily: 'monospace',
          fontWeight: 900,
          border: '1px solid #27272a', // Subtle zinc-800 border
        }}
      >
        &gt;_
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
