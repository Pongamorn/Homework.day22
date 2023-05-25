
export const Prokemom = () => {
    let data = fetch('https://pokeapi.co/api/v2/ability/7/').then(res => res.json())
  return (
    <div>{data.name}</div>
  )
}
