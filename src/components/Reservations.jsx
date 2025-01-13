//this route returns a list of books the current user has checked out.

import { useGetBookReservationsQuery, useReturnBookMutation} from "../store/api";
import Grid from '@mui/material/Grid';

import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const Reservations = () => {
  const {data, isLoading, error} = useGetBookReservationsQuery();
  const [returnBook] = useReturnBookMutation();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
}

  if (error || !data) {
      return <Alert severity="error">Failed to load your book reservations. Try again later.</Alert>;
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.reservation.length > 0 ? data.reservation.map(reservation => (
              <Grid key={reservation.id} item xs={3}>
                  <div className="topCard" >
              <div className="card">
              <figure>
                  <img className="card" src={reservation.coverimage} alt={reservation.name} />
              </figure>
              <div className="container">
              <h3>
                  {reservation.title} by {reservation.author}
              </h3>
              <button onClick={() => returnBook(reservation.id)}>Book Return</button>
              </div></div></div>
              </Grid>
          )): (
              <Grid container alignItems="center" justifyContent="center" sx={{marginTop:8}}>
                  <Typography variant="body2">No books in collection</Typography>
              </Grid>
          )}
          </Grid>
  )
}

export default Reservations;
