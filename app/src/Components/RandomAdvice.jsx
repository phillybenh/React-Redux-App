import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchAdvice } from "../Store/Actions/adviceActions";
import { fetchCat } from "../Store/Actions/catActions";

const RandomAdvice = (props) => {
  useEffect(() => {
    props.fetchAdvice();
    props.fetchCat();
  }, []);
  // console.log("props", props);
  return (
    <div>
      <h2>Here's the random tip you need:</h2>
      <div className="adviceContainer">
        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        {props.advice && <h3>"{props.advice}"</h3>}
        {props.error && <p>{props.error}</p>}
        <button onClick={props.fetchAdvice}>Try a new tip!</button>
        <h3>Maybe that tip was useless. This cat is sorry.</h3>
        <img src={props.cat} alt="Random image of a cat" />
        <button onClick={props.fetchCat}>Try a new cat!</button>
      </div>
      <footer>
        <p>
          Thanks to{" "}
          <a href="https://api.adviceslip.com">Advice Slip JSON API</a> for
          supplying the advice.
        </p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    advice: state.advice.slip.advice,
    isFetching: state.advice.isFetching,
    error: state.advice.error,
    cat: state.cat.file,
  };
};

export default connect(mapStateToProps, { fetchAdvice, fetchCat })(
  RandomAdvice
);
