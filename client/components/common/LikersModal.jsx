'use client'

export default function LikersModal({ likers, loading, onClose }) {
  return (
    <div
      className="_likers_modal_overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 8,
          padding: 16,
          minWidth: 280,
          maxHeight: 400,
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <h4 style={{ margin: 0 }}>Liked by</h4>
          <button
            type="button"
            onClick={onClose}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        {loading && <p>Loading...</p>}

        {!loading && likers.length === 0 && <p>No likes yet.</p>}

        {!loading &&
          likers.map((like) => (
            <div key={like._id} style={{ padding: '6px 0' }}>
              {like.user?.firstName} {like.user?.lastName}
            </div>
          ))}
      </div>
    </div>
  )
}
