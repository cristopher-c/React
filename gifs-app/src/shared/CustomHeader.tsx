interface Props {
  title : String,
  description? : String
}

const CustomHeader = ({title, description}:Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}

export default CustomHeader
