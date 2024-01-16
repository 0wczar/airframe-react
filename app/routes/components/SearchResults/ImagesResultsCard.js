import React from "react";
import { faker } from "@faker-js/faker";

import {
  Card,
  CardImg,
  HolderProvider,
  Media,
  Avatar,
  AvatarAddOn,
  CardFooter,
  CardBody,
} from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";

const status = ["danger", "success", "warning", "secondary"];

const ImagesResultsCard = () => (
  <React.Fragment>
    {/* START Card */}
    <Card className="mb-3">
      <HolderProvider.Icon iconChar="" size={32}>
        <CardImg top />
      </HolderProvider.Icon>
      <CardBody>
        <div className="d-flex mb-3">
          <span>
            <a className="h6 text-decoration-none" href="#">
              {faker.commerce.productName()}
            </a>
            <br />
            <a href="#" className="text-success">
              {faker.internet.url()}
            </a>
          </span>
          <a href="#" className="ml-auto">
            <i className="fa fa-external-link"></i>
          </a>
        </div>
        <Media>
          <Media left className="align-self-center mr-3">
            <Avatar.Image
              size="md"
              src={randomAvatar()}
              addOns={[
                <AvatarAddOn.Icon
                  className="fa fa-circle"
                  color="white"
                  key="avatar-icon-bg"
                />,
                <AvatarAddOn.Icon
                  className="fa fa-circle"
                  color={randomArray(status)}
                  key="avatar-icon-fg"
                />,
              ]}
            />
          </Media>
          <Media body>
            <div className="mt-0 d-flex text-inverse">
              {faker.person.firstName()} {faker.person.lastName()}
            </div>
            <span>
              {faker.location.state()}, {faker.location.stateAbbr()}
            </span>
          </Media>
        </Media>
      </CardBody>
      <CardFooter className="bt-0">
        <span className="mr-3">
          <i className="fa fa-eye mr-1"></i>{" "}
          <span className="text-inverse">233</span>
        </span>
        <span>
          <i className="fa fa-heart-o mr-1"></i>{" "}
          <span className="text-inverse">98</span>
        </span>
      </CardFooter>
    </Card>
    {/* END Card */}
  </React.Fragment>
);

export { ImagesResultsCard };
