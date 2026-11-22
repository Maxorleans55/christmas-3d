export default function Overlay({ inside, setInside }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" />
      </header>
      {!inside && (
        <div className="greeting">
          <div className="greeting__name">To my love, Jenny ❤️😘</div>
          <div className="greeting__text">
            Thanks for being the best girlfriend in the world. I love you so much and I hope you enjoy this little Christmas gift I made for you! 🎄
          </div>
        </div>
      )}
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
          }}>
          SCROLL TO LOOK INSIDE
        </button>
        <br />
        Made with love by Kay ❤️. Scene by LIGHTBULB, using LumaAI Gaussian Splatting and BlockadeLabs.
      </footer>
    </>
  )
}