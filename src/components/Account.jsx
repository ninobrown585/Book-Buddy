import { useGetUsersQuery } from "../store/api";

/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
export default function Account({token}) {
  const { data = {}, error, isLoading } = useGetUsersQuery(token);

  // Show a loading message while data is being fetched
if (isLoading) {
  return <div>Loading</div>;
}
// Show an error message if the fetch failed
if (error) {
  console.log(error.data);
  return <div>Please Login</div>;
}

    return (
    <div className="Account">
              <div className="account-details">
                <h2> Account Details </h2>
                <p> First Name: {data.firstname} </p>
                <p> Last Name: {data.lastname} </p>
                <p> Email: {data.email} </p>
                <p> Books: {data.books.length>0 ? JSON.stringify(data.books) : "No Checked Books!"} </p>
              </div>
      </div>
    );
  }