import React, { useEffect, useState } from "react";

import { getApiRecourse, changeHTTP } from "../../utils/network";
import PeopleList from "../PeopleList/PeopleList";
import PeopleNavigation from "../PeopleNavigation/PeopleNavigation";
import { API_PLANETS, SWAPI_PLANETS } from "../../constans/api";
import {
  getPeoplePageId,
  getPlanetsImage,
  getPlanetsId,
} from "../../services/getPeopleData";
import { withErrorAppi } from "../../hoc-halper/withErrorapi";
import { useQuaryParams } from "../../hooks/useQuaryParams";

const PlanetsPage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQuaryParams();
  const queryPage = query.get("page");

  const getRecourse = async (url) => {
    const data = await getApiRecourse(url);

    if (data) {
      const peopleList = data.results.map(({ name, url }) => {
        const id = getPlanetsId(url);
        const img = getPlanetsImage(id);

        return {
          id,
          name,
          img,
          category: "planets",
        };
      });

      setPeople(peopleList);
      setPreviousPage(changeHTTP(data.previous));
      setNextPage(changeHTTP(data.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getRecourse(API_PLANETS + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getRecourse={getRecourse}
        previousPage={previousPage}
        nextPage={nextPage}
        counterPage={counterPage}
        category={SWAPI_PLANETS}
      />

      <PeopleList people={people} />
    </>
  );
};

export default withErrorAppi(PlanetsPage);
