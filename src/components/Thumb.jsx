export default function Thumb({ image_url }) {
    return (
      <div className="thumb-box">
        <img className="thumb" src={image_url} alt="thumbnail" />
      </div>
    );
  }