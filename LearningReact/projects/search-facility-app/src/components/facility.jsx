import { Typography } from '@mui/material';
import FormDialog from './formDialog';

function Facility(props) {
  return (
    <div key={props.facility.id}>
      <Typography variant="h6">{props.facility.name}</Typography>
      <Typography variant="body1">{props.facility.city}</Typography>

      <FormDialog facility={props.facility} />
      <br />
    </div>
  );
}

export default Facility;

// PROBLEMS
// 1. React Hook useEffect has a missing dependency: 'props.data'. Either include it or remove the dependency array. If 'setState' needs the current value of 'props.data', you can also switch to useReducer instead of useState and read 'props.data' in the reducer  react-hooks/exhaustive-deps

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()
