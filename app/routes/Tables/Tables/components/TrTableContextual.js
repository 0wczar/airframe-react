import React from "react";
import { faker } from "@faker-js/faker";
import _ from "lodash";

import { Badge } from "./../../../../components";

/*eslint-disable */
const trColor = [
  "table-active",
  "",

  "table-success",
  "",

  "table-info",
  "",

  "table-warning",
  "",

  "table-danger",
  "",

  "table-primary",
  "",
];
/*eslint-enable */
/*eslint-disable */
const statusColor = [
  "secondary",
  "secondary",

  "success",
  "secondary",

  "info",
  "secondary",

  "warning",
  "secondary",

  "danger",
  "secondary",

  "primary",
  "secondary",
];
/*eslint-enable */

const TrTableContextual = () => (
  <React.Fragment>
    {_.times(12, (index) => (
      <tr className={trColor[index % 12]} key={index}>
        <td className="align-middle">#{faker.finance.mask()}</td>
        <td className="align-middle">
          {faker.person.firstName()} {faker.person.lastName()}
        </td>
        <td className="align-middle">
          {faker.date.weekday()}, 12 {faker.date.month()}, 2018
        </td>
        <td className="align-middle">$ {faker.finance.amount()}</td>
        <td className="align-middle">
          <Badge color={statusColor[index % 12]}>
            {faker.finance.accountName()}
          </Badge>
        </td>
        <td className="align-middle text-right">{faker.location.country()}</td>
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableContextual };
