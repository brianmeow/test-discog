import { useLazyQuery} from "@apollo/client";
import { useState } from "react";
import { GET_PINNED_ITEMS } from "../gql/queries";
import InputForm from "../shared/InputForm";
import Pinned from "./Pinned";

const PinnedSearch = () => {
    const [inputVal, setInputVal] = useState("");
    const [GetPinnedItems,{ loading, error, data }]= useLazyQuery(GET_PINNED_ITEMS);
    if (loading) return <p>Loading ...</p>;
  
    return (
      <div>
        <InputForm
          inputVal={inputVal}
          onChange={(e:any) => setInputVal(e.target.value)}
          onSubmit={() => GetPinnedItems({ variables: { username: `${inputVal}`} })}
        />
        {
          error?(<p>Error</p>):(
            <Pinned pinned={data ? data.user : null} />
          )
        }
      </div>
    );
  };
  
  export default PinnedSearch;