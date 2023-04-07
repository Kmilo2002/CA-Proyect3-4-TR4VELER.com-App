import React from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom"

const Cards = () => {


  return (
    <div>
      <h4>Ciudades preferidas por los viajeros</h4>
      <div className="BigBox">
        <div className="Box1">
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 1</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 2</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 3</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 4</CardText>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="Box2">
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 5</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 6</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 7</CardText>
              </CardBody>
            </Card>
          </Link>
          <Link>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "380px",
                height: "230px",
              }}
            >
              <CardImg
                alt="Card image"
                src="https://picsum.photos/200/300"
                style={{
                  height: "190px",
                }}
              />
              <CardBody>
                <CardText className="cardtext">Ciudad 8</CardText>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
