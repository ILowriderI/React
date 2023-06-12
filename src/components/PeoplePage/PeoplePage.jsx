import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { getApiRecourse, changeHTTP } from "../../utils/network";
import PeopleList from "../PeopleList/PeopleList";
import PeopleNavigation from "../PeopleNavigation/PeopleNavigation";
import { API_PEOPLE, SWAPI_PEOPLE } from "../../constans/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { withErrorAppi } from "../../hoc-halper/withErrorapi";
import { useQuaryParams } from "../../hooks/useQuaryParams";

const PeoplePage = ({ setErrorApi }) => {
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
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
          category: "people",
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
    getRecourse(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getRecourse={getRecourse}
        previousPage={previousPage}
        nextPage={nextPage}
        counterPage={counterPage}
        category={SWAPI_PEOPLE}
      />

      <PeopleList people={people} />
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorAppi(PeoplePage);
