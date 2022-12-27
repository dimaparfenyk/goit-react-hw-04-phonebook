import errorImage from './error.jpg'

export const PokemonErrorView=() =>{
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      {/* <p>{message}</p> */}
    </div>
  );
}