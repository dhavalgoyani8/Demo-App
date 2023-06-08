import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";

function UseEffectAPI2() {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUser(data);
    console.log(data[0].avatar_url);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Get Github Users Data</h1>

      <div className="container-fluid mt-5">
        <div className="row text-center">
          {user.map((value) => {
            console.log(value);
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-item-center">
                    <div className="image">
                      <img
                        src={value.avatar_url}
                        className="rounded"
                        width="155"
                        alt="user"
                      />
                    </div>

                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{value.login} <FcApproval /></h4>
                      <span className="textLeft">Web Developer</span>
                      <h4 className="mb-0 mt-0 textLeft"><FaGithubAlt /></h4>
                      
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>
                          <span className="number1">38</span>
                        </div>

                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">48</span>
                        </div>

                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">78</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UseEffectAPI2;
