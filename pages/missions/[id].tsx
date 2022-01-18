import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { Launch, useGetLaunchQuery } from "../../generated";

function SinglemissionPage({ query }) {
  const id = get(query, "id");
  const { data } = useGetLaunchQuery({
    variables: {
      id
    },
  });
  const launch = get(data, "launch", {}) as Launch
  console.log(data);
  return (
    <div className="card1">
     <p className="paragrafe"><b>Name:</b><br /> {launch.mission_name}</p>
     <p className="paragrafe"><b>Launch Details:</b> <br /><br />{launch.details}</p>
     <p className="paragrafe"><b>Launch_Date_Utc: </b><br /> {launch.launch_date_utc }</p>
    </div>
  );
}

export default withApollo(SinglemissionPage, { getDataFromTree });
