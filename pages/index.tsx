import Image from "next/image";
import { get } from "lodash";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { Query,useGetLaunchesQuery } from "../generated";

function Home() {
  const { data } = useGetLaunchesQuery();

  const launches = get(
    data,
    "launchesPast",
    []
  ) as Query["launchesPast"];
  console.log(data);
  return (
    <div className="gridHere">
      {launches.map((launch) => (
        <Link href="/missions/[id]" as={`/missions/${launch.id}`}>
          <div key={launch.id} className="card">
            <div>
          <img src={launch.links.flickr_images!=null?launch.links.flickr_images:'https://i.imgur.com/t5R4BAQ.png'}
                  style={{ width: "200px", height: "200px" }}
                alt={launch.mission_name} />
              <br />
              <p className="paragrafe"> <b>{launch.mission_name}</b></p>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
