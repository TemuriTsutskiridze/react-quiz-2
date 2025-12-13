import emptyImageLight from '../assets/empty-image-light-mode.png'
import emptyImageDark from '../assets/empty-image-dark-mode.png'

function EmptyState({ darkMode }) {
  return (
    <div className="empty-state">
      <div className="empty-illustration">
        <img src={darkMode ? emptyImageDark : emptyImageLight} alt="Empty state" />
      </div>
      <p>Empty...</p>
    </div>
  )
}

export default EmptyState