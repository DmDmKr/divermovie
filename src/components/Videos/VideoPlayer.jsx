const VIDEO_WIDTH = '800'
const VIDEO_HEIGHT = '500'

const VideoPlayer = ({ title, src, ariaLabelId }) => (
  <>
    <h2 id={ariaLabelId}>{title}</h2>
    <iframe
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      src={src}
      title={title}
      aria-labelledby={ariaLabelId}
      style={{ border: 'none' }}
      allow="clipboard-write; autoplay"
      allowFullScreen
    />
  </>
)

export default VideoPlayer
