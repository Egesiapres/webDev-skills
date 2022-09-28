function Facility (props) {
    return (
    <div key={props.facility.id}>
      <h3>{props.facility.name}</h3>
      <p>{props.facility.city}</p>
      
      <button>Modifica</button>
      
    </div>
  )
}

export default Facility;

// PROBLEMS
// 1. React Hook useEffect has a missing dependency: 'props.data'. Either include it or remove the dependency array. If 'setState' needs the current value of 'props.data', you can also switch to useReducer instead of useState and read 'props.data' in the reducer  react-hooks/exhaustive-deps

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()