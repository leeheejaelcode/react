function Picture({ name }) {
  return (
    <picture>
      <source type="image/avif" srcSet={`/assets/${name}.avif`} />
      <source type="image/webp" srcSet={`/assets/${name}.webp`} />
      <img src={`/assets/${name}.png`} alt={name} height={42} />
    </picture>
  );
}

export default Picture;
