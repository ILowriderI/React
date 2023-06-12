import { getApiRecourse } from "../../utils/network.js";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { withErrorAppi } from "../../hoc-halper/withErrorapi";
import { API_SEARCH } from "../../constans/api";
import { useState, useEffect, useCallback } from "react";
import SearchInfo from "../SearchInfo/SearchInfo.jsx";
import UiInput from "../UI-kit/UiInput/UiInput.jsx";
import { debounce } from "lodash";

const SearchPage = ({ setErrorApi }) => {
  const [searchValue, setSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiRecourse(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
    }

    setErrorApi(!res);
  };

  const inputChange = (value) => {
    debounceResp(value);
    setSearchValue(value);
  };
  useEffect(() => {
    getResponse("");
  }, []);

  const debounceResp = useCallback(
    debounce((value) => getResponse(value), 500),
    []
  );

  return (
    <>
      <h1>Search </h1>
      <UiInput
        value={searchValue}
        inputChange={inputChange}
        placeholder="Input name"
      />
      <SearchInfo people={people} />
    </>
  );
};

export default withErrorAppi(SearchPage);
