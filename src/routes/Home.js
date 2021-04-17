import React from "react";
import axios from "axios";
import querystring from "querystring";
import "./Home.css";
import CreateContent from "../components/CreateContent";
import UpdateContent from "../components/UpdateContent";
import Loadingpage from "../components/Loadingpage";
import Mainpage from "../components/Mainpage";

const datas = [
  {
    title: "WEB",
    description: `The World Wide Web (WWW), commonly known as the Web, is an information
        system where documents and other web resources are identified by Uniform
        Resource Locators (URLs, such as https://example.com/), which may be
        interlinked by hypertext, and are accessible over the Internet.[1][2]
        The resources of the Web are transferred via the Hypertext Transfer
        Protocol (HTTP), may be accessed by users by a software application
        called a web browser, and are published by a software application called
        a web server. The World Wide Web is not synonymous with the Internet,
        which pre-dated the Web in some form by over two decades and upon which
        technologies the Web is built.`,
  },
];

class Home extends React.Component {
  state = {
    isLoading: true,
    topics: [],
  };

  UpdateDB = (callback) => {
    this.setState({ isLoading: true }, () => {
      axios.get("http://localhost:4000/topics.json").then((res) => {
        this.setState({ topics: res.data, isLoading: false }, () => {
          callback();
        });
      });
    });
  };

  getdata = async () => {
    const { data } = await axios.get("http://localhost:4000/topics.json");
    this.setState({ topics: data, isLoading: false });
  };

  componentDidMount() {
    this.getdata();
  }

  render() {
    const { pathname } = this.props.location;
    const { id } = querystring.parse(this.props.location.search, "?");
    const { isLoading, topics } = this.state;
    const pageObj = topics.find((x) => x.id === Number(id));
    //쿼리스트링 id값으로 곧 그거에 맞는 객체를 찾아내는 코드
    if (pathname === "/") {
      return (
        <>
          {isLoading ? (
            <>
              <Loadingpage />
            </>
          ) : (
            <>
              <Mainpage
                list={topics}
                Topic_title={datas[0].title}
                Topic_description={datas[0].description}
                selector={"Home"}
              />
            </>
          )}
        </>
      );
    } else if (pathname === "/topics") {
      return (
        <>
          {isLoading ? (
            <>
              <Loadingpage />
            </>
          ) : (
            <>
              <Mainpage
                list={topics}
                Topic_title={pageObj.title}
                Topic_description={pageObj.title}
                selector={"About"}
                id={pageObj.id}
                DATAfunction={(pageId) => {
                  axios
                    .post("http://localhost:4000/delete_process", {
                      data: {
                        id: pageId,
                      },
                    })
                    .then((res) => {
                      this.props.history.push(`/`);
                      this.UpdateDB(() => {});
                    })
                    .catch((err) => {
                      throw err;
                    });
                }}
              />
            </>
          )}
        </>
      );
    } else if (pathname === "/topics/create") {
      return (
        <>
          {isLoading ? (
            <>
              <Loadingpage />
            </>
          ) : (
            <>
              <Mainpage
                list={topics}
                Topic_title={"Create"}
                Topic_description={
                  <CreateContent
                    onChange={(title, description) => {
                      axios
                        .post("http://localhost:4000/create_process", {
                          data: {
                            title: title,
                            description: description,
                          },
                        })
                        .then((res) => {
                          const { insertId } = res.data;
                          this.UpdateDB(() => {
                            this.props.history.push(`/topics?id=${insertId}`);
                          });
                        })
                        .catch((err) => {
                          throw err;
                        });
                    }}
                  />
                }
                selector={"About"}
              />
            </>
          )}
        </>
      );
    } else if (pathname === "/topics/update") {
      return (
        <>
          {isLoading ? (
            <>
              <Loadingpage />
            </>
          ) : (
            <>
              <Mainpage
                list={topics}
                Topic_title={"Update"}
                Topic_description={
                  <UpdateContent
                    onChange={(page, title, description) => {
                      axios
                        .post("http://localhost:4000/update_process", {
                          data: {
                            id: page,
                            title: title,
                            description: description,
                          },
                        })
                        .then((res) => {
                          this.props.history.push(`/topics?id=${page}`);
                          //axios는 단순히 데이터만 처리하는 코드이기에 재랜더가 일어나지 않는다.
                          // 따라서 의도적으로 state를 변화를 주어 재랜더가 일어나게하여 componentDidUpdate()가 실행되게 하였다.
                          this.UpdateDB(() => {});
                        })
                        .catch((err) => {
                          throw err;
                        });
                    }}
                    id={pageObj.id}
                    title={pageObj.title}
                    description={pageObj.description}
                  />
                }
                selector={"Update"}
                id={id}
              />
            </>
          )}
        </>
      );
    }
  }
}

export default Home;
