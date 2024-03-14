
const Container = ({children}) => {
    return (
        <div className="card" style={{width: "80%", display:'flex',  margin:'20px'}}>
  <div className="card-body">
   {children}
  </div>
</div>
    )
}

export default Container;