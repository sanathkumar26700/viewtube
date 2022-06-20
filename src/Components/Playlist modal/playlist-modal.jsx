import './playlist-modal.css'

function PlayListModal({showModal ,setShowModal}) {
  return (
    <>
    {showModal && <section className="playlist--section">
      <article className="playlist--modal">
        <div className="playlist-modal__title-container">
          <span className="playlist-modal__title">Playlists</span>
          <span className="playlist-modal__close--btn"
                onClick={() => {setShowModal(false)}}>
            <i class="far fa-times-circle"></i>
          </span>
        </div>
      <button className="btn btn__primary btn__primary--animated">
        <i class="fas fa-folder-plus"></i>
        Create new playlist
      </button>
      </article>
    </section>}
    </>
  )
}

export default PlayListModal