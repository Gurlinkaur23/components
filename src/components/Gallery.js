function Gallery(props) {
  return (
    <div className="gallery">
      <div className="container gallery-flex">
        {props.images.map((img) => (
          <img key={img.id} src={img.url} alt={`Image ${img.id}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
